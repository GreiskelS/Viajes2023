form = document.getElementById("botonEnviar")
form.addEventListener("submit", function(event) {
    event.preventDefsult();

    alert('¡Tu mensaje va volando!');

    document.getElementById("nombre").value = "";
})


