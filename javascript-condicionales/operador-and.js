/**
 * Imagina que para que te den una hipoteca tienes que ser mayor de 18 años, y tener más de 2000 euros de ingresos menusales
*/
let edad = 54;
/**
 * DOS FORMAS
 */
let ingresosMensuales = 1000;

/**
 * IFs anidados (la que menos me gusta)
 */
if (edad >= 18) {
    if (ingresosMensuales >= 2000) {
        console.log('Hipoteca concedida.');
    } else {
        console.log('Hipoteca rechazada.')
    }
} else {
    console.log('Hipoteca rechazada');
}

/** El operador AND && , permite comprobar varias condiciones a la vez */
if (edad>=18 && ingresosMensuales>=2000) {
    console.log("Hipoteca conceidda.");
} else {
    console.log("Hipoteca rechazada.")
}
