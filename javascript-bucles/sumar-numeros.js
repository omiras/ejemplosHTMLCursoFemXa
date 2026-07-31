/**
 * En programación muchas veces te interesa ejecutar un bucle un número determinado de veces y acumular un valor
 */

// Suma los 10 primeros números naturales usando un bucle
// 1 + 2 + 3 + 4 + 5 .... + 10 = 55

// 1. Una variable donde acumular este resultado
// 2. Tener claro cuantas veces ejecutar el bucle

// Inicializar esta variable con un valor 'neutro'
let suma = 0;

// Tendré que ejecutar el bucle 10 veces
for (let i = 1; i<=10; i++) {
    suma = suma + i; // suma += i;
}

console.log(suma);

