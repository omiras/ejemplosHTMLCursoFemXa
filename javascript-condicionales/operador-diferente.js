/**
 * La palabra del dia
 */

let palabraCorrecta = "AMADA";
let ultimaPalabraProbada = "AMIGA";

/**
 * Si la palabra que ha puesto el usuario ES DIFERENTE a la palabra correcta, entonces es que aún tiene que seguir probando
 */

// Utilizamos el operador de desigualdad. Va a comprar si dos valores son diferentes. Es decir, se evaluará como true , si los dos valores son diferentes

if (palabraCorrecta != ultimaPalabraProbada) {
    console.log('Sigue buscando la palabra correcta, esa no es.');
} else {
    console.log('La palabra es correcta.');
}