// Movimientos bancarios. Los números positivos son ingresos, los negativos son retiradas de dinero.
const movimientos = [650000, 20, 1500, -45, -30, -300, -99, 500, -200];
console.log("🚀 ~ Array original:", movimientos);

// Añadir o eliminar elementos
movimientos.push(100);
console.log("🚀 ~ Array tras ingresar 100 euros:", movimientos);
console.log("El segundo elemento de este array: ", movimientos[1]);

// Puedo modificar cualquier posición del array usando sus índices
// Quiero modificar el índice 0 del array de movimientos
movimientos[0] = 7777;
console.log("🚀 ~ Array tras modificar el primer elemento:", movimientos);

// Eliminar el último elemento , podemos usar el método .pop

movimientos.pop();
movimientos.pop();
movimientos.pop();
movimientos.pop();
console.log("🚀 ~ movimientos tras usar el pop:", movimientos);

// Existen muchas otras formas de manipular los arrays. Por ejemplo el método .splice
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("Despuésde usar el método splice: ", fruits);

/** Guarda información de una persona. El penultimo elemento debe ser un boleano indicando si la persona está trabajando en activo. el último elemento será también un array con todos los cursos del CONSORCI que esta persona ha hecho   */
const infoPersona = [42, "Juan", "1982-04-01", "Calle de Patata 7", true, ["Excel Avanzado", "Kahoot! Gamificación en el aula."]];
console.log("Información persona: ", infoPersona);