$(document).ready(function () {
    $(document).bind('scroll', function (e) {
        $('section').each(function () {
            if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 1) {
                window.location.hash = $(this).attr('id');

                if ($(this).attr('id') == "about") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav1").toggleClass('selected');
                }
                else if ($(this).attr('id') == "life") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav2").toggleClass('selected');
                }
                else if ($(this).attr('id') == "job1") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav3").toggleClass('selected');
                }
                else if ($(this).attr('id') == "job2") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav4").toggleClass('selected');
                }
                else if ($(this).attr('id') == "job3") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav5").toggleClass('selected');
                }
                else if ($(this).attr('id') == "job4") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav6").toggleClass('selected');
                }
                else if ($(this).attr('id') == "wealth") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav7").toggleClass('selected');
                }
                else if ($(this).attr('id') == "politics") {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                    $("#nav8").toggleClass('selected');
                }
                else {
                    $('a.menu').removeClass('selected');
                    $('a.menu2').removeClass('selected');
                }

            }
        });
    });



    /*
    snaha nejako opravit to cudne zasekavanie ale nejako ani toto nepomohlo 
    */
    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) { (delta = event.wheelDelta / 120); }
        else if (event.detail) { (delta = -event.detail / 3); }
        handle(delta);
    }
    function handle(delta) {
        var time = 150;
        var distance = 300;
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time);
    }
    if (window.addEventListener) { window.addEventListener('DOMMouseScroll', wheel, false); }
    window.onmousewheel = document.onmousewheel = wheel;
});


