import { readFileSync } from "fs";

import { writeFileSync } from "fs";

export function leerJSON() {
    let jsonData = readFileSync("./tareas.json", "utf-8");
    let datosConvertidos = JSON.parse(jsonData);
    return datosConvertidos;
}

export function escribirJSON(tarea) {
    let aux = leerJSON();
    aux.push(tarea);

    let newJSON = JSON.stringify(aux);
    writeFileSync("./tareas.json", newJSON);
}

export function leerPorEstado(estadoAFiltrar) {
    let aux = leerJSON();
    let tareasFiltradas = aux.filter(function (a) {
        return a.estado === estadoAFiltrar;
    });
    console.log(tareasFiltradas);
}
