/**
 * El operador || (or) 
 * Las barritas se hacen con la tecla ALT GR + el número 1
 */

/**
 * En el cine solo pueden acceder las personas que son mayores de edad o si es un niño, debe venir acompañado con un adulto
 */

let mayorEdad = false; // es un niño
let vengoConAdulto = true; // le acompaña un adulto

if (mayorEdad || vengoConAdulto) {
    console.log("Puedes acceder al cine");
} else {
    console.log("Vuelve al cine cuando seas mayor de edad o debe acompañarte un adulto");
}