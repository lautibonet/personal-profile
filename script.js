var _containers;
var _currentPage;
var _animating;

$(document).ready(function () {
    _animating = false;
    _currentPage = 0;
    _containers = $('.container');

    $(window).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            console.log('scrolling up !');
            scrollUp();
        }
        else {
            console.log('scrolling down !');
            scrollDown();
        }
    });

    $('span.letter').hover(function () {
        $(this).addClass('rubberBand').delay(1000).queue(function (next) {
            $(this).removeClass('rubberBand');
            next();
        });
    });

    $('#home').click(function () {
        if ($('#home-wrapper').hasClass('active')) return;

        $('.container div.active').toggleClass('active');
        $('#wall').addClass('show').delay(500).queue(function (next) {
            $('#wall').removeClass('show');
            $('div#home-wrapper').toggleClass('active');
            next();
        });
    });

    $('#profile').click(function () {
        if ($('#profile-wrapper').hasClass('active')) return;

        $('.container div.active').toggleClass('active');
        $('#wall').addClass('show').delay(500).queue(function (next) {
            $('#wall').removeClass('show');
            $('div#profile-wrapper').toggleClass('active');
            next();
        });
    });

    $('#experience').click(function () {
        if ($('#experience-wrapper').hasClass('active')) return;

        $('.container div.active').toggleClass('active');
        $('#wall').addClass('show').delay(500).queue(function (next) {
            $('#wall').removeClass('show');
            $('div#experience-wrapper').toggleClass('active');
            next();
        });
    });

    $('#contact').click(function () {
        if ($('#contact-wrapper').hasClass('active')) return;

        $('.container div.active').toggleClass('active');
        $('#wall').addClass('show').delay(500).queue(function (next) {
            $('#wall').removeClass('show');
            $('div#contact-wrapper').toggleClass('active');
            next();
        });
    });
});

function scrollDown() {
    if (_currentPage == _containers.length - 1) return;
    $(_containers[_currentPage]).css('height', 0);
    _currentPage++;
}

function scrollUp() {
    if (_currentPage == 0) return;
    $(_containers[_currentPage - 1]).css('height', '100vh');
    _currentPage--;
}