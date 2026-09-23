/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */
const messageInput = document.querySelector("#message");
const button = document.querySelector("#btn-send");
const lastMessage = document.querySelector("#last-message");

button.addEventListener("click", function() {
    // Leer lo que ha puesto el usuario en el <input> y colocarlo el contenedor lastMEssage
    lastMessage.textContent = messageInput.value;

    // "Limpiar" el <input> === poner un string vacío en el <input>
    messageInput.value = "";

});
