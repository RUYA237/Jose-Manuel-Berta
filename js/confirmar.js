document.querySelector(".rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias! Tu confirmación para la boda de Berta y José Manuel ha sido enviada.");
    this.reset();
});
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1200 });
});