function toggleAcompanante() {
    const select = document.getElementById('acompanante-select');
    const hiddenField = document.getElementById('hidden-acompanante');
    hiddenField.style.display = (select.value === 'acompanado') ? 'block' : 'none';
}

function toggleNinos() {
    const select = document.getElementById('ninos-select');
    const hiddenField = document.getElementById('hidden-ninos');
    hiddenField.style.display = (select.value === 'si') ? 'block' : 'none';
}

// Lógica de envío de datos
document.getElementById("wedding-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const btn = document.getElementById("submit-btn");
    const status = document.getElementById("status-message");

    btn.disabled = true;
    btn.innerText = "Enviando...";

    // Convertimos los datos del formulario a un formato que Google entienda (URLSearchParams)
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    // Enviamos los datos pegados a la URL con el método POST
    fetch(form.action + "?" + queryString, {
        method: "POST",
        mode: "no-cors"
    })
    .then(() => {
        // Mostramos mensaje de éxito
        status.innerText = "¡Gracias! Tu confirmación ha sido recibida.";
        status.style.color = "#28a745";
        status.style.display = "block";
        btn.innerText = "¡Enviado!";
        
        // Limpiamos el formulario
        form.reset();
        document.getElementById('hidden-acompanante').style.display = 'none';
        document.getElementById('hidden-ninos').style.display = 'none';
    })
    .catch(error => {
        status.innerText = "Error al enviar. Inténtalo de nuevo.";
        status.style.color = "#dc3545";
        status.style.display = "block";
        btn.disabled = false;
        btn.innerText = "Reintentar";
        console.error("Error:", error);
    });
});