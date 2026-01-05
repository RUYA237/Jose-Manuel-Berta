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

document.addEventListener("DOMContentLoaded", function () {
    // Animaciones más rápidas (800ms) para que no parezca pesado
    AOS.init({ 
        duration: 800, 
        once: true,
        offset: 50 
    });
    
    const header = document.getElementById("main-header");
    
    // El flag { passive: true } es lo que quita el lag del scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255,255,255,0.98)";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            header.style.padding = "10px 10%";
        } else {
            header.style.background = "#fff";
            header.style.boxShadow = "none";
            header.style.padding = "15px 10%";
        }
    }, { passive: true });
});

document.addEventListener("DOMContentLoaded", function () {
    const weddingDate = new Date("Sep 26, 2026 00:00:00").getTime();

    const updateTimer = setInterval(() => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        if (diff < 0) {
            clearInterval(updateTimer);
            document.querySelector(".timer-content").innerHTML = "<p class='timer-subtitle'>¡Es hoy!</p>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d.toString().padStart(2, '0');
        document.getElementById("hours").innerText = h.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
    }, 1000);
});