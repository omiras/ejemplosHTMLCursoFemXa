# 🔄 JavaScript — Vuelta del parón

## Objetivo

Después de tres semanas sin JavaScript, vamos a comprobar cuánto recordamos.

**No es un examen. No importa equivocarse.**

La idea es intentar resolver pequeños retos y explicar **por qué** creemos que funcionan.

---

# 1. Variables y tipos de datos

### 🧩 Reto 1 — ¿Qué tipo es?

Sin ejecutar el código, indica qué tipo de dato contiene cada variable:

```js
const nombre = "Laura";
const edad = 27;
const activo = true;
const precio = 19.95;
const ciudad = "Girona";
```

Tipos posibles:

* String
* Number
* Boolean

### 🧩 Reto 2 — Cambia los valores

Crea estas variables:

```js
const nombre = ???;
const edad = ???;
const tieneCarnet = ???;
```

Imprime una frase como:

```text
Laura tiene 27 años y tiene carnet: true
```

---

# 2. let y const

### 🧩 Reto 3 — ¿Funciona?

¿Qué ocurre al ejecutar?

```js
let edad = 25;

edad = 26;

console.log(edad);
```

¿Y esto?

```js
const edad = 25;

edad = 26;

console.log(edad);
```

### 🧩 Reto 4 — Decide

Indica si utilizarías `let` o `const`:

```text
Nombre de una persona que no va a cambiar
Contador que aumenta
Precio de un producto que no cambia
Número de intentos restantes
Nombre de una ciudad
```

---

# 3. Condicionales

### 🧩 Reto 5 — ¿Puede entrar?

Tenemos:

```js
const edad = 17;
```

Escribe un programa que muestre:

```text
Puedes entrar
```

si tiene 18 años o más, y:

```text
No puedes entrar
```

en caso contrario.

---

### 🧩 Reto 6 — Temperatura

```js
const temperatura = 31;
```

Muestra:

* `"Hace frío"` si es menor de 15
* `"Temperatura agradable"` si está entre 15 y 25
* `"Hace calor"` si es mayor de 25

---

### 🧩 Reto 7 — ¿Qué imprime?

```js
const puntos = 80;

if (puntos >= 90) {
    console.log("Excelente");
} else if (puntos >= 50) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
```

Antes de ejecutar, ¿qué crees que aparecerá?

---

# 4. Operadores y comparaciones

### 🧩 Reto 8 — Verdadero o falso

Sin ejecutar:

```js
console.log(10 > 5);
console.log(10 === 10);
console.log(10 === "10");
console.log(8 < 3);
console.log(5 >= 5);
```

¿Puedes explicar cada resultado?

---

### 🧩 Reto 9 — Mayor de edad

Crea:

```js
const edad = 21;
```

Utiliza `===`, `>`, `<`, `>=` o `<=` para comprobar si:

* Tiene exactamente 18 años
* Es mayor de edad
* Es menor de edad

---

# 5. Bucles

### 🧩 Reto 10 — Cuenta atrás

Utiliza un `for` para mostrar:

```text
5
4
3
2
1
```

---

### 🧩 Reto 11 — Números pares

Utiliza un bucle para mostrar los números pares del 2 al 20.

Resultado:

```text
2
4
6
8
...
20
```

---

### 🧩 Reto 12 — Suma

Calcula la suma de los números del 1 al 10:

```text
55
```

Pista:

Necesitarás una variable que vaya acumulando el resultado.

---

# 6. Strings

### 🧩 Reto 13 — Longitud

```js
const nombre = "Alejandro";
```

Muestra cuántos caracteres tiene el nombre.

---

### 🧩 Reto 14 — Primera letra

Dado:

```js
const palabra = "JavaScript";
```

Muestra únicamente:

```text
J
```

---

### 🧩 Reto 15 — Última letra

Dado:

```js
const palabra = "Programacion";
```

Muestra la última letra.

💡 Pista:

Recuerda que los índices empiezan en `0`.

---

# 7. slice()

### 🧩 Reto 16 — Recortar un texto

Tenemos:

```js
const palabra = "JavaScript";
```

Utiliza `slice()` para obtener:

```text
Java
```

---

### 🧩 Reto 17 — Las primeras letras

```js
const nombre = "Alejandro";
```

Utiliza `slice()` para obtener únicamente las primeras 4 letras.

Resultado:

```text
Alex
```

⚠️ Ojo: el resultado correcto según el nombre `"Alejandro"` debería ser:

```text
Alej
```

¿Por qué?

---

### 🧩 Reto 18 — Quitar el principio

Tenemos:

```js
const texto = "Hola mundo";
```

Utiliza `slice()` para obtener:

```text
mundo
```

---

### 🧩 Reto 19 — Mini reto

Tenemos:

```js
const email = "alumno@gmail.com";
```

Utiliza `slice()` para obtener únicamente:

```text
alumno
```

💡 Pista: tendrás que averiguar dónde termina la parte que quieres obtener.

---

# 8. Funciones

### 🧩 Reto 20 — Saludar

Crea una función:

```js
saludar(nombre)
```

que reciba un nombre y muestre:

```text
Hola, Laura
```

Por ejemplo:

```js
saludar("Laura");
saludar("Carlos");
```

---

### 🧩 Reto 21 — Duplicar

Crea:

```js
duplicar(numero)
```

que reciba un número y devuelva el doble.

Por ejemplo:

```js
console.log(duplicar(5));
```

Resultado:

```text
10
```

---

### 🧩 Reto 22 — ¿Qué diferencia hay?

Observa:

```js
function sumar(a, b) {
    console.log(a + b);
}
```

y:

```js
function sumar(a, b) {
    return a + b;
}
```

¿Qué diferencia hay entre las dos funciones?

¿Qué ocurre aquí?

```js
const resultado = sumar(5, 3);

console.log(resultado);
```

---

### 🧩 Reto 23 — Mayor de dos

Crea:

```js
mayor(a, b)
```

que devuelva el número mayor.

Ejemplo:

```js
console.log(mayor(10, 25));
```

Resultado:

```text
25
```

---

# 9. Arrays

### 🧩 Reto 24 — Acceder a elementos

Tenemos:

```js
const frutas = [
    "manzana",
    "plátano",
    "naranja",
    "pera"
];
```

Muestra:

1. La primera fruta
2. La tercera fruta
3. La última fruta

---

### 🧩 Reto 25 — Cambiar un elemento

Tenemos:

```js
const colores = [
    "rojo",
    "verde",
    "azul"
];
```

Cambia `"verde"` por `"amarillo"`.

---

### 🧩 Reto 26 — Añadir elementos

Tenemos:

```js
const alumnos = [
    "Ana",
    "Luis",
    "Marta"
];
```

Añade:

```text
Carlos
```

al final del array utilizando `push()`.

---

### 🧩 Reto 27 — Recorrer un array

Dado:

```js
const ciudades = [
    "Girona",
    "Barcelona",
    "Tarragona",
    "Lleida"
];
```

Utiliza un `for` para mostrar todas las ciudades.

---

# 10. Arrays + condicionales

### 🧩 Reto 28 — Buscar aprobados

Tenemos:

```js
const notas = [4, 7, 8, 3, 10, 5];
```

Recorre el array y muestra únicamente las notas aprobadas.

Resultado:

```text
7
8
10
5
```

---

### 🧩 Reto 29 — ¿Hay suspensos?

Utiliza:

```js
const notas = [7, 8, 6, 9, 5];
```

Recorre el array y muestra:

```text
Hay suspensos
```

si encuentras alguna nota menor que 5.

---

# 11. Objetos

### 🧩 Reto 30 — Conocer un objeto

Tenemos:

```js
const alumno = {
    nombre: "Laura",
    edad: 27,
    nota: 8
};
```

Muestra:

```text
Laura
27
8
```

accediendo a sus propiedades.

---

### 🧩 Reto 31 — Modificar una propiedad

Cambia la nota:

```js
alumno.nota = 9;
```

Después muestra el objeto.

---

### 🧩 Reto 32 — Condición sobre un objeto

Tenemos:

```js
const alumno = {
    nombre: "Carlos",
    edad: 20,
    nota: 4
};
```

Muestra:

```text
Carlos ha aprobado
```

o:

```text
Carlos ha suspendido
```

dependiendo de su nota.

---

# 12. Arrays de objetos

### 🧩 Reto 33 — Reservas

Tenemos:

```js
const reservas = [
    {
        hotel: "Hotel Sol",
        noches: 3,
        precio: 80
    },
    {
        hotel: "Hotel Mar",
        noches: 5,
        precio: 65
    },
    {
        hotel: "Hotel Playa",
        noches: 2,
        precio: 120
    }
];
```

Muestra el nombre de todos los hoteles.

Resultado:

```text
Hotel Sol
Hotel Mar
Hotel Playa
```

---

### 🧩 Reto 34 — Precio de una reserva

Calcula cuánto cuesta la primera reserva.

```text
3 noches × 80 € = 240 €
```

---

### 🧩 Reto 35 — Función + objeto

Crea:

```js
function calcularPrecio(reserva) {

}
```

La función debe recibir una reserva y devolver:

```text
noches × precio
```

Después:

```js
console.log(calcularPrecio(reservas[0]));
```

debería mostrar:

```text
240
```

---

# 13. 🧠 RETO FINAL — El programador vuelve de vacaciones

Tenemos:

```js
const reservas = [
    {
        hotel: "Hotel Sol",
        noches: 3,
        precio: 80
    },
    {
        hotel: "Hotel Mar",
        noches: 5,
        precio: 65
    },
    {
        hotel: "Hotel Playa",
        noches: 2,
        precio: 120
    },
    {
        hotel: "Hotel Montaña",
        noches: 7,
        precio: 50
    }
];
```

### Reto A

Muestra todos los hoteles.

### Reto B

Calcula el precio total de cada reserva.

### Reto C

Muestra únicamente las reservas que cuestan más de 300 €.

### Reto D

Crea una función:

```js
calcularPrecio(reserva)
```

### Reto E

Crea una función:

```js
esReservaLarga(reserva)
```

que devuelva `true` si la reserva tiene 5 noches o más.

### Reto F — Extra ⭐

Utiliza `slice()` para crear un nuevo array que contenga únicamente las **dos primeras reservas**.

El array original no debe modificarse.

---

# 🏁 Preguntas para terminar

Después de hacer los retos:

1. ¿Qué concepto recordabas mejor?
2. ¿Qué concepto habías olvidado?
3. ¿Qué te ha parecido más fácil?
4. ¿Qué te ha parecido más difícil?
5. ¿Qué diferencia hay entre un array y un objeto?
6. ¿Qué diferencia hay entre `console.log()` y `return`?
7. ¿Para qué sirve una función?
8. ¿Para qué sirve `slice()`?
9. ¿Qué significa que una función reciba un parámetro?
10. Si tuvieras que explicarle JavaScript a alguien que nunca lo ha visto, ¿por dónde empezarías?
