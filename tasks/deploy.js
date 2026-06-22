import fs from "fs";
import { execSync } from "child_process";

try {
	console.log("Iniciando o build do projeto...");
	execSync("npm run build", { stdio: "inherit" });

	console.log("Limpando a pasta docs antiga...");
	fs.rmSync("docs", { recursive: true, force: true });

	console.log("Copiando arquivos da pasta build para docs...");
	fs.cpSync("build", "docs", { recursive: true });

	console.log("Criando arquivo .nojekyll...");
	fs.writeFileSync("docs/.nojekyll", "");

	console.log("Adicionando arquivos ao Git...");
	execSync("git add docs", { stdio: "inherit" });

	console.log("Criando commit de deploy...");
	execSync('git commit -m "update github pages"', { stdio: "inherit" });

	console.log("Enviando atualizações para o GitHub...");
	execSync("git push", { stdio: "inherit" });

	console.log("Deploy finalizado com sucesso!");
} catch (error) {
	console.error("Ocorreu um erro durante o deploy:", error.message);
	process.exit(1);
}
