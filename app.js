console.clear();
// import { readFileSync } from "fs";
// let jsonData = readFileSync("./tareas.json", "utf-8");
// let datosConvertidos = JSON.parse(jsonData).data;

import { leerJSON } from "./funcionesDeTareas.js";
import { escribirJSON } from "./funcionesDeTareas.js";
import { leerPorEstado } from "./funcionesDeTareas.js";

console.clear();
switch (process.argv[2]) {
    case undefined:
        console.log("Atención -  Tienes que pasar una acción.");
        break;
    case "listar":
        let aux = leerJSON();
        aux.forEach((element) => console.log(element));
        break;
    case "crear":
        let tareaNueva = { titulo: `${process.argv[3]}`, estado: "pendiente" };
        escribirJSON(tareaNueva);
        break;
    case "filtrar":
        let estadoAFiltrar = process.argv[3];
        leerPorEstado(estadoAFiltrar);
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break;
}

// if (process.argv.length === 2) {
//     console.log("Atención -  Tienes que pasar una acción.");
// } else if (process.argv[2] === "listar") {
//     console.log(datosConvertidos);
// } else {
//     console.log("No entiendo qué quieres hacer.");
// }
