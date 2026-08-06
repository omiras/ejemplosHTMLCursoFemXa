/**
 * Representar en un objeto una rerva de Booking (5 o 6 conceptos)
 * 
 * - Fecha entrada
 * - Fecha salida
 * - Ciudad destino
 * - Nombre alojamiento
 * - numero personas (discrimina entre adultos y niños)
 * - numero habitaciones
 * - precio
 * - ¿Vaiajas con mascotas?
 * 
 */

const reserva = {
    ciudad: "Sevilla",
    fechaInicio : "06-08-2026",
    fechaFin: "14-08-2026",
    //fechaReserva: ["06-08-2026", "14-08-2026"]
    nombre: "Apartamentos Luxsevilla Palacio",
    precio: 440,
    mascotas: false,
    ocupantes: {
        adultos: 2,
        niños: 0
    },
    servicios: ["Wifi", "Cocina", "Piscina", "Calefacción"]
}


// ¿Accedo al número de ocupantes adultos?
console.log("Ocupantes adultos:", reserva.ocupantes.adultos);

// Actualizar el valor de una propiedad del objeto
// Quisiera añadir un niño a la reserva. Nos comentan que entonces la reserva se encarece 100 euros
// 1. Actualizar la propiedad reserva.ocupantes.niños 
// 2. Actualizar la propiedad reserva.precio

reserva.precio = reserva.precio + 100; 
reserva.ocupantes.niños = reserva.ocupantes.niños + 1;

console.log("Después de añadir un niño a la reserva e incrementar en 100 el precio: ", reserva);
