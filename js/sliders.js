var $status = $('.pagingCurrent');
var $pagingAll = $('.pagingAll');
var $slickElement = $('.slider__nav');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $status.text(i + '/' + slick.slideCount);
    $status.text(i);
    $pagingAll.text(slick.slideCount);
});

$('.slider__nav').slick({
    reInit: true,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    infinity: true,
    slidesToShow: 3,
    asNavFor: '.slider__tabs',
    responsive: [
        {
            breakpoint: 1270,
            settings: {
                slidesToShow: 3,
                reInit: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                reInit: true,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                reInit: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                reInit: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                reInit: true,
            }
        }
    ],
});

$('.slider__tabs').slick ({
    reInit: true,
    vertical: true,
    asNavFor: '.slider__nav',
    slidesToShow: 1,
    arrows: false,
});

$('.slick').slick({
    arrows: true,
    infinity: true,
    dots: true,
});

// < !--Creating and powerd by Overkills(Даниил), Iluas(Илья)-- >