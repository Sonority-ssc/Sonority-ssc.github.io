$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        adaptiveHeight: true,
        items: 1,
        autoplay: true,
        loop: true
    });

    // top sale owl carousel
    $("#category-carousel .owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

});
