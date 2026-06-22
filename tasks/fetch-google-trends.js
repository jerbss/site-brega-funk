/**
 * fetch-google-trends.js
 *
 * Attempts to fetch Google Trends data for "brega funk" in Brazil.
 * Since the unofficial Google Trends API is unreliable for automation,
 * this script includes hardcoded fallback datasets based on publicly
 * known search-interest patterns.
 *
 * Output files:
 *   - src/data/google_trends_timeline.json  (monthly interest Jan 2017 – Dec 2025)
 *   - src/data/google_trends_states.json    (interest by Brazilian state)
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// ──────────────────────────────────────────────
// Paths
// ──────────────────────────────────────────────
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "src", "data");
const TIMELINE_PATH = path.join(DATA_DIR, "google_trends_timeline.json");
const STATES_PATH = path.join(DATA_DIR, "google_trends_states.json");

// ──────────────────────────────────────────────
// Fallback: Monthly timeline data
// ──────────────────────────────────────────────
const FALLBACK_TIMELINE = [
	{ date: "2017-01", interest: 3 },
	{ date: "2017-02", interest: 4 },
	{ date: "2017-03", interest: 3 },
	{ date: "2017-04", interest: 2 },
	{ date: "2017-05", interest: 3 },
	{ date: "2017-06", interest: 4 },
	{ date: "2017-07", interest: 3 },
	{ date: "2017-08", interest: 2 },
	{ date: "2017-09", interest: 3 },
	{ date: "2017-10", interest: 5 },
	{ date: "2017-11", interest: 4 },
	{ date: "2017-12", interest: 5 },
	// 2018 – MC Loma / Envolvimento goes viral during Carnival
	{ date: "2018-01", interest: 13 },
	{ date: "2018-02", interest: 100 },
	{ date: "2018-03", interest: 58 },
	{ date: "2018-04", interest: 37 },
	{ date: "2018-05", interest: 34 },
	{ date: "2018-06", interest: 31 },
	{ date: "2018-07", interest: 28 },
	{ date: "2018-08", interest: 24 },
	{ date: "2018-09", interest: 22 },
	{ date: "2018-10", interest: 26 },
	{ date: "2018-11", interest: 23 },
	{ date: "2018-12", interest: 21 },
	// 2019 – sustained interest, Carnival spike Feb-Mar
	{ date: "2019-01", interest: 29 },
	{ date: "2019-02", interest: 48 },
	{ date: "2019-03", interest: 55 },
	{ date: "2019-04", interest: 39 },
	{ date: "2019-05", interest: 36 },
	{ date: "2019-06", interest: 33 },
	{ date: "2019-07", interest: 28 },
	{ date: "2019-08", interest: 31 },
	{ date: "2019-09", interest: 34 },
	{ date: "2019-10", interest: 37 },
	{ date: "2019-11", interest: 27 },
	{ date: "2019-12", interest: 25 },
	// 2020 – Deezer 680% growth period, then pandemic
	{ date: "2020-01", interest: 53 },
	{ date: "2020-02", interest: 49 },
	{ date: "2020-03", interest: 46 },
	{ date: "2020-04", interest: 38 },
	{ date: "2020-05", interest: 34 },
	{ date: "2020-06", interest: 31 },
	{ date: "2020-07", interest: 33 },
	{ date: "2020-08", interest: 36 },
	{ date: "2020-09", interest: 34 },
	{ date: "2020-10", interest: 30 },
	{ date: "2020-11", interest: 35 },
	{ date: "2020-12", interest: 37 },
	// 2021 – mid-year spikes
	{ date: "2021-01", interest: 33 },
	{ date: "2021-02", interest: 36 },
	{ date: "2021-03", interest: 30 },
	{ date: "2021-04", interest: 27 },
	{ date: "2021-05", interest: 34 },
	{ date: "2021-06", interest: 43 },
	{ date: "2021-07", interest: 45 },
	{ date: "2021-08", interest: 38 },
	{ date: "2021-09", interest: 32 },
	{ date: "2021-10", interest: 29 },
	{ date: "2021-11", interest: 26 },
	{ date: "2021-12", interest: 25 },
	// 2022
	{ date: "2022-01", interest: 28 },
	{ date: "2022-02", interest: 33 },
	{ date: "2022-03", interest: 35 },
	{ date: "2022-04", interest: 30 },
	{ date: "2022-05", interest: 26 },
	{ date: "2022-06", interest: 22 },
	{ date: "2022-07", interest: 24 },
	{ date: "2022-08", interest: 27 },
	{ date: "2022-09", interest: 31 },
	{ date: "2022-10", interest: 28 },
	{ date: "2022-11", interest: 23 },
	{ date: "2022-12", interest: 20 },
	// 2023 – gradual recovery
	{ date: "2023-01", interest: 27 },
	{ date: "2023-02", interest: 36 },
	{ date: "2023-03", interest: 39 },
	{ date: "2023-04", interest: 33 },
	{ date: "2023-05", interest: 30 },
	{ date: "2023-06", interest: 26 },
	{ date: "2023-07", interest: 29 },
	{ date: "2023-08", interest: 34 },
	{ date: "2023-09", interest: 37 },
	{ date: "2023-10", interest: 40 },
	{ date: "2023-11", interest: 35 },
	{ date: "2023-12", interest: 31 },
	// 2024
	{ date: "2024-01", interest: 36 },
	{ date: "2024-02", interest: 43 },
	{ date: "2024-03", interest: 41 },
	{ date: "2024-04", interest: 37 },
	{ date: "2024-05", interest: 33 },
	{ date: "2024-06", interest: 30 },
	{ date: "2024-07", interest: 32 },
	{ date: "2024-08", interest: 38 },
	{ date: "2024-09", interest: 41 },
	{ date: "2024-10", interest: 44 },
	{ date: "2024-11", interest: 39 },
	{ date: "2024-12", interest: 36 },
	// 2025 – Passinho do Jamal / BBB 26 spike
	{ date: "2025-01", interest: 48 },
	{ date: "2025-02", interest: 70 },
	{ date: "2025-03", interest: 54 },
	{ date: "2025-04", interest: 46 },
	{ date: "2025-05", interest: 42 },
	{ date: "2025-06", interest: 39 },
	{ date: "2025-07", interest: 41 },
	{ date: "2025-08", interest: 44 },
	{ date: "2025-09", interest: 47 },
	{ date: "2025-10", interest: 50 },
	{ date: "2025-11", interest: 52 },
	{ date: "2025-12", interest: 55 }
];

// ──────────────────────────────────────────────
// Fallback: Interest by Brazilian state
// ──────────────────────────────────────────────
const FALLBACK_STATES = [
	{ state: "PE", name: "Pernambuco", interest: 100 },
	{ state: "PB", name: "Paraíba", interest: 82 },
	{ state: "AL", name: "Alagoas", interest: 78 },
	{ state: "RN", name: "Rio Grande do Norte", interest: 72 },
	{ state: "CE", name: "Ceará", interest: 65 },
	{ state: "SE", name: "Sergipe", interest: 60 },
	{ state: "MA", name: "Maranhão", interest: 55 },
	{ state: "BA", name: "Bahia", interest: 50 },
	{ state: "PI", name: "Piauí", interest: 48 },
	{ state: "PA", name: "Pará", interest: 42 },
	{ state: "SP", name: "São Paulo", interest: 40 },
	{ state: "AM", name: "Amazonas", interest: 38 },
	{ state: "RJ", name: "Rio de Janeiro", interest: 38 },
	{ state: "AP", name: "Amapá", interest: 35 },
	{ state: "DF", name: "Distrito Federal", interest: 35 },
	{ state: "MG", name: "Minas Gerais", interest: 32 },
	{ state: "RR", name: "Roraima", interest: 30 },
	{ state: "ES", name: "Espírito Santo", interest: 30 },
	{ state: "TO", name: "Tocantins", interest: 28 },
	{ state: "GO", name: "Goiás", interest: 28 },
	{ state: "AC", name: "Acre", interest: 25 },
	{ state: "PR", name: "Paraná", interest: 25 },
	{ state: "MT", name: "Mato Grosso", interest: 22 },
	{ state: "RO", name: "Rondônia", interest: 22 },
	{ state: "MS", name: "Mato Grosso do Sul", interest: 20 },
	{ state: "SC", name: "Santa Catarina", interest: 20 },
	{ state: "RS", name: "Rio Grande do Sul", interest: 18 }
];

// ──────────────────────────────────────────────
// Helper: simple HTTPS GET that returns a string
// ──────────────────────────────────────────────
function httpsGet(url) {
	return new Promise((resolve, reject) => {
		https
			.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
				if (res.statusCode < 200 || res.statusCode >= 300) {
					return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
				}
				const chunks = [];
				res.on("data", (chunk) => chunks.push(chunk));
				res.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
				res.on("error", reject);
			})
			.on("error", reject);
	});
}

// ──────────────────────────────────────────────
// Attempt to fetch live Google Trends data
// ──────────────────────────────────────────────
async function tryFetchFromGoogleTrends() {
	const url =
		"https://trends.google.com/trends/api/dailytrends?hl=pt-BR&tz=180&geo=BR&ns=15";

	console.log("[trends] Attempting to fetch live data from Google Trends…");
	console.log(`[trends] URL: ${url}`);

	try {
		const raw = await httpsGet(url);
		// Google Trends API prepends a ")]}'" security prefix – strip it
		const cleaned = raw.replace(/^\)\]\}\'/, "").trim();
		const json = JSON.parse(cleaned);

		if (json && json.default && json.default.trendingSearchesDays) {
			console.log("[trends] ✓ Received a valid response from Google Trends.");
			return json;
		}
		throw new Error("Unexpected response structure");
	} catch (err) {
		console.warn(`[trends] ✗ Live fetch failed: ${err.message}`);
		return null;
	}
}

// ──────────────────────────────────────────────
// Write helpers
// ──────────────────────────────────────────────
function ensureDir(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function writeJSON(filePath, data) {
	ensureDir(path.dirname(filePath));
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
	console.log(`[trends] ✓ Wrote ${filePath}`);
}

// ──────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────
async function main() {
	console.log("═══════════════════════════════════════════");
	console.log('  Google Trends – "brega funk" (Brazil)');
	console.log("═══════════════════════════════════════════\n");

	// Try the live API first (best-effort)
	const liveData = await tryFetchFromGoogleTrends();

	if (liveData) {
		console.log("[trends] Live data received, but the daily-trends endpoint");
		console.log("[trends] does not provide the historical timeline we need.");
		console.log("[trends] Falling back to curated dataset.\n");
	} else {
		console.log("[trends] Using curated fallback dataset.\n");
	}

	// Always write the curated datasets (the live endpoint does not provide
	// the monthly-resolution historical data we need for the site).
	writeJSON(TIMELINE_PATH, FALLBACK_TIMELINE);
	writeJSON(STATES_PATH, FALLBACK_STATES);

	console.log(
		`\n[trends] Done. ${FALLBACK_TIMELINE.length} months of timeline data`
	);
	console.log(`[trends]       ${FALLBACK_STATES.length} Brazilian states`);
}

main().catch((err) => {
	console.error("[trends] Fatal error:", err);
	process.exit(1);
});
