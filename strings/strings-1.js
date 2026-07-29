/**
 * Los strings se pueden definir con comillas simples o dobles
 */

let nombre = "Maria";
let apellidos = 'Pérez';

let vacaciones = "Mari Carmen y Luís se fueron a la ciudad del amor' de vacaciones";

let nombreCompleto = nombre + apellidos;
// console.log(nombreCompleto);

/**
 * Los strings son un tipo de dato ITERABLE
 */
/**
 * Para acceder a una posición de un string utilizamos el operador []
 */
console.log("Primera posición del valor de la variable nombre: ", nombre[5]);

/**
 * Ejemplo de uso de [] -> dame la primera letra del nombre y apellido , y ponlas en una variable 
 */
let iniciales = nombre[0] + "." + apellidos[0] + "."
console.log("Iniciales de nombre y apellido: ", iniciales);

/**
 * Conocer la longitud de un string, usamos una propiedad de los strings que se llama .length
 */
console.log("Tamaño del string nombre (valor Maria): ", nombre.length);

/**
 * Pero esto para que sirve?
 */
if (nombre.length > 30) {
    console.log("El nombre es demasiado largo");
}

let lenguaje = "JavaScript";

// Acceder a la última posición del string
console.log("Última posición: ", lenguaje[9]); // índice manual
console.log("Última posición: ", lenguaje[lenguaje.length - 1]); // índice usando el tamaño del string
console.log("Última posición: ", lenguaje.slice(-1)); // usando slice y un índice negativo

// Quedarme con un trocito del string
let message = "Don't be sad, be happy!";
let withSubstring = message.substring(0, 3);
console.log(withSubstring); // <== Don
 
let withSlice = message.slice(14);
console.log(withSlice); // <==  be happy!