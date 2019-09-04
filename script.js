var _ctx;

$(document).ready(function () {
    _ctx = document.getElementById('radar-chart').getContext('2d');
    var _chart = new Chart(_ctx, {
        type: 'radar',
        data: {
            labels: ['JAVA', 'Angular', 'SQL', 'Javascript', 'CSS', 'Flutter'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 91, 80, 75, 75, 50],
                backgroundColor: [
                    'rgba(221, 3, 48, 0.5)',
                ],
                borderColor: [
                    'rgba(221, 3, 48, 1)',
                ]
            }]
        },
        options: {
            defaultColor: 'rgba(0, 147, 255, 1)',
            defaultFontColor: 'rgba(0, 147, 255, 1)',
            defaultFontFamily: "'Montserrat', sans-serif",
            tooltips: {
                enabled: false
            },
            legend: {
                display: false
            },
            legend: {
                display: false
            },
            scale: {
                gridLines: {
                    color: 'rgba(0,0,0,.7)'
                },
                angleLines: {
                    color: 'rgba(0,0,0,.7)'
                },
                pointLabels: {
                    fontSize: '15'
                },
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    stepSize: 25
                }
            }
        }
    });

    console.log(_chart);

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
