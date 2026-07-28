/**
 * Juego de la palabra del dia
 * 
 * Tenemos dos variables:
 * 1. La palabra correcta
 * 2. La palabra que introduce el usuario
 */
let palabraCorrecta = "AMADA";
let ultimaPalabraProbada = "AMADA"
/**
 * Cómo crear una estructura condicional en JAvaScript. Usamos la estructure if...else . Entre paréntesis, ponemos una comparación.
 * == -> operador lógico que va a comparar dos valores a ver si son iguales o no
 */
if (palabraCorrecta == ultimaPalabraProbada) {
    // Si el valor de la palabraCorre es EXACTAMENTE IGUAL al valor de ultimaPalabraProbada, todo el código que hay entre las llaves {} se va a ejecutar
    console.log("¡Has ganado!");
    console.log("¡Eres una crack!");
} else {
    console.log("No es correcto. Prueba otra palabra");
    console.log("¡No te desanimes!")
}