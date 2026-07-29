/**
 * En ocasiones, quieres declarar variables cuyo valor NO DEBERÍA CAMBIAR NUNCA
 * 
 * 1. Evita errores 
 * 2. Visualmente deja claro que una variable no debe cambiar su valor
 * 3. Cuando ejecutar el programa te puedes dar cuenta de que has cometido un error de manera más temprana
 */

const PI = 3.1416;
const radio = 2; 

// Calcular el área de un círculo.  Area = pi x radio^2

const areaCirculo = PI * radio ** 2;
console.log(areaCirculo);