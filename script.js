var _map;

var firebaseConfig = {
    apiKey: "AIzaSyDOoszQbTbCtqzaeueDp5OAOo7iKP4_V4w",
    authDomain: "personalprofilepage-be5be.firebaseapp.com",
    databaseURL: "https://personalprofilepage-be5be.firebaseio.com",
    projectId: "personalprofilepage-be5be",
    storageBucket: "",
    messagingSenderId: "606352315067",
    appId: "1:606352315067:web:62fdc987bd2f2e223f4f9e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var _messagesRef = firebase.database().ref('messages');

$(document).ready(function () {
    initMap();

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

    $("#submit-form").click(function () {
        let name = getInputVal('name'),
            email = getInputVal('email'),
            subject = getInputVal('subject'),
            message = getInputVal('message');

        if (!isFormValid()) {
            return;
        }

        saveMessage(name, email, subject, message);
    });
});

function initMap() {
    if (_map) {
        return;
    }
    _map = L.map('map', { zoomControl: false }).setView([-35.50, -60.70], 5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 5,
        minZoom: 5,
        id: 'mapbox/light-v10',
        accessToken: 'pk.eyJ1IjoibGF1dGlib25ldCIsImEiOiJjazA3MzcweGswMDVwM2ZwaW9pdXh1NzJ3In0.QJZpw_-PNziLLQHvcuA13w',
        className: 'mapLayer',
    }).addTo(_map);
    var markers = new L.LayerGroup();
    var myIcon = L.icon({
        iconUrl: './images/logo-marker.png',
        iconSize: [72, 72],
        className: 'mapLogo'
    });
    marker = L.marker([-33.25, -58.34], { icon: myIcon }).addTo(markers);
    _map.addLayer(markers);
}

function saveMessage(name, email, subject, message) {
    let newMessageRef = _messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });


    $("form").trigger("reset");
    $('#submit-form').text("Sent !");
    $('#submit-form').addClass('success').delay(3000).queue(function (next) {
        $('#submit-form').removeClass('success');
        $('#submit-form').text("Submit");
        next();
    });
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function isFormValid() {
    let isValid = true;
    $(".form-input").each(function (i) {
        if (!$(this).text() || $(this).text() == '') {
            isValid = false;
        }
    });
    return isValid;
}