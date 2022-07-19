$(document).ready(function() {
    $(".filterbtn a").click(function() {
        $('#filtermainbox').slideToggle();
        $(this).children().toggleClass('fa-chevron-up fa-chevron-down');
    });

    $(".overlayformobilemenu, .menuclosebtn a").click(function() {
        $('.button').toggleClass('menu-opened');
        var mainmenu = $(".top-menu");
        mainmenu.removeClass('topmenuopen');
        $('.overlayformobilemenu').hide();
    });

    (function($) {
        $.fn.menumaker = function(options) {
            var cssmenu = $(this),
                settings = $.extend({
                    format: "dropdown",
                    sticky: false
                }, options);
            return this.each(function() {
                //$(".button").click(function () {
                //    $(this).toggleClass('menu-opened');
                //    var mainmenu = $("#cssmenu ul").next('ul');
                //    if (mainmenu.hasClass('open')) {
                //        mainmenu.slideToggle().removeClass('open');
                //    }
                //    else {
                //        mainmenu.slideToggle().addClass('open');
                //        if (settings.format === "dropdown") {
                //            mainmenu.find('ul').show();
                //        }
                //    }
                //});
                $(".button").on('click', function() {
                    $(this).toggleClass('menu-opened');
                    var mainmenu = $(".top-menu");
                    if (mainmenu.hasClass('open')) {
                        mainmenu.removeClass('topmenuopen');
                        $('.overlayformobilemenu').hide();
                    } else {
                        mainmenu.addClass('topmenuopen');
                        $('.overlayformobilemenu').show();
                        if (settings.format === "dropdown") {
                            mainmenu.find('ul').show();
                        }
                    }
                });
                cssmenu.find('li ul').parent().addClass('has-sub');
                multiTg = function() {
                    cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                    cssmenu.find('.submenu-button').on('click', function() {
                        $(this).toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open').slideToggle();
                        } else {
                            $(this).siblings('ul').addClass('open').slideToggle();
                        }
                    });
                };
                if (settings.format === 'multitoggle') multiTg();
                else cssmenu.addClass('dropdown');
            });
        };
    })(jQuery);

    (function($) {
        $(document).ready(function() {
            $("#cssmenu").menumaker({
                format: "multitoggle"
            });
        });
    })(jQuery);


    $('#infoslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#bestseller').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 2,
            },
            585: {
                items: 2,
            },
            767: {
                items: 2,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    })
    $('#dealsoftheday').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            550: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    setInterval(function time() {
        var d = new Date();
        var hours = 24 - d.getHours();
        var min = 60 - d.getMinutes();
        if ((min + '').length == 1) {
            min = '0' + min;
        }
        var sec = 60 - d.getSeconds();
        if ((sec + '').length == 1) {
            sec = '0' + sec;
        }
        jQuery('#the-final-countdown').html(hours + ':' + min + ':' + sec)
    }, 1000);


    $('#testimonialslider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })



    $('#blogslider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        stagePadding: 150,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            550: {
                items: 2,
                stagePadding: 0,
            },
            992: {
                items: 2,
                stagePadding: 0,
            },
            1000: {
                items: 3
            }
        }
    })

    $('#abtslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,


        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#diseasesslider').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,


        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    $('#relatedslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,


        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    $('#teretmentslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,


        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: false,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

});