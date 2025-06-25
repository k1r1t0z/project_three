$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
            }
        }
        ]
    });
});