var list = $("nav ul.menu li  a");
list.click(function(event) {
    var submenu = this.parentNode.getElementsByTagName("ul").item(0);
    if (submenu != null) {
        event.preventDefault();
        $(submenu).slideToggle('fast');
        $(submenu).closest("li").toggleClass("active");
    }
});

$("header .toggle-menu").click(function() {
    $("nav").toggleClass("active");
});

$('.menu a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 400) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});




$('.owl-carousel').owlCarousel({
    loop: false,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});