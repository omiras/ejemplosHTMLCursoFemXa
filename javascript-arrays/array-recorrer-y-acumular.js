// La variable array de la que queremos obtener información
let movimientos = [10, -5 , 1];

// Se define FUERA del bucle. Variable para acumular el saldo
let saldoFinalBucle = 0;

for (let i=0; i<movimientos.length; i++) {
    // Iteramos por cada una de las posiciones del array para ir acumulando en la variable saldoFinalBucle los ingresos y retiradas de mis movimientos bancarios
    saldoFinalBucle = saldoFinalBucle + movimientos[i];
}

console.log("Saldo final del bucle: ", saldoFinalBucle);


/** Contar ovejas */

const animales = ["🐶", "🐑", "🐱"];
let contadorOvejas = 0; 

for (let i = 0; i < animales.length; i++) {
    if (animales[i] == "🐑") {
        contadorOvejas++; // contadorOvejas = contadorOvejas + 1;
    }
}

console.log("Hay " + contadorOvejas + " ovejas");