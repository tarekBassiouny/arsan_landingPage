// intro slider
$('#intro-silder').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true,
    rtl: false

})

// partners slider
$('#partners-silder').owlCarousel({
    loop: true,
    rtl: false,
    margin: 30,
    nav: false,
    items: 3,
    autoplay: true,
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1,
        },
        // breakpoint from 480 up
        400: {
            items: 1,
        },
        // breakpoint from 768 up
        768: {
            items: 2,
        },
        991: {
            items: 2,
        },
        1000: {
            items: 3,
        },

    }

})


// Resize Menu on Scroll
$(document).on("scroll", function () {

    if ($(document).scrollTop() > 100) {
        $("header").removeClass("large-header").addClass("small-header");

    } else {
        $("header").removeClass("small-header").addClass("large-header");

    }

});

// wow
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true,
});
wow.init();


// collapsed menu close on click
$(document).on('click', '.navbar-collapse.show', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

// scrolling to section
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } // End if
    });
});


//popup
$(document).ready(function () {

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function (openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

});
