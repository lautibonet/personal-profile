var _ctx;

$(document).ready(function () {
    var mymap = L.map('map').setView([-34.56, -59.66], 7);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 10,
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoibGF1dGlib25ldCIsImEiOiJjazA3MzcweGswMDVwM2ZwaW9pdXh1NzJ3In0.QJZpw_-PNziLLQHvcuA13w'
    }).addTo(mymap);
    // var marker = L.marker([-34.59, -58.42]).addTo(mymap);
    var markers = new L.LayerGroup();
    var myIcon = L.icon({
        iconUrl: './images/logo-marker.png',
        iconSize: [72, 72]
    });
    marker = L.marker([-34.29, -58.42], { icon: myIcon }).addTo(markers);;
    mymap.addLayer(markers);


    _ctx = document.getElementById('radar-chart').getContext('2d');
    var _chart = new Chart(_ctx, {
        type: 'radar',
        data: {
            labels: ['JAVA', 'Angular', 'SQL', 'Javascript', 'CSS', 'Flutter'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 90, 70, 75, 75, 60],
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

    $('#skills').click(function () {
        if ($('#skills-wrapper').hasClass('active')) return;

        $('.container div.active').toggleClass('active');
        $('#wall').addClass('show').delay(500).queue(function (next) {
            $('#wall').removeClass('show');
            $('div#skills-wrapper').toggleClass('active');
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
