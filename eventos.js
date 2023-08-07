// Obtener el botón por su ID
const boton = document.getElementById("miBoton");
// Obtener el div existente por su ID
const nuevoDiv = document.getElementById("nuevoDiv");
// Agregar el botón como contenido del div
nuevoDiv.appendChild(boton);
nuevoDiv.addEventListener("click", function() {
    alert("¡Hola! Soy el Div");
});