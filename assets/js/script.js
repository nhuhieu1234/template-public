new WOW().init();

$(document).on('ready', function() {
    $(".slider-ad").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        // fade: true,
        cssEase: 'linear'
    });
    $('.slider-other').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});
$(document).ready(function() {
    var options = {
        max_value: 5,
        step_size: 1,
        update_input_field_name: $("#input-rate"),
    }
    $(".rating").rate(options);
});

function initMap() {
    var myLatLng = { lat: 16.0586339, lng: 108.21326840000006 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}