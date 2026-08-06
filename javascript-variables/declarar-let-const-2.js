// Calcula el peso de una pesona en la tierra
// Peso = masa * gravedad en la tierra

// USO empírico y original de la palabra reservada 'const'. Declaramos una constante universal de la física que nunca debería cambiar

const GRAVEDAD = 9.81;

let masa = 70; // kg

let peso = masa * GRAVEDAD;

console.log("El peso es: " + peso + " N");