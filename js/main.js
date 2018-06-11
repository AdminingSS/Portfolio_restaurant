$(document).ready(function () {
    //Слайдер
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
        const $quotesSlider = $('#sliderQuotes');
        const quotesOptions = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        $quotesSlider.slick(quotesOptions);
    })();

    //Валидатор
    (function () {
        $.validator.setDefaults({
            submitHandler: function (form) {
                $(form).ajaxSubmit();
            }
        });

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
    })();

    //Навбар
    (function () {
        let menu_selector = "#navbarNav"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
        function onScroll() {
            let scroll_top = $(document).scrollTop();
            const zoneOffset = 100;
            $(menu_selector + " .full a").each(function () {
                let hash = $(this).attr("href");
                let target = $(hash);
                if (target.position().top - zoneOffset <= scroll_top && target.position().top + target.outerHeight() - zoneOffset > scroll_top) {
                    $(menu_selector + " .full a.active").removeClass("active");
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });

            $(menu_selector + " .mobile a").each(function () {
                let hash = $(this).attr("href");
                let target = $(hash);
                if (target.position().top - zoneOffset <= scroll_top && target.position().top + target.outerHeight() - zoneOffset > scroll_top) {
                    $(menu_selector + " .mobile a.active").removeClass("active");
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });
        }

        $(document).on("scroll", onScroll);
        $(menu_selector + " a").click(function (e) {
            e.preventDefault();
            $(document).off("scroll");
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
            let hash = $(this).attr("href");
            let target = $(hash);
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500, function () {
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });
        });
    })();

    //Кнопка Наверх
    $(function () {
        const optionToTopBtn = 2;
        let showToTopBtnOn = document.documentElement.clientHeight * optionToTopBtn;

        $(window).scroll(function () {
            if ($(this).scrollTop() > showToTopBtnOn) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
        });

    });
});







