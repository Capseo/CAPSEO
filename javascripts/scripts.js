$(window).ready(function() {

	"use strict";

	$('.slider').removeClass('hide');

});

$(document).ready(function () {

    "use strict";

    // Initialize Sliders

    $(".slider").slidesjs({
        height: 140,
        pagination: {
            active: false
        },
        navigation: {
            active: false
        },
        play: {
            auto: true,
            interval: 5000,
            effect: "fade"
        }
    });



    // Resize Home Screen

    var height = $(window).height();

    $('#home').css('height', height);

    // Adjust Home Content Padding

    var homePadding = (height / 2) - (($('#home-content').height()) / 2);

    $('#home-content').css('padding-top', homePadding);

    // Adjust menu padding

    var menuHeight = $('#nav-holder ul').height();
    var menuHeight2 = $('#social-holder ul').height();
    var logoHeight = $('#logo-holder').innerHeight();

    $('#nav-holder ul').css('padding-top', ((height / 2) - (menuHeight / 2) - (logoHeight)) + 'px');

    $('#social-holder ul').css('padding-top', ((height / 2) - (menuHeight2 / 2)) + 'px');

    // Adjust Paddings on Window Resize

    $(window).resize(function () {

        var height2 = $(window).height();


        $('#home').css('height', height2);

        $('#nav-holder ul').css('padding-top', ((height2 / 2) - (menuHeight / 2) - logoHeight) + 'px');
        $('#social-holder ul').css('padding-top', ((height2 / 2) - (menuHeight2 / 2)) + 'px');

    });


    // Handle Menu Hovers

    $('#nav-holder ul li').mouseenter(function () {

        $(this).children('.menu-title').addClass('show animated fadeInRight');

    });

    $('#nav-holder ul li').mouseleave(function () {

        if ($(this).children('.menu-title').hasClass('show animated fadeInRight')) {

            $(this).children('.menu-title').removeClass('show animated fadeInRight');

        }



    });

    // Mobile Menu Toggle

    $('.mobile-toggle').click(function () {

        if ($(this).hasClass('menu-show')) {

            $('.mobile-toggle').css('left', '10px');
            $('.mobile-toggle').css('top', '10px');
            $('#nav-holder').css('left', '-60px');
            $(this).removeClass('menu-show');

        } else {

            $('.mobile-toggle').css('left', '10px');
            $('.mobile-toggle').css('top', '10px');
            $('#nav-holder').css('left', '0px');
            $(this).addClass('menu-show');

        }

    });

    // Menu Clicks


    function fadeHomeUp() {
        $('#home-content').css('padding-top', '44px');
        $('.hero-p').removeClass('fadeInUp');
        $('.hero-p').addClass('fadeOutUp');
		
		$('.hero-front').removeClass('fadeInUp');
        $('.hero-front').addClass('fadeOutUp');
		
        $('#home-work').removeClass('fadeInUp');
        $('#home-work').addClass('fadeOutUp')
    }

    function fadeHomeDown() {
        $('#home-content').css('padding-top', homePadding);
        $('.hero-p').addClass('fadeInUp');
        $('.hero-p').removeClass('fadeOutUp');
		
		$('.hero-front').addClass('fadeInUp');
        $('.hero-front').removeClass('fadeOutUp');
		
        $('#home-work').addClass('fadeInUp');
        $('#home-work').removeClass('fadeOutUp');
    }


    $('.exit').click(function () {
	


        if ($(this).parent().hasClass('active')) {
			history.pushState('','','./');

            $(this).parent().removeClass('fadeInUpBig');
            $(this).parent().addClass('fadeOutDownBig');
            $(this).parent().removeClass('active');

            var that = this;

            setTimeout(function () {

                $(that).parent().addClass('hide');
                $(that).parent().removeClass('show');


            }, 500);

            setTimeout(function () {

                if (!$('.page').hasClass('active')) {

                    fadeHomeDown(homePadding);

                }


            }, 100);

        }




    });

    $('.contact-menu').click(function () {
		$('#contact').show();
        $('#contact').removeClass('fadeOutLeftBig');
        $('#contact').removeClass('hide');
        $('#contact').addClass('show');
        $('#contact').addClass('fadeInLeftBig');

    });

    $('.exit-contact').click(function () {



        $('#contact').removeClass('fadeInLeftBig');
        $('#contact').addClass('fadeOutLeftBig');
        setTimeout(function () {

            $('#contact').addClass('hide');


        }, 500);

    });

    // Front Work Click

    $('#home-work .btn').click(function () {

        $('.work-trigger').trigger('click');

    });

    // Project Clicks

    $('.project-back .btn').click(function () {

        var projectID = '#' + $(this).attr('data-project-id');
		
        $(projectID).show();
        $(projectID).removeClass('fadeOutRightBig');
        $(projectID).removeClass('hide');
        $(projectID).addClass('show');
        $(projectID).addClass('fadeInRightBig');

        if (!$(projectID + '-slideshow').hasClass('sliderSet')) {

            setTimeout(function () {

                $(projectID + '-slideshow').liquidSlider();
                $(projectID + '-slideshow').addClass('sliderSet');


            }, 500);

        }

    });

    $('.exit-project').click(function () {

        $(this).parent().removeClass('fadeInRightBig');
        $(this).parent().addClass('fadeOutRightBig');

        var thatOne = this;

        setTimeout(function () {

            $(thatOne).parent().addClass('hide');
            $(thatOne).parent().removeClass('show');


        }, 500);

    });

    // Project Item Hovers

    $(".project-image-wrap").mouseenter(function () {
        $(this).children('.project-overlay').fadeIn(500);

    }).mouseleave(function () {
        $(this).children('.project-overlay').fadeOut(500);
    });

    //Contact Form Code:

    $(function () {
        $(".form-button").click(function (e) {
            var $error = 0;
            var name = $("#form-name").val();
            var email = $("#form-email").val();
            var text = $("#form-msg").val();
            var security = $("#form-security").val();


            if (name === "" || email === "" || text === "") {
                $('#details-error-wrap').fadeIn(1000);
                $error = 1;

            } else {
                $('#details-error-wrap').fadeOut(1000);
            }

            if (security !== '8') {
                $('#security-error-wrap').fadeIn(1000);
                $error = 1;

            } else {
                $('#security-error-wrap').fadeOut(1000);
            }

            if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
                $('#details-error-wrap').fadeIn(1000);
                $error = 1;
            }



            var dataString = 'name=' + name + '&email=' + email + '&text=' + text;

            if ($error === 0) {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: dataString,
                    success: function () {
                        $('#details-error-wrap').fadeOut(300);
                        $('#security-error-wrap').fadeOut(300);
                        $('#form-sent').fadeIn(1000);




                    }
                });
                return false;
            }

            e.preventDefault();
        });
    });
	
	$(".menu-item a").click(function(e){
		e.preventDefault();
	})

	$(".menu-item").click(function(){
	
		var aHref = $(this).children("a:first").attr("href");
		history.pushState('','',aHref);
		var elementId = aHref.split("/");

		var element = null;
		
		switch(elementId[1]){
			case "services":
			element = $('#services');
			break;
			case "clients":
			element = $('#projects');
			break;
			case "about":
			element = $('#about');
			break;
		}

		if(element != null){
		displayMenuContent(element);
		}

	})
	
	
	function displayMenuContent(element){
			
			if(element.hasClass('fadeInUpBig')){
				return null;
			}
			fadeHomeUp();
			//$('.active .exit').trigger('click');
			
			var width = $(window).width();
			if (width < 768 && $('.mobile-toggle').hasClass('menu-show')) {

				$('.mobile-toggle').css('left', '10px');
				$('.mobile-toggle').css('top', '10px');
				$('#nav-holder').css('left', '-60px');
				$('.mobile-toggle').removeClass('menu-show');

			}
			
			element.siblings().removeClass('fadeInUpBig');
			element.siblings().removeClass('active');
			element.siblings().removeClass('show');
			element.siblings().addClass('hide');
			
			element.removeClass('fadeOutDownBig');
			element.removeClass('hide');			
			element.stop(true,true).fadeIn(200);
			element.addClass('show');
			element.addClass('fadeInUpBig');
			element.addClass('active');
			element.show();
	}
	
	

	$(function(){
		// Fetch the elements
		var $result = $('#result'),
			$menu = $('#menu'),
			$content = $('#content'),
			$services = $('#services'),
			$clients = $('#projects'),
			$about = $('#about');
		
		// Get the tabs
		var $tabs = $content.children();
		
		// Hide all our tabs initially
		//$tabs.hide();
		
		// Fetch our original document title
		var document_title = document.title;
		
		// Define our update menu function - as this is used a lot
		var updateMenu = function(state){
			// Update out tab menu
			$menu.children('li:has(a[href="#'+state+'"])').addClass('active').siblings('.active').removeClass('active');
		};
		
		// Bind a handler for ALL hash/state changes
		$.History.bind(function(state){
			// Update the current element to indicate which state we are now on
			//$current.text('Our current state is: ['+state+']');
			// Update the page's title with our current state on the end
			document.title = document_title + ' | ' + state;
			window.scrollTo(0,0);
		});

		
		// Bind a handler for state: apricots
		$.History.bind('/services',function(state){
			// Update Menu
			updateMenu(state);
			// Show apricots tab, hide the other tabs
			//$tabs.hide();
			displayMenuContent($services);
		});
	
		// Bind a handler for state: bananas
		$.History.bind('/clients',function(state){
			// Update Menu
			updateMenu(state);
			// Show bananas tab, hide the other tabs
			//$tabs.hide();
			displayMenuContent($clients);
		});
		
		// Bind a handler for state: coconuts
		$.History.bind('/about',function(state){
			// Update Menu
			updateMenu(state);
			// Show coconuts tab, hide the other tabs
			//$tabs.hide();
			displayMenuContent($about);
		});
	});
	

});