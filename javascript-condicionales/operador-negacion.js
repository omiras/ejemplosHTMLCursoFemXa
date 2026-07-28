/**
 * Ejemplos del operador de negación. 
 * 
 * Podemos almacenar en una variable un valor boleano (true o false)
 */

/** 
 * Seguridad social . tiene un regitro de quien esta jubilado para sabe si tiene pagar pensión o no
 */

let estaJubilado = false;

if (estaJubilado) {
    console.log('A final de mes tendrás pensión');
}

/**
 * Solamente me dan el crédito si no estoy en la lista de morosos de ASNEF
 */

let estoyListaMoroso = true;

// El operador ! es un operador de negación . CAMBIA el valor boleano que tiene a su derecha
// Si NO estoy en la lista de morosos, entonces me conceden el crédito

if (!estoyListaMoroso) {
    console.log('Credito concedido.');
}

/** 
 * SI NO eres mayor de edad, NO entras a la disco
 */

let edad = 17;

// Si NO es verdad que tu edad es mayor o igual a 18...
if (!(edad>=18)) {
    console.log("NO puedes entrar en la discoteca")
} else {
    console.log("Puedes entrar en la discoteca.");
}