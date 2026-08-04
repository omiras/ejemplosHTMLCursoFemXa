/**
 * Nos piden implementar un programa que nos permita almacenar las retiradas de dinero e ingresos de tu cuenta bancaria
 */

let saldo = 650000;
let retirada1 = 20;
let ingresos1 = 1500;
let retirada2 = 45;
let retirada3 = 30;

// ¿Cuál es tu saldo?

let saldoFinal = saldo - retirada1 + ingresos1 - retirada2 - retirada3;
console.log("Mi saldo total es: ", saldoFinal);

// 1. ¿Cómo organizo más retiradas e ingresos de efectivo?
// 2. ¿Cómo agrupo esta información?
// 3. ¿Cómo realizo de fórma sencilla búsquedas o filtrados usando variables?

// Podemos utilizar un array  (arreglo) (vector) para agrupar diferentes valores que, generalmente, estan relacionados entre si []->corchetes 
let movimientos = [650000, 20, 1500, -45, -30, -300, -99, 500, -200, 50];

// Mostrar todo el array
console.log("Muestro todo el array: ", movimientos);

// Mostrar el número de elementos del array
console.log("Números de elementos:", movimientos.length);

// Acceder al primer movimiento bancario
console.log("Primer elemento: ", movimientos[0]);

// Acceder a la última posición de mis movimientos bancarios
console.log("Úlitmo elemento: ", movimientos[movimientos.length - 1]);