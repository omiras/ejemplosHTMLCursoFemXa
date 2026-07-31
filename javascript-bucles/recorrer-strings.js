/**
 * Los strings son un tipo de dato iterable
 */
let driver = "Pepe"; // Recorrer del índice 0 al índice 3

// Recorrer el string
// La i va a ir de 0...3 

// Crear un string a partir de otro string
let resultado = "";

for (let i=0; i<driver.length ; i++) {
    resultado = resultado + driver[i];
}

// mostramos el resultado
console.log(resultado);