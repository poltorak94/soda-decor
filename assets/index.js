$(document).ready(function () {
    Fancybox.bind("[data-fancybox]");

    $(".input-tel").mask("+7 (999) 999-99-99");

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();
        if (scroll > 50) {
            $(".header").addClass("header--scroll");
        } else {
            $(".header").removeClass("header--scroll");
        }
    });

    let trust = new Swiper(".trust__slider", {
        slidesPerView: 3,
        spaceBetween: 18,
        loop: true,
        navigation: {
            nextEl: ".trust__slider-next",
            prevEl: ".trust__slider-prev",
        },
    });

    let reviews = new Swiper(".reviews__slider", {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        navigation: {
            nextEl: ".reviews__next",
            prevEl: ".reviews__prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            990: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
        },
    });

    $(".slider").each(function (i) {
        i++;
        var i = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 4,
            loop: true,
            navigation: {
                nextEl: $(this).parent().find(".slider__next")[0],
                prevEl: $(this).parent().find(".slider__prev")[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                990: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                1100: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                },
                1920: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                },
            },
        });
    });

    $(".header__burger").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("header__burger--active");

        $(".header").toggleClass("header--active");

        // $(".mob-nav").slideToggle();
    });

    $(".header__nav-item, .hero__btn, .header__logo, .footer__logo").click(
        function (e) {
            e.preventDefault();
            // $(".mob-nav").slideUp();
            $(".header__burger").removeClass("header__burger--active");
            let headerH = $(".header").height();
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $(".header").toggleClass("header--active");

            $("body, html").animate(
                {
                    scrollTop: destination - headerH - 40,
                },
                800
            );
        }
    );

    // $(".modal-form").on("submit", function (e) {
    //     e.preventDefault();
    //     let data = $(this).serialize();
    //     let form = $(this);
    //     let parent = form.closest(".modal");
    //     $.ajax({
    //         type: "POST",
    //         url: "email.php",
    //         data: data,
    //         success: function () {
    //             parent.addClass("modal--success");
    //         },
    //         error: function () {
    //             alert("Ошибка сервера, попробуйте еще раз");
    //         },
    //     });
    // });

    //счетчик товаров
    let productCount;
    $(".plus").on("click", function (e) {
        e.preventDefault();
        let inputField = $(".modal-product__count-filed");

        let sum = parseInt(
            $(".modal-product__item--sum")
                .find(".modal-product__item-val")
                .attr("data-val")
        );

        let step = 1;
        productCount = parseInt(inputField.val());
        productCount += step;
        let total = sum * productCount;
        console.log(total);
        $(".modal-product__item--sum")
            .find(".modal-product__item-val span")
            .text(total);
        inputField.val(productCount);
    });

    $(".minus").on("click", function (e) {
        e.preventDefault();
        let inputField = $(".modal-product__count-filed");
        let sum = parseInt(
            $(".modal-product__item--sum")
                .find(".modal-product__item-val")
                .attr("data-val")
        );

        let step = 1;
        let minVal = 1;
        productCount = parseInt(inputField.val());
        productCount -= step;
        let total = sum * productCount;

        $(".modal-product__item--sum")
            .find(".modal-product__item-val span")
            .text(total);
        if (productCount < minVal) {
            productCount = minVal;
            $(".modal-product__item--sum")
                .find(".modal-product__item-val span")
                .text(sum);
        }
        inputField.val(productCount);
    });
});
