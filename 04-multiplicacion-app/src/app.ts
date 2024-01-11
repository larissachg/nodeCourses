// const message: string = 'Hola Mundo';
// console.log(message);

/* TAREA:
Grabar en el archivo de salida, path: outputs/tabla-5.txt 
*/
/* import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

let outputMessage = "";
const base = 5;
const headerMessage = `
================================
Tabla del ${base}
================================
`;

for (let i = 0; i <= 10; i++) {
    outputMessage += `${base} * ${i} = ${ base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage); */

import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";
/* console.log(process.argv);
console.log(yarg.b); */

// const [tsnode, app, ...args] = process.argv;
// console.log(args);

//FUNCION ANONIMA AUTO-INVOCADA
(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;
  // console.log(yarg);
  ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}
