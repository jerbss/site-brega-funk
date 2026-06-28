import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

async function runA11yTest() {
	console.log("Starting Accessibility (a11y) audit...");
	const url = process.argv[2] || 'http://localhost:8888';

	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext();
	const page = await context.newPage();

	console.log(`Navigating to ${url} for audit...`);
	try {
		await page.goto(url, { waitUntil: 'load', timeout: 20000 });
	} catch (e) {
		console.error(`Failed to navigate to ${url}:`, e.message);
		await browser.close();
		process.exit(1);
	}

	// Analyze accessibility violations (WCAG 2.0/2.1 standards)
	const results = await new AxeBuilder({ page })
		.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
		.analyze();

	const outputDir = path.resolve('tests-output');
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}

	fs.writeFileSync(
		path.join(outputDir, 'a11y_report.json'),
		JSON.stringify(results.violations, null, 2)
	);

	console.log(`A11y audit finished! Found ${results.violations.length} types of violations.`);
	await browser.close();
}

runA11yTest().catch((err) => {
	console.error("Accessibility audit failed:", err);
	process.exit(1);
});
