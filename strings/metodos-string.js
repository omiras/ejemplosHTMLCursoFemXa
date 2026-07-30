/**
 * Métodos para manipular strings
 */

const animal = "gato";

// Convertir en mayúsculas, usamos el método .toUpperCase()

console.log(animal.toUpperCase());

// Muchas veces necesitamos quedarnos con un trocito de un string 
// El método .substring nos permite quedarnos con un trocito de la cadena de texto

console.log(animal.substring(0, 2));

// Quiero poner solamente la T mayúscula : gaTo
const resultado = animal.substring(0, 2) + animal.toUpperCase().substring(2,3) + animal.substring(3, 4);
console.log(resultado);