/**
 * Estan en tu juventud, sobre del 18, y quieres ir a la discoteca por primera vez. El portero solo te va a dejar pasar si tienes 18 o más años
 */

let nombre = "Andrés";
let edad = 18;

/**
 * Necesitamos comparar dos números. Para ello, utilizamos el operador de comparación >= . Significa-> si el valor de la izquierda es mayor o igual que el valor de la derecha, se cumple la condición
 */
if (edad >= 18) {
    console.log("El portero se echa a un lado y deja pasar a : ", nombre);
} else {
    console.log("Lo siento chaval/a. Tendrás que esperar un poco para poder entrar");
}