const busqueda = document.getElementById("busqueda");
const botonConsultar = document.getElementById("botonConsultar");
const listaActividades = document.getElementById("listaActividades");
const mensaje = document.getElementById("mensaje");

function filtrarActividades() {
    const texto = busqueda.value.trim().toLowerCase();
    const actividades = listaActividades.querySelectorAll("li");
    let coincidencias = 0;

    actividades.forEach(function(actividad) {
        const nombreActividad = actividad.textContent.toLowerCase();
        const coincide = nombreActividad.includes(texto);

        actividad.hidden = !coincide;

        if (coincide) {
            coincidencias++;
        }
    });

    if (coincidencias === 0) {
        mensaje.textContent = "No se encontraron actividades.";
    } else {
        mensaje.textContent =
            "Actividades encontradas: " + coincidencias;
    }
}

busqueda.addEventListener("input", filtrarActividades);

botonConsultar.addEventListener("click", filtrarActividades);
