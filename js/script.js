$(document).ready(function() {
    $("#bannerslide").lightSlider({
        loop: true,
        item:1,
        speed: 600,
        auto: true,
        pauseOnHover: true,
        keyPress: true,
        controls: true,
        pager: false
    });

    $("#card-slide").lightSlider({
        loop: true,
        item:5,
        speed: 600,
        slideMargin: 50,
        auto: false,
        pauseOnHover: true,
        keyPress: true,
        controls: true,
        pager: false
    });
});