/**
 * enrich_charts_duration.js
 *
 * Lê o cache de durações (data-raw/track_durations.json) e adiciona a coluna
 * duration_ms em cada CSV de chart semanal em data-raw/charts/.
 *
 * Sobrescreve os CSVs originais (o Git preserva o histórico).
 *
 * Uso: node tasks/enrich_charts_duration.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHARTS_DIR = path.join(ROOT, "data-raw", "charts");
const CACHE_FILE = path.join(ROOT, "data-raw", "track_durations.json");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Parser CSV minimalista — lida com campos entre aspas duplas e vírgulas internas.
 * Retorna { headers: string[], rows: string[][] }
 */
function parseCSV(content) {
	const lines = content.trim().split(/\r?\n/);
	if (lines.length < 2) return { headers: [], rows: [] };

	const headers = parseCSVLine(lines[0]);
	const rows = lines.slice(1).map((line) => parseCSVLine(line));

	return { headers, rows };
}

function parseCSVLine(line) {
	const result = [];
	let current = "";
	let inQuotes = false;

	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (char === '"') {
			if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
				current += '"';
				i++; // pular a segunda aspas
			} else {
				inQuotes = !inQuotes;
			}
		} else if (char === "," && !inQuotes) {
			result.push(current);
			current = "";
		} else {
			current += char;
		}
	}
	result.push(current);
	return result;
}

/**
 * Formata um valor para CSV: se contém vírgula, aspas ou quebra de linha,
 * envolve em aspas duplas.
 */
function csvEscape(value) {
	if (
		value.includes(",") ||
		value.includes('"') ||
		value.includes("\n") ||
		value.includes("\r")
	) {
		return '"' + value.replace(/"/g, '""') + '"';
	}
	return value;
}

/** Extrai track_id da URI: "spotify:track:ABC123" → "ABC123" */
function trackIdFromUri(uri) {
	if (uri && uri.startsWith("spotify:track:")) {
		return uri.split(":")[2];
	}
	return null;
}

/** Extrai a data do nome do arquivo */
function dateFromFilename(filename) {
	const match = filename.match(/(\d{4}-\d{2}-\d{2})\.csv$/);
	return match ? match[1] : null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("=".repeat(60));
console.log("  ENRICH CHARTS — Adicionando duration_ms aos CSVs");
console.log("=".repeat(60));

// 1. Carregar cache de durações
console.log("\n[1/3] Carregando cache de durações...");

if (!fs.existsSync(CACHE_FILE)) {
	console.error(`  ERRO: Cache não encontrado em ${CACHE_FILE}`);
	console.error(
		"  Execute primeiro: python tasks/fetch_durations.py"
	);
	process.exit(1);
}

const durationsCache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
const cacheSize = Object.keys(durationsCache).length;
const validEntries = Object.values(durationsCache).filter(
	(v) => v !== null && v > 0
).length;
console.log(
	`  ${cacheSize} entries no cache (${validEntries} com duração válida)`
);

// 2. Processar cada CSV
console.log("\n[2/3] Enriquecendo CSVs...");

const files = fs
	.readdirSync(CHARTS_DIR)
	.filter((f) => f.startsWith("regional-br-weekly-") && f.endsWith(".csv"))
	.sort();

console.log(`  ${files.length} arquivos para processar`);

let totalTracks = 0;
let totalEnriched = 0;
let totalMissing = 0;
const statsByYear = {}; // { year: { total, enriched, missing } }

for (const filename of files) {
	const date = dateFromFilename(filename);
	if (!date) continue;
	const year = parseInt(date.slice(0, 4), 10);

	if (!statsByYear[year]) {
		statsByYear[year] = { total: 0, enriched: 0, missing: 0 };
	}

	const filepath = path.join(CHARTS_DIR, filename);
	const content = fs.readFileSync(filepath, "utf-8");
	const { headers, rows } = parseCSV(content);

	if (headers.length === 0) continue;

	// Verificar se já tem duration_ms
	const hasDuration = headers.includes("duration_ms");
	const uriIdx = headers.indexOf("uri");

	if (uriIdx === -1) continue;

	// Adicionar header se necessário
	const newHeaders = hasDuration
		? headers
		: [...headers, "duration_ms"];

	const newRows = rows.map((row) => {
		const uri = row[uriIdx] || "";
		const trackId = trackIdFromUri(uri);
		let durationMs = "";

		if (trackId && durationsCache[trackId] !== undefined) {
			const val = durationsCache[trackId];
			if (val !== null && val > 0) {
				durationMs = String(val);
				totalEnriched++;
				statsByYear[year].enriched++;
			} else {
				totalMissing++;
				statsByYear[year].missing++;
			}
		} else {
			totalMissing++;
			statsByYear[year].missing++;
		}

		totalTracks++;
		statsByYear[year].total++;

		if (hasDuration) {
			// Substituir coluna existente
			const durIdx = headers.indexOf("duration_ms");
			const newRow = [...row];
			newRow[durIdx] = durationMs;
			return newRow;
		} else {
			return [...row, durationMs];
		}
	});

	// Reconstruir CSV
	const csvLines = [
		newHeaders.map(csvEscape).join(","),
		...newRows.map((row) => row.map(csvEscape).join(","))
	];
	fs.writeFileSync(filepath, csvLines.join("\r\n") + "\r\n", "utf-8");
}

// 3. Relatório
console.log("\n[3/3] Relatório de cobertura por ano:");
console.log("-".repeat(50));
console.log(
	"  Ano   | Total  | Com dur. | Sem dur. | Cobertura"
);
console.log("-".repeat(50));

const years = Object.keys(statsByYear).sort();
for (const year of years) {
	const s = statsByYear[year];
	const pct = s.total > 0 ? ((s.enriched / s.total) * 100).toFixed(1) : "0.0";
	const bar = "█".repeat(Math.round(parseFloat(pct) / 5));
	console.log(
		`  ${year}  | ${String(s.total).padStart(5)} | ${String(s.enriched).padStart(7)} | ${String(s.missing).padStart(7)} | ${pct}% ${bar}`
	);
}

console.log("-".repeat(50));

const globalPct =
	totalTracks > 0
		? ((totalEnriched / totalTracks) * 100).toFixed(1)
		: "0.0";
console.log(
	`  TOTAL | ${String(totalTracks).padStart(5)} | ${String(totalEnriched).padStart(7)} | ${String(totalMissing).padStart(7)} | ${globalPct}%`
);

console.log("\n" + "=".repeat(60));
console.log("  Concluído! CSVs atualizados em data-raw/charts/");
console.log("=".repeat(60));
