const fs = require("fs");
const svgPathBbox = require("svg-path-bbox");

const pathsData = JSON.parse(
	fs.readFileSync("data-raw/brazil-paths.json", "utf8")
);

let statePathsCode = "const statePaths = {\n";
let stateCentroidsCode = "const stateCentroids = {\n";

for (let i = 0; i < pathsData.length; i++) {
	const item = pathsData[i];
	const stateCode = item.id.toUpperCase();
	const path = item.path;
	statePathsCode += `\t\t${stateCode}: "${path}"${i < pathsData.length - 1 ? "," : ""}\n`;

	const bbox = svgPathBbox(path);
	const cx = (bbox[0] + bbox[2]) / 2;
	const cy = (bbox[1] + bbox[3]) / 2;

	stateCentroidsCode += `\t\t${stateCode}: { x: ${Math.round(cx)}, y: ${Math.round(cy)} }${i < pathsData.length - 1 ? "," : ""}\n`;
}
statePathsCode += "\t};";
stateCentroidsCode += "\t};";

const fileContent = fs.readFileSync(
	"src/components/charts/MapGoogleTrends.svelte",
	"utf8"
);

let newContent = fileContent.replace(
	/const statePaths = \{[\s\S]*?\};\n/,
	statePathsCode + "\n"
);

newContent = newContent.replace(
	/const stateCentroids = \{[\s\S]*?\};\n/,
	stateCentroidsCode + "\n"
);

newContent = newContent.replace(
	/viewBox="0 0 600 560"/g,
	'viewBox="0 0 613 639"'
);
newContent = newContent.replace(
	/height=\{availableWidth \* 0\.93\}/g,
	"height={availableWidth * (639 / 613)}"
);
newContent = newContent.replace(
	/const scaleX = availableWidth \/ 600;/g,
	"const scaleX = availableWidth / 613;"
);
newContent = newContent.replace(
	/const scaleY = \(availableWidth \* 0\.93\) \/ 560;/g,
	"const scaleY = (availableWidth * (639 / 613)) / 639;"
);

fs.writeFileSync("src/components/charts/MapGoogleTrends.svelte", newContent);
console.log("Map updated successfully.");
