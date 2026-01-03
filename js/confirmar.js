document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".rsvp-form");
    
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("¡Gracias! Tu confirmación para la boda de Berta y José Manuel ha sido enviada.");
            this.reset();
        });
    }
});