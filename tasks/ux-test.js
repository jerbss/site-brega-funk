import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runTest() {
	console.log("Starting UX/UI automated tests...");

	const outputDir = path.resolve('tests-output');
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}

	const browser = await chromium.launch({ headless: true });

	const viewports = [
		{ name: 'desktop', width: 1280, height: 800, isMobile: false },
		{ name: 'mobile', width: 375, height: 812, isMobile: true }
	];

	const consoleLogs = [];
	const pageErrors = [];

	for (const vp of viewports) {
		console.log(`Testing viewport: ${vp.name} (${vp.width}x${vp.height})`);

		const context = await browser.newContext({
			viewport: { width: vp.width, height: vp.height },
			userAgent: vp.isMobile
				? 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.8 Mobile/15E148 Safari/604.1'
				: undefined,
			deviceScaleFactor: 2
		});

		const page = await context.newPage();

		page.on('console', (msg) => {
			consoleLogs.push({
				viewport: vp.name,
				type: msg.type(),
				text: msg.text(),
				location: msg.location()
			});
		});

		page.on('pageerror', (err) => {
			pageErrors.push({
				viewport: vp.name,
				message: err.message,
				stack: err.stack
			});
		});

		const url = process.argv[2] || 'http://localhost:8888';
		console.log(`Navigating to ${url}...`);

		try {
			await page.goto(url, { waitUntil: 'load', timeout: 30000 });
		} catch (e) {
			console.error(`Failed to navigate to ${url}:`, e.message);
			await browser.close();
			process.exit(1);
		}

		await delay(3000);

		// Take Hero screenshot
		await page.screenshot({ path: path.join(outputDir, `${vp.name}_01_hero.png`) });
		console.log(`Saved ${vp.name}_01_hero.png`);

		// Scroll step-by-step
		const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
		const steps = 8;
		for (let i = 1; i <= steps; i++) {
			const y = Math.floor((scrollHeight / steps) * i);
			console.log(`Scrolling to y=${y}...`);
			await page.evaluate((targetY) => window.scrollTo(0, targetY), y);
			await delay(2000);

			// Interact with buttons or players in view
			if (i === 1 || i === 2) {
				const playButtons = await page.$$('button, .play-button, [role="button"]');
				if (playButtons.length > 0) {
					console.log(`Interacting with interactive element on step ${i}...`);
					try {
						await playButtons[0].click();
						await delay(1500); // let sound trigger
					} catch (err) {
						console.log("Could not click button:", err.message);
					}
				}
			}

			await page.screenshot({ path: path.join(outputDir, `${vp.name}_scroll_step_${i}.png`) });
			console.log(`Saved ${vp.name}_scroll_step_${i}.png`);
		}

		await context.close();
	}

	await browser.close();

	const report = {
		timestamp: new Date().toISOString(),
		consoleLogs,
		pageErrors
	};
	fs.writeFileSync(path.join(outputDir, 'test_report.json'), JSON.stringify(report, null, 2));
	console.log("UX/UI testing finished successfully! Reports saved to tests-output/");
}

runTest().catch((err) => {
	console.error("Test execution failed:", err);
	process.exit(1);
});
