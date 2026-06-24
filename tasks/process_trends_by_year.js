import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stateMap = {
	"Acre": "AC",
	"Alagoas": "AL",
	"Amapá": "AP",
	"Amazonas": "AM",
	"Bahia": "BA",
	"Ceará": "CE",
	"Distrito Federal": "DF",
	"Espírito Santo": "ES",
	"Goiás": "GO",
	"Maranhão": "MA",
	"Mato Grosso": "MT",
	"Mato Grosso do Sul": "MS",
	"Minas Gerais": "MG",
	"Pará": "PA",
	"Paraíba": "PB",
	"Paraná": "PR",
	"Pernambuco": "PE",
	"Piauí": "PI",
	"Rio de Janeiro": "RJ",
	"Rio Grande do Norte": "RN",
	"Rio Grande do Sul": "RS",
	"Rondônia": "RO",
	"Roraima": "RR",
	"Santa Catarina": "SC",
	"São Paulo": "SP",
	"Sergipe": "SE",
	"Tocantins": "TO"
};

const dataDir = path.join(__dirname, "../src/data");

// 1. Rename files
for (let i = 1; i <= 8; i++) {
	const oldPath = path.join(dataDir, `geoMap (${i}).csv`);
	const year = 2017 + i;
	const newPath = path.join(dataDir, `geoMap_${year}.csv`);

	if (fs.existsSync(oldPath)) {
		console.log(`Renomeando ${oldPath} para ${newPath}`);
		fs.renameSync(oldPath, newPath);
	}
}

// 2. Parse renamed CSV files
const output = {};

for (let year = 2018; year <= 2025; year++) {
	const filePath = path.join(dataDir, `geoMap_${year}.csv`);
	if (!fs.existsSync(filePath)) {
		console.warn(`Arquivo não encontrado para o ano ${year}: ${filePath}`);
		continue;
	}

	const content = fs.readFileSync(filePath, "utf8");
	const lines = content.split(/\r?\n/);
	const yearData = [];

	// Map all states, defaulting interest to 0 if not present in CSV
	const presentStates = {};

	for (const line of lines) {
		if (!line || line.trim() === "") continue;
		if (line.startsWith("Categoria:") || line.startsWith("Região,")) continue;

		const parts = line.split(",");
		if (parts.length >= 2) {
			const stateName = parts[0].trim();
			const valStr = parts[1].trim();
			const interest = valStr === "" ? 0 : parseInt(valStr, 10);
			const stateCode = stateMap[stateName];

			if (stateCode) {
				yearData.push({
					state: stateCode,
					name: stateName,
					interest: isNaN(interest) ? 0 : interest
				});
				presentStates[stateCode] = true;
			}
		}
	}

	// Add missing states with 0 interest
	for (const [name, code] of Object.entries(stateMap)) {
		if (!presentStates[code]) {
			yearData.push({
				state: code,
				name: name,
				interest: 0
			});
		}
	}

	output[year] = yearData;
}

// Write the compiled JSON
const outputPath = path.join(dataDir, "google_trends_by_year.json");
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf8");
console.log(`Dados consolidados gravados em: ${outputPath}`);
