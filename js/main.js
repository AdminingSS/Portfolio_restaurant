$(document).ready(function () {
    //slider
    (function () {
        //dishes
        const $dishesSliderFish = $('#sliderDishesFish');
        const $dishesSliderMeat = $('#sliderDishesMeat');
        const $dishesSliderSalads = $('#sliderDishesSalads');
        const $dishesSliderDesserts = $('#sliderDishesDesserts');

        const dishesOptions = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        $dishesSliderFish.slick(dishesOptions);
        $dishesSliderMeat.slick(dishesOptions);
        $dishesSliderSalads.slick(dishesOptions);
        $dishesSliderDesserts.slick(dishesOptions);
        //quotes
        const $quotesSlider = $('#quotes');
        const quotesOptions = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        $quotesSlider.slick(quotesOptions);
    })();
});

//validator
$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});

$(document).ready(function () {
    $("#bookingForm").validate({
        rules: {
            name: "required",
            phone: {
                required: true,
                minlength: 7
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: false,
            }
        },
        messages: {
            name: "Please enter your Name",
            phone: {
                required: "Please enter a phone number",
                minlength: "Your phone number must consist of at least 7 digits"
            },
            email: "Please enter a valid email address"
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-8").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-8").addClass("has-success").removeClass("has-error");
        }
    });
});