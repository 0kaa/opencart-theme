$(document).ready(function () {

        // Scroll To Top
        $('#top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    $('.rating-group label').click(function () {
        $(this).parent('.rating-group').addClass('selected');
        $(this).addClass('active').siblings().removeClass('active');
    });

  /* --------------------
		01- Remove PlaceHolder.
	----------------------- */
    function aePlaceHolder() {
        $('input,textarea').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'))
                .attr('placeholder', '');
        }).blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }
    aePlaceHolder();



      /* --------------------
		02- Toggle Class Cateogires Menu
    ----------------------- */

    $('.categories-wrap button').click(function () {
        $('.categories-wrap .nav').toggleClass('is-open');
    });



     /* --------------------
		03- Add Class Active to Link Menu
    ----------------------- */
    var url = window.location.href;
    $('.nav-wrap a[href="' + url + '"]').addClass('active');


 /* --------------------
		04- Deals Owl Carousel Setup
    ----------------------- */

    $(".deals-swiper").owlCarousel({
        loop: true,
        nav: true,
        margin:10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },

            1200: {
                items: 4
            },
        }
    });

 /* --------------------
		05- Deals Owl Carousel Setup
    ----------------------- */

    $(".tools-carousel").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },

            1200: {
                items: 1
            },
        }
    });


 /* --------------------
		06- Window On Scroll
    ----------------------- */

    $(window).on('scroll', function () {

        if ($(this).scrollTop() >= $('.ae-header').innerHeight()) {

            $('#ae-primary-nav').addClass('scrolled');

        } else {

            $('#ae-primary-nav').removeClass('scrolled');

        }
    });

     /* --------------------
		06- Add Cursor To Carousel
    ----------------------- */

    var cursor_url = window.location.href + '/catalog/view/theme/default/image/';
    var test = cursor_url.replace('/index.php?route=common/home', '');
    $('.carousel .tools-carousel .owl-nav button.owl-prev').css({
        'cursor': 'url("' + test + 'prev.svg"), auto'
    });

    $('.carousel .tools-carousel .owl-nav button.owl-next').css({
        'cursor': 'url("' + test + 'next.svg"), auto'
    });

    /* --------------------
		07- Toggle Menu Mobile
    ----------------------- */

    $('.menu-toggle-button').click(function (e) {
        e.preventDefault();
        $('.nav-menu-toggle').addClass('is-open-left');
    });

    $('#menu-toggle-button-close').click(function () {
        $('.nav-menu-toggle').removeClass('is-open-left');
    });


    /* --------------------
		08- Footer Toggle
    ----------------------- */
    function mmFooterToggle() {
        if ($(window).width() < 768) {
            $('.widget .widget-title').click(function (event) {
                $(this).next('div').stop(true, false, true).toggleClass('widget-on');
                event.stopPropagation();
            });
        }
        $(window).on('resize', function () {
            if ($(window).width() < 768) {
                $('.widget .widget-title').click(function (event) {
                    $(this).next('div').stop(true, false, true).toggleClass('widget-on');
                    event.stopPropagation();
                });
            }
        });
    }
    mmFooterToggle();
});