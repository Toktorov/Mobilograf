(function($) {
    'use strict';

	$(window).on('load', function() {
		// preloader
		$('#preloader').fadeOut('slow', function() {
			$(this).remove();
		});
		
		//slides preload
		$(".slides__preload_wrapper").fadeOut(1500);
		
	});
	

	/* =======================================
      About tabs
   ======================================*/
		$('.collapse.in').prev('.panel-heading').addClass('active');
		$('#accordion, #bs-collapse')
		.on('show.bs.collapse', function (a) {
			$(a.target).prev('.panel-heading').addClass('active');
		})
		.on('hide.bs.collapse', function (a) {
			$(a.target).prev('.panel-heading').removeClass('active');
		});
	/* =======================================
         Slider  Carousel
    ======================================*/	
     $(".slider_home").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        autoplayTimeout: 8000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
		dots: true,
        nav: false,
        mouseDrag: true,
        touchDrag: true,
    });

    $(".slider_home").on("translate.owl.carousel", function() {
        $(".single_slider h2, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider_home").on("translated.owl.carousel", function() {
        $(".single_slider h2, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
    });
	
	/* =======================================
          single Page Nav
    =======================================*/
    // The actual plugin
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
    });
	 /* =======================================
         Slider  Carousel
    ======================================*/	
     $(".slider_home2").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        autoplayTimeout: 8000, // Default is 5000
        smartSpeed: 1000, // Default is 250
         navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
		dots: false,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
    });

	 /* =======================================
         Team Carousel
    ======================================*/		
	$('.team_wrap').slick({
		prevArrow: '<i class="speaker_prev fa fa-angle-left"> <i>',
		nextArrow: '<i class="speaker_next fa fa-angle-right"> <i>',
		asNavFor: '.team_wrap2',
		slidesToShow: 1,
		slidesToScroll: 1,
	});


	$('.team_wrap2').slick({
		slidesToShow: 6,
		asNavFor: '.team_wrap',
		slidesToScroll: 1,
		focusOnSelect: true,
		variableWidth: true,
	});
    /*=======================================
		Service Section  
	=======================================*/
    $("#service").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 2000, // Default is 250
        items: 3,
		margin: 20,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: false,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
		responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });	
	
	
    /*=======================================
		Client Section  
	=======================================*/
    $("#client").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 6,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: false,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
		responsive: {
            1200: {
                items: 6
            },
            992: {
                items: 6
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            },
            280: {
                items: 2
            }
        }
    });
	
	
    /* =======================================
           Testimonial Section 
       =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 2000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 20,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: false,
		responsive: {
            1200: {
                items: 1
            },
            992: {
                items: 1
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });


    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });
	
	/*=======================================
          Achieve Count
    ======================================= */
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 50);
        }
    }
    $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
 
    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /*=======================================
        Scroll Top
    =======================================*/
    $(".scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });


})(jQuery);