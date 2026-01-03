document.addEventListener("DOMContentLoaded", function () {
    const heroSwiper = new Swiper(".hero__swiper", {
        effect: "slide",
        loop: true,
        speed: 800,
        allowTouchMove: true,
        parallax: true,

        autoplay: {
            delay: 3000, // Pasa cada 3 segundos
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // SE PARA si pones el ratón encima
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