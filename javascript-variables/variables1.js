/**
 * Imaginaos que queremos almacenar información sobre un viaje en Renfe que vamos a hacer entre dos ciudades
 * 
 * origen
 * destino
 * hora salida
 * dia
 * primera clase, segunda clase
 * precio
 * 
 */

/* La información de un programa la guardamos en algo llamado 'variable' */
/**
 * let: palabra reservada. Las palabras reservada son palabras que se usan con un próposito específico en programación
 * origen: el nombre de la variable. Podemos poner aquí (casi) cualquier palabra. Le ponemos una palabra que de un idea lo más aproximada posible al tipo de información que contiene la variable
 * '=' : operador de asignación. Asigna el valor que tiene a su derecha a la variable de la izquierda
 * "Barcelona" : valor. En este caso, es el nombre de una ciudad. Los nombres o valores que son palabras, se ponen usando "". "Barcelona" es un tipo de dato 'texto' o más técnicamente en inglés 'string' (cadena de texto)
 * ; -> delimita donde acaba la instrucción JavaScript
 */
let origen = "Barcelona";

/* Crear una nueva variable para almacenar el destino del viaje*/
let destino = "Cádiz";
/* Sobreescribir el valor de una variable. Poner el nombre de variable = nuevo valor */
destino = "Pamplona";

/* ¿Cómo usamos o conocemos el valor de las variables? */
/* Existe una herramienta predefinida para mostrar el valor de una variable */
/* La herramienta se llama console.log() */
// console.log(origen);
// console.log(destino);

/* Una operación que podemos hacer con los strings (cadena de texto) es que podemos unir valores uno tras otro. A esto se le llama concatenar string */
let mensajeConfirmacion = "El billete elegido tiene como origen: " + origen + ", y como destino tiene la ciudad de: " + destino;
console.log(mensajeConfirmacion);

/* Otro de tipo variable que tenemos son los números (number) */
let precioBillete = 100; // primera palabra en minuscula, y la segunda palabra pegada pero empezando en mayúscula
                   // A esta manera de llamar a las variables (convención) se le dice 'camelCase'

/* Quiero consultar el valor de la variable del precio del billete */
console.log("El valor de la variable precioBillete es: ", precioBillete);

/* PrecioBillete es ahora una variable de tipo numérica. Pues ahora puedo realizar operaciones aritmeticas sobr ellas */
/* Ejemplo: Precio final del billete tras aplicar el 10% de IVA */
let precioFinal = precioBillete * 1.1;
console.log("El valor del precio final del billete es: ", precioFinal);

/* En ocasiones a mi me gustaría saber de que tipo es una variable */
/* Usamos la palabra reservada typeof nombreVariable */
console.log(typeof origen); // es una variable de tipo cadena de texto (string)
console.log(typeof precioFinal); // es una variable de tipo numérico (number)