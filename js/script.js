// smooth scrolling start
$(window).on("load", function () {
    $(".header__item-link,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector: ".header__item-link",
    });
    $(".header-slider__arrow-icon a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector: ".header-slider__arrow-icon a",
        // scrollSpeed: 800,
    });
    $("button a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector: ".button a",
        // scrollSpeed: 800,
    });
});
// smooth scrolling end

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('_webp');
    } else {
        document.querySelector('body').classList.add('_no-webp');
    }
});


// burger__menu start
$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__nav').click(function () {
        $('.header__burger, .header__nav').removeClass('active');
        $('body').removeClass('lock');
    });
});
// burger__menu end

// owlCarousel #1 start
$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        // autoplay: true,
        // autoplayTimeout: 5000,
        // smartSpeed: 1000,
        animateOut: 'fadeOutUp',
    });
});
// owlCarousel end

// owlCarousel #2 start
$('#owl-carousel').each(function () {
    var owl = $(this).find('.owl-carousel').owlCarousel({
        margin: 10,
        dots: true,
        // stagePadding: 60,
        responsive: {
            300: {
                stagePadding: 20,
                items: 1,
            },
            370: {
                stagePadding: 40,
                items: 1,
            },
            400: {
                stagePadding: 60,
                items: 1,
            },
            500: {
                stagePadding: 100,
                items: 1,
            },
            600: {
                stagePadding: 20,
                items: 2,
            },
            650: {
                stagePadding: 60,
                items: 2,
            },
            690: {
                stagePadding: 80,
                items: 2,
            },
            750: {
                stagePadding: 100,
                items: 2,
            },
            800: {
                stagePadding: 120,
                items: 2,
            },
            851: {
                items: 2
            }
        }
    });
    $(this).find('.js-prev').on('click', function () {
        owl.trigger('prev.owl.carousel');
    });
    $(this).find('.js-next').on('click', function () {
        owl.trigger('next.owl.carousel');
    });
});
// owlCarousel end

// owlCarousel #3 start
$('#owl-carousel-visas').each(function () {
    var owl = $(this).find('.owl-carousel').owlCarousel({
        margin: 0,
        dots: true,
        responsive: {
            300: {
                stagePadding: 20,
                items: 1,
            },
            370: {
                stagePadding: 40,
                items: 1,
            },
            400: {
                stagePadding: 60,
                items: 1,
            },
            500: {
                stagePadding: 100,
                items: 1,
            },
            600: {
                stagePadding: 20,
                items: 2,
            },
            650: {
                stagePadding: 60,
                items: 2,
            },
            690: {
                stagePadding: 80,
                items: 2,
            },
            750: {
                stagePadding: 100,
                items: 2,
            },
            800: {
                stagePadding: 120,
                items: 2,
            },
            900: {
                stagePadding: 10,
                items: 3,
            },
            1000: {
                stagePadding: 60,
                items: 3,
            },
            1050: {
                stagePadding: 100,
                items: 3,
            },
            1110: {
                stagePadding: 120,
                items: 3,
            },
            1170: {
                items: 4,
            }
        }
    });
});
// owlCarousel end

// owlCarousel #3 start
$('.visa-processing__carusel').each(function () {
    var owl = $(this).find('.visa-processing__cards').owlCarousel({
        margin: 0,
        dots: true,
    });
});
// owlCarousel end


function owlCaruselAdd() {
    if ($(window).width() < 767) {
        document.querySelector('.visa-processing__wrapper').classList.add('visa-processing__carusel')
        document.querySelector('.visa-processing__cards').classList.add('owl-carousel')
        document.querySelector('.visa-processing__cards').classList.add('owl-theme')
    }
    else {
        document.querySelector('.visa-processing__wrapper').classList.remove('visa-processing__carusel')
        document.querySelector('.visa-processing__cards').classList.remove('owl-carousel')
        document.querySelector('.visa-processing__cards').classList.remove('owl-theme')
    }
}

owlCaruselAdd();

$(window).resize(function () {
    owlCaruselAdd();
});

// upbtn start
$('body');
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.up-button').css({
            transform: 'scale(1)'
        });
    } else {
        $('.up-button').css({
            transform: 'scale(0)'
        });
    }
});
$('.up-button').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});

var upButtonSize = document.querySelector(".up-button__size");

window.addEventListener("scroll", function () {
    var documentHeight = document.body.clientHeight;
    var scrollHeight = window.scrollY;
    var windowHeight = window.innerHeight;

    var scrollPercent = (scrollHeight / (documentHeight - windowHeight)) * 100

    upButtonSize.style.height = scrollPercent + "%";
});
// upbtn end
