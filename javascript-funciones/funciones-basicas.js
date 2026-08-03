/**
 * ¿Cómo hacemos hasta ahora si queremos repetir un código?
 */

function saludar() {
    console.log("Hello!");
    console.log("How are you?");
}

// Saludar a una persona 3 veces
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();

/**
 * Función para saludar a una persoan específica
 * 
 * Esta función se dice que tiene 1 parámetro 
 * Su parámetro es una VARIABLE (let nombre)
 * La variable permite pasarle un VALOR
 * La función se comporta diferente en función de su VALOR
 */

function saludarPersona(nombre) {
    console.log("Hola " + nombre); // "Hola" concatenado CON EL VALOR de la variable 'nombre'
}

saludarPersona("Ana"); // Llamar a la función 'saludarPersona' con el valor 'Ana'
saludarPersona("Carlos"); // Invocamos a la función 'saludarPersona' con el valor 'Carlos'

let miNombre = "Mireia";
miNombre = "Michael";

saludarPersona(miNombre);
saludarPersona("Michael");
