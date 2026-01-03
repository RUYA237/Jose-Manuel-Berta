document.addEventListener("DOMContentLoaded", function () {
    const heroSwiper = new Swiper(".hero__swiper", {
        effect: "slide",
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000, // Cambio cada 3 segundos
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // SE PARA AL PONER EL RATÓN
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    });
});