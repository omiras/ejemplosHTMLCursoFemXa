// for (let i = 0; i < 5; i = i + 1) {
//     console.log("Hola!");
// }

// Variable de iteración
let i = 0;

// Condición. Mientras se cumpla esta condición, voy a ejecutar lo que haya dentro del bucle 
while (i < 5) {
    console.log("Hola!");
    i++; // i = i + 1
}

console.log("He terminado el bucle WHILE");

// Para salir de la casa en parchis, tienes que sacar un 5. El jugador no puede empezar, hasta que no saca un 5

let dado = 0;

console.log("---EMPIEZA EL JUEGO----");
while (dado != 5) {
    console.log("Sigues en la casilla de salida.");
    console.log("Tira el dado de nuevo");

    dado = Math.floor(Math.random() * 6) + 1; // 1, 2, 3, 4, 5, 6
    console.log("Has sacado un: ", dado);
}

console.log("Ya has salido de la casilla de salida.");