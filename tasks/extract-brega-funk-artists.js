import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHARTS_DIR = path.join(ROOT, "data-raw", "charts");

// Chaves da API
const CLIENT_ID =
	process.env.SPOTIFY_CLIENT_ID || "7063fd2601e5422d8b55d9b0534af358";
const CLIENT_SECRET =
	process.env.SPOTIFY_CLIENT_SECRET || "d548916124734c979b3c3443e30d12ec";

async function getToken() {
	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64")
		},
		body: "grant_type=client_credentials"
	});
	const data = await response.json();
	return data.access_token;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRetry(url, token) {
	let retries = 3;
	while (retries > 0) {
		const res = await fetch(url, {
			headers: { Authorization: `Bearer ${token}` }
		});
		if (res.status === 429) {
			const wait = res.headers.get("Retry-After") || 2;
			console.log(`Rate limited. Waiting ${wait} seconds...`);
			await sleep(wait * 1000);
			retries--;
			continue;
		}
		if (!res.ok) {
			throw new Error(`Spotify API error: ${res.status} ${res.statusText}`);
		}
		return res.json();
	}
	throw new Error("Too many rate limit errors");
}

function parseCSVLine(line) {
	const result = [];
	let current = "";
	let inQuotes = false;
	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (char === '"') inQuotes = !inQuotes;
		else if (char === "," && !inQuotes) {
			result.push(current.trim());
			current = "";
		} else current += char;
	}
	result.push(current.trim());
	return result;
}

async function main() {
	console.log("1. Obtendo token da API do Spotify...");
	const token = await getToken();
	if (!token) throw new Error("Falha na autenticação do Spotify");

	console.log("2. Lendo todos os arquivos CSV em data-raw/charts...");
	const files = fs
		.readdirSync(CHARTS_DIR)
		.filter((f) => f.endsWith(".csv"))
		.sort();

	const uniqueTrackIds = new Set();
	const yearlyChartData = []; // { year, trackId, artistNames }

	for (const file of files) {
		const yearMatch = file.match(/(\d{4})-\d{2}-\d{2}/);
		if (!yearMatch) continue;
		const year = parseInt(yearMatch[1], 10);

		const content = fs.readFileSync(path.join(CHARTS_DIR, file), "utf-8");
		const lines = content.trim().split(/\r?\n/).slice(1);

		for (const line of lines) {
			const cols = parseCSVLine(line);
			if (cols.length < 5) continue;
			const uri = cols[1].replace(/"/g, ""); // "spotify:track:XXXX"
			if (!uri.startsWith("spotify:track:")) continue;
			const artistNames = cols[2];
			const trackId = uri.replace("spotify:track:", "");

			uniqueTrackIds.add(trackId);
			yearlyChartData.push({ year, trackId, artistNames });
		}
	}

	const trackIdsArr = Array.from(uniqueTrackIds);
	console.log(`\nTotal de faixas únicas nos charts: ${trackIdsArr.length}`);

	// 3. Buscar tracks na API para obter Artist IDs
	const artistIds = new Set();
	const trackToArtists = {};

	console.log(
		"3. Buscando dados das faixas (lotes de 50) para coletar IDs dos artistas..."
	);
	for (let i = 0; i < trackIdsArr.length; i += 50) {
		const chunk = trackIdsArr.slice(i, i + 50);
		const data = await fetchWithRetry(
			`https://api.spotify.com/v1/tracks?ids=${chunk.join(",")}`,
			token
		);
		if (data && data.tracks) {
			data.tracks.forEach((track) => {
				if (!track) return;
				trackToArtists[track.id] = track.artists.map((a) => a.id);
				track.artists.forEach((a) => artistIds.add(a.id));
			});
		}
		// pequeno log para acompanhar progresso visualmente
		if (i % 500 === 0 && i > 0) process.stdout.write(`...${i} `);
	}
	console.log();

	const artistIdsArr = Array.from(artistIds);
	console.log(`\nTotal de artistas únicos encontrados: ${artistIdsArr.length}`);

	// 4. Buscar gêneros
	console.log("4. Buscando gêneros na API de artistas (lotes de 50)...");
	const bregaFunkArtistIds = new Set();
	const bregaFunkArtistNames = {};

	// Palavras-chave que indicam o gênero do artista (segundo o ecosistema Spotify/BR)
	const bregaKeywords = [
		"brega funk",
		"funk pernambucano",
		"batidao romantico"
	];

	for (let i = 0; i < artistIdsArr.length; i += 50) {
		const chunk = artistIdsArr.slice(i, i + 50);
		const data = await fetchWithRetry(
			`https://api.spotify.com/v1/artists?ids=${chunk.join(",")}`,
			token
		);

		if (data && data.artists) {
			data.artists.forEach((artist) => {
				if (!artist) return;
				const genres = artist.genres || [];
				const isBregaFunk = genres.some((g) =>
					bregaKeywords.some((bk) => g.toLowerCase().includes(bk))
				);
				if (isBregaFunk) {
					bregaFunkArtistIds.add(artist.id);
					bregaFunkArtistNames[artist.id] = artist.name;
				}
			});
		}
	}

	console.log(
		`\nEncontrados ${bregaFunkArtistIds.size} artistas com a tag oficial de brega funk!`
	);

	// 5. Consolidar os dados
	console.log("5. Consolidando os dados finais por ano...");
	const statsByYear = {};
	for (let year = 2018; year <= 2025; year++) {
		statsByYear[year] = {
			uniqueTracks: new Set(),
			appearances: 0,
			artistsFreq: {}
		};
	}

	for (const row of yearlyChartData) {
		const tArtists = trackToArtists[row.trackId] || [];
		const hasBregaArtist = tArtists.some((aid) => bregaFunkArtistIds.has(aid));

		if (hasBregaArtist) {
			const yearStats = statsByYear[row.year];
			yearStats.uniqueTracks.add(row.trackId);
			yearStats.appearances++;

			tArtists.forEach((aid) => {
				if (bregaFunkArtistIds.has(aid)) {
					const name = bregaFunkArtistNames[aid];
					yearStats.artistsFreq[name] = (yearStats.artistsFreq[name] || 0) + 1;
				}
			});
		}
	}

	const finalData = [];
	for (let year = 2018; year <= 2025; year++) {
		const stats = statsByYear[year];
		const topArtists = Object.entries(stats.artistsFreq)
			.sort((a, b) => b[1] - a[1])
			.slice(0, 3)
			.map((entry) => entry[0]);

		finalData.push({
			year: year,
			unique_tracks: stats.uniqueTracks.size,
			appearances: stats.appearances,
			top_artists: topArtists.join(", ")
		});
	}

	const outFile = path.join(ROOT, "src", "data", "brega_funk_stats.json");
	fs.writeFileSync(outFile, JSON.stringify(finalData, null, 2), "utf-8");
	console.log(
		`\n✅ Sucesso! Estatísticas ricas salvas em: src/data/brega_funk_stats.json`
	);
}

main().catch(console.error);
