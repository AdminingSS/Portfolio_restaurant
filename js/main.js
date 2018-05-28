$(document).ready(function () {
    //slider
    (function () {
        const $mainSlider = $('#sliderDishes');
        const options = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        $mainSlider.slick(options);
    })();
});