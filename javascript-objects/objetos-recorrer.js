const productosAmazon = [
    {
        nombre: "Echo Dot 5",
        categoria: "Tecnología",
        precio: 34.99,
        stock: 25, // cuanto queda en stock
        valoracion: 4.6 // estrellitas
    },
    {
        nombre: "Kindle Paperwhite",
        categoria: "Libros electrónicos",
        precio: 169.99,
        stock: 12,
        valoracion: 4.7
    },
    {
        nombre: "Logitech MX Master 3S",
        categoria: "Informática",
        precio: 89.99,
        stock: 18,
        valoracion: 4.8
    },
    {
        nombre: "Apple AirPods Pro",
        categoria: "Audio",
        precio: 249.00,
        stock: 8,
        valoracion: 4.5
    },
    {
        nombre: "Samsung T7 SSD 1TB",
        categoria: "Informática",
        precio: 79.99,
        stock: 30,
        valoracion: 4.7
    },
    {
        nombre: "LEGO Star Wars Millennium Falcon",
        categoria: "Juguetes",
        precio: 159.99,
        stock: 5,
        valoracion: 4.9
    },
    {
        nombre: "Philips Hue Bombilla Inteligente",
        categoria: "Hogar",
        precio: 29.99,
        stock: 42,
        valoracion: 4.4
    },
    {
        nombre: "Sony WH-1000XM5",
        categoria: "Audio",
        precio: 329.00,
        stock: 7,
        valoracion: 4.8
    },
    {
        nombre: "Xiaomi Smart Band 9",
        categoria: "Wearables",
        precio: 39.99,
        stock: 20,
        valoracion: 4.3
    },
    {
        nombre: "Razer BlackWidow V4",
        categoria: "Informática",
        precio: 129.99,
        stock: 10,
        valoracion: 4.6
    }
];

// ¿Cuantos productos tiene este array?
console.log("Número de productos: ", productosAmazon.length);

// ¿Cuál es el primer producto de este array?
console.log("Primer producto de esta lista de amazón: ", productosAmazon[0]);

// Quiero recorrer este array y ver el nombre de cada uno de estos productos
for (let i=0; i<productosAmazon.length; i++) {
    console.log(productosAmazon[i].nombre);
}

// Contar el stock total de productos de esta lista
let stockTotal = 0;

for (let i=0; i<productosAmazon.length; i++) {
    // Para cada producto, tengo que sumar el stock a la variable stockTotal
    stockTotal = stockTotal + productosAmazon[i].stock;
}

console.log("El stock total de esta lista de productos es: ", stockTotal);