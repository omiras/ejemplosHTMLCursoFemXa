/**
 * Ejemplo de uso de template strings
 */

let nombre = "Andrés";
let apellidos = "Gonzalez";
let ciudad = "Barcelona";

//let mensaje = "Hola, " + nombre + " " + apellidos;
let mensaje = `Hola, ${nombre} ${apellidos}. Nos vamos de viaje a ${ciudad}`;

console.log(mensaje);