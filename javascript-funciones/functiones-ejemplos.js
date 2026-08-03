/**
 * Función calcular el area de un rectangulo
 * 
 * Necesitamos su anchura y su altura
 */

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

console.log("El area de un rectangulo de anchura 10 y altura 20 es: ", calcularAreaRectangulo(10, 20));
console.log("El area de un rectangulo de anchura 1 y altura 2 es: ", calcularAreaRectangulo(1, 2));


/**
 * Función para calcular el mínimo entre dos números
 */

function numeroMinimo(num1, num2) {
    /**
     * Tenemos que comprobar cual es el mínimo de los dos parámetros, y devolver dicho valor
    */
    let resultado;
    if (num1 < num2) {
        resultado = num1;
    } else {
        resultado = num2;
    }

    return resultado;
}


console.log("Dame el mínimo entre el número 3 y 6", numeroMinimo(3, 6)); // 3
console.log("Dame el mínimo entre el número 5 y -1", numeroMinimo(5, -1)); // -1