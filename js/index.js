document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ duration: 1200, once: true });
    
    // Efecto scroll en header
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255,255,255,0.95)";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.background = "#fff";
            header.style.boxShadow = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1200 });
});