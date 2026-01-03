document.addEventListener("DOMContentLoaded", function () {
    // Inicializar Animaciones AOS
    AOS.init({ 
        duration: 1200, 
        once: true 
    });
    
    // Efecto Scroll en Header
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255,255,255,0.95)";
            header.style.padding = "10px 5%";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.background = "#ffffff";
            header.style.padding = "20px 5%";
            header.style.boxShadow = "none";
        }
    });
});