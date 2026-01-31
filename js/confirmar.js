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

// Lógica de envío de datos (ACTUALIZADA)
document.getElementById("wedding-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // 1. URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzLJPohg8irriJD5uY5nz_R82fBokhqt_rFXdYTXycGHiRs6E68LIAll3RM57s5wwU/exec';

    const form = e.target;
    const btn = document.getElementById("submit-btn");
    const status = document.getElementById("status-message");

    btn.disabled = true;
    btn.innerText = "Enviando...";

    // Usamos FormData directamente para que el script de Google reciba todo bien
    const formData = new FormData(form);

    fetch(scriptURL, { 
        method: "POST", 
        body: formData 
    })
    .then(() => {
        // Mostramos mensaje de éxito (manteniendo tu estilo)
        status.innerText = "¡Gracias! Tu confirmación ha sido recibida.";
        status.style.color = "#28a745";
        status.style.display = "block";
        btn.innerText = "¡Enviado!";
        
        // Limpiamos el formulario y ocultamos tus campos especiales
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