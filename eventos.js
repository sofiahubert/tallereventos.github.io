// Obtener el botón por su ID
const boton = document.getElementById("miBoton");
// Obtener el div existente por su ID
const nuevoDiv = document.getElementById("nuevoDiv");
// Agregar el botón como contenido del div
nuevoDiv.appendChild(boton);

// Agregar manejador de eventos para el "click" en el botón
boton.addEventListener("click", function(event) {
    // Detener la propagación del evento "click" del botón
    event.stopPropagation();
});

// Agregar manejador de eventos para el "click" en el div
nuevoDiv.addEventListener("click", function() {
    alert("¡Hola! Soy el div");
});
