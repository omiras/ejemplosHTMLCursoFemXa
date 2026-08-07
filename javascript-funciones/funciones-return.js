/**
 * Función que suma 2 números
 */

function sumar(a, b) {
    return a + b;
}

console.log(sumar(3, 5)); // 8
console.log(sumar(-1, 1)); // 0
console.log(sumar(5, 5)); // 10

// Crera una función que me calcula el IVA máximo acutal en ESPAÑA
function calcularIVA(precio) {
    return precio * 1.21; // 21%
}

console.log("Iva de un producto de 10 euros: ", calcularIVA(10));
console.log("IVA de un producto de 50€", calcularIVA(50));
