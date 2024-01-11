import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: show } = yarg;
let outputMessage = "";
const headerMessage = `
================================
Tabla del ${base}
================================\n
`;

for (let i = 0; i <= limit; i++) {
  outputMessage += `${base} * ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
if (show) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created!");
