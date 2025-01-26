jQuery(document).ready(function () {
    var swiper = new Swiper(".myswiper", {
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        // spaceBetween: 15,
        autoplay: 1000,
        speed: 800,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });


});
