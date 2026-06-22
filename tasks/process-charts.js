/**
 * process-charts.js
 *
 * Lê os 417 CSVs semanais do Spotify Charts Brasil (data-raw/charts/)
 * e produz dois arquivos em src/data/:
 *
 *   1. envolvimento_chart.csv
 *      Trajetória semana a semana de "Envolvimento" (MC Loma e As Gêmeas Lacração)
 *      no Top 200 do Spotify Brasil.
 *
 *   2. brega_funk_presence.csv
 *      Número de faixas únicas de artistas brega funk no Top 200 por ano.
 *
 * Uso: node tasks/process-charts.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHARTS_DIR = path.join(ROOT, "data-raw", "charts");
const OUT_DIR = path.join(ROOT, "src", "data");

// ---------------------------------------------------------------------------
// Lista de artistas brega funk para a visualização de presença anual.
// Busca parcial (includes), então "MC Loma" captura "MC Loma e As Gêmeas Lacração".
// ---------------------------------------------------------------------------
const BREGA_FUNK_ARTISTS = [
  // Pioneiros e criadores da cena recifense
  "MC Loma",
  "Gêmeas Lacração",
  "Dadá Boladão",
  "Felipe Original",
  "JS o Mão de Ouro",
  "MC Troinha",
  "MC Sheldon",
  "MC Cego",
  "MC Tocha",
  "Anderson Neiff",
  "Os Neiff",

  // Passinho / segunda onda
  "Eo Chapa",
  "MC Rogê",
  "Romero Júnior",

  // Hits nacionais 2019-2022
  "Thiaguinho MT",
  "Tati Zaqui",
  "OIK",
  "MC Livinho",      // colaborações frequentes com brega funk
  "Pedro Sampaio",   // produtor/DJ que fundiu funk carioca com brega funk
  "Matuê",           // verificar — pode não ser brega funk
  "Dj Batutinha",
  "Trindade",
  "Menor MC",
  "Maneirinho",
  "João Gomes",      // não é brega funk mas arrocha/regional — remover se contaminar
  "Nadson Ferinha",  // verificar
  "MC Kekel",        // funk carioca com elementos brega — verificar presença nos charts

  // Artistas que fizeram colaborações com artistas brega funk e podem aparecer em faixas mistas
  // (não incluir artistas que apenas colaboraram uma vez com alguém do gênero)
];

// URI exato do "Envolvimento" para garantir que não capturamos outra faixa
const ENVOLVIMENTO_URI = "spotify:track:1Wolb8MRcXR2IMMaELTRpE";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Parser CSV minimalista — lida com campos entre aspas duplas e vírgulas internas.
 * Suficiente para o formato dos arquivos do Spotify Charts.
 */
function parseCSV(content) {
  const lines = content.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);

  return lines.slice(1).map((line) => {
    const values = parseCSVLine(line);
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""]));
  });
}

function parseCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/** Extrai a data do nome do arquivo: "regional-br-weekly-2018-02-08.csv" → "2018-02-08" */
function dateFromFilename(filename) {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})\.csv$/);
  return match ? match[1] : null;
}

/** Extrai o ano de uma string de data "YYYY-MM-DD" */
function yearFromDate(dateStr) {
  return dateStr ? parseInt(dateStr.slice(0, 4), 10) : null;
}

/** Verifica se algum dos artistas brega funk está em artist_names */
function isBregaFunk(artistNames) {
  const normalized = artistNames.toLowerCase();
  return BREGA_FUNK_ARTISTS.some((a) => normalized.includes(a.toLowerCase()));
}

// ---------------------------------------------------------------------------
// Leitura dos arquivos
// ---------------------------------------------------------------------------

console.log("Lendo arquivos de charts...");

const files = fs
  .readdirSync(CHARTS_DIR)
  .filter((f) => f.endsWith(".csv"))
  .sort(); // ordem cronológica

console.log(`  ${files.length} arquivos encontrados.`);

// Estruturas que vamos preencher
const envolvimentoRows = []; // { week, rank, streams, weeks_on_chart }
const bregaByYear = {}; // { [year]: Set<uri> } — faixas únicas por ano

for (const filename of files) {
  const date = dateFromFilename(filename);
  if (!date) continue;

  const year = yearFromDate(date);
  const filepath = path.join(CHARTS_DIR, filename);
  const content = fs.readFileSync(filepath, "utf-8");
  const rows = parseCSV(content);

  if (!bregaByYear[year]) bregaByYear[year] = new Set();

  for (const row of rows) {
    const uri = row.uri;
    const artistNames = row.artist_names ?? "";
    const trackName = row.track_name ?? "";

    // --- Envolvimento ---
    if (uri === ENVOLVIMENTO_URI) {
      envolvimentoRows.push({
        week: date,
        rank: parseInt(row.rank, 10),
        streams: parseInt((row.streams ?? "0").replace(/"/g, ""), 10),
        weeks_on_chart: parseInt(row.weeks_on_chart, 10),
        peak_rank: parseInt(row.peak_rank, 10),
        track_name: trackName,
      });
    }

    // --- Brega funk geral ---
    if (isBregaFunk(artistNames)) {
      bregaByYear[year].add(uri);
    }
  }
}

// ---------------------------------------------------------------------------
// Saída 1: envolvimento_chart.csv
// ---------------------------------------------------------------------------

const envolvimentoCsvLines = [
  "week,rank,streams,weeks_on_chart,peak_rank",
  ...envolvimentoRows.map(
    (r) => `${r.week},${r.rank},${r.streams},${r.weeks_on_chart},${r.peak_rank}`
  ),
];

const envolvimentoPath = path.join(OUT_DIR, "envolvimento_chart.csv");
fs.writeFileSync(envolvimentoPath, envolvimentoCsvLines.join("\n"), "utf-8");
console.log(`\nenvolvimento_chart.csv`);
console.log(`  ${envolvimentoRows.length} semanas registradas`);
if (envolvimentoRows.length > 0) {
  const estreia = envolvimentoRows[0];
  const pico = envolvimentoRows.reduce(
    (best, r) => (r.rank < best.rank ? r : best),
    envolvimentoRows[0]
  );
  const saida = envolvimentoRows[envolvimentoRows.length - 1];
  console.log(
    `  Estreia: semana ${estreia.week} na posição #${estreia.rank} (${estreia.streams.toLocaleString("pt-BR")} streams)`
  );
  console.log(
    `  Pico: semana ${pico.week} na posição #${pico.rank} (${pico.streams.toLocaleString("pt-BR")} streams)`
  );
  console.log(
    `  Última semana no chart: ${saida.week} na posição #${saida.rank}`
  );
}

// ---------------------------------------------------------------------------
// Saída 2: brega_funk_presence.csv
// ---------------------------------------------------------------------------

const years = Object.keys(bregaByYear).sort();
const presenceCsvLines = [
  "year,unique_tracks",
  ...years.map((y) => `${y},${bregaByYear[y].size}`),
];

const presencePath = path.join(OUT_DIR, "brega_funk_presence.csv");
fs.writeFileSync(presencePath, presenceCsvLines.join("\n"), "utf-8");
console.log(`\nbrega_funk_presence.csv`);
console.log(`  Dados de ${years[0]} a ${years[years.length - 1]}`);
for (const year of years) {
  const count = bregaByYear[year].size;
  const bar = "█".repeat(Math.ceil(count / 2));
  console.log(`  ${year}: ${count.toString().padStart(3)} faixas  ${bar}`);
}

console.log("\nConcluído. Arquivos gravados em src/data/");
