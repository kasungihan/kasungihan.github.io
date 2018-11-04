var $ = jQuery.noConflict();

var KASUN = KASUN || {};

(function($, win, doc){

	"use strict";
	
	var $window = $(win);
    var $document = $(doc);
	var $body = $('body');
	var $html = $('html');
	var $goTop = $('#go-top');
	var $coverBox = $('#cover-box');
	var $tools = $('#tools');
	var $copyrightIcon = $('#copyright-icon');
	var $signature = $('#signature');

    KASUN.initialize = {

		init: function(){

			KASUN.initialize.responsiveClasses();
			KASUN.initialize.lazyLoad();
			KASUN.initialize.detectPlatform();
			KASUN.initialize.detectTouch();
			KASUN.initialize.goToTop();
			KASUN.initialize.imageFade();
			KASUN.initialize.scrollBar();
			KASUN.initialize.landSection();
			/* SEMICOLON.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			SEMICOLON.initialize.stickyElements();
			SEMICOLON.initialize.fullScreen();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.lightbox();
			SEMICOLON.initialize.resizeVideos();
			SEMICOLON.initialize.pageTransition();
			SEMICOLON.initialize.dataResponsiveClasses();
			SEMICOLON.initialize.dataResponsiveHeights(); */


		},

		responsiveClasses: function(){
			if ("undefined" == typeof jRespond) return console.log("responsiveClasses: jRespond plugin is missing."), !0;//!0 = true !1 = false
			var jRes = jRespond([
				{
					label: 'smallest',
					enter: 0,
					exit: 479
				},{
					label: 'handheld',
					enter: 480,
					exit: 767
				},{
					label: 'tablet',
					enter: 768,
					exit: 991
				},{
					label: 'laptop',
					enter: 992,
					exit: 1199
				},{
					label: 'desktop',
					enter: 1200,
					exit: 10000
				}
			]);
			jRes.addFunc([
				{
					breakpoint: 'desktop',
					enter: function() { $body.addClass('device-lg'); },
					exit: function() { $body.removeClass('device-lg'); }
				},{
					breakpoint: 'laptop',
					enter: function() { $body.addClass('device-md'); },
					exit: function() { $body.removeClass('device-md'); }
				},{
					breakpoint: 'tablet',
					enter: function() { $body.addClass('device-sm'); },
					exit: function() { $body.removeClass('device-sm'); }
				},{
					breakpoint: 'handheld',
					enter: function() { $body.addClass('device-xs'); },
					exit: function() { $body.removeClass('device-xs'); }
				},{
					breakpoint: 'smallest',
					enter: function() { $body.addClass('device-xxs'); },
					exit: function() { $body.removeClass('device-xxs'); }
				}
			]);
		},

		detectTouch: function(){
			if (!("ontouchstart" in doc.documentElement)) {
				$html.addClass("no-touch");
			} 
		},

		detectPlatform: function(){
			/* --------------------------------------------------
			Detect Platform
			---------------------------------------------------- */  
			var isMobile = {
				Android: function() {
					return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function() {
					return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function() {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function() {
					return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function() {
					return navigator.userAgent.match(/IEMobile/i);
				},
				any: function() {
					return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
			};
			if(!isMobile.any())
			{
				$html.addClass("no-mobile");
			}
			else {
				$html.addClass("mobile");
			}
		},

		imagePreload: function(selector, parameters){
			/* var params = {
				delay: 250,
				transition: 400,
				easing: 'linear'
			};
			$.extend(params, parameters);

			$(selector).each(function() {
				var image = $(this);
				image.css({visibility:'hidden', opacity: 0, display:'block'});
				image.wrap('<span class="preloader" />');
				image.one("load", function(evt) {
					$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
						$(this).unwrap('<span class="preloader" />');
					});
				}).each(function() {
					if(this.complete) $(this).trigger("load");
				});
			}); */
		},

		goToTop: function(){
			$window.on('scroll', function(){
				let scroll = $window.scrollTop();//.topScrollOffset;
				let offset = $coverBox.outerHeight();
				if(scroll >= offset){
					$goTop.addClass('d-block');
					//console.log('offset');
				} else{
					$goTop.removeClass('d-block');
					//console.log('offset no');
				}
			});
			
			 $goTop.on('click', function() {
				TweenMax.to($window, 2, { scrollTo:'body', ease:Power3.easeOut});
			  });
	
			  /*var winHieght = $(window).height();
			  var goBackTop = new TimelineMax();
			  var goTopAnimate = goBackTop.staggerFrom($('.help-button'), 0.8, {x: 50, ease:Power4.easeInOut})
				  .from($('.goto-top'), 0.8, {y: 60, ease: Power3.easeInOut});
	
			  var goTop = new ScrollMagic.Scene({ triggerElement: 'body', offset: winHieght})
				.setTween(goTopAnimate)
				.addTo(controller); */
		},

		modal: function(){

		},

		imageFade: function(){
			$('.image_fade').hover( function(){
				TweenMax.set($(this),{opacity:0.8});
				//$(this).filter(':not(:animated)').animate({opacity: 0.8}, 400);
			}, function() {
				//$(this).animate({opacity: 1}, 400);
				TweenMax.to($(this),3, {opacity:1});
			});
		},

		preLoader: function(){

		},

		lazyLoad: function() {
			/* var lazyLoadEl = $('[data-lazyload]');
			if( lazyLoadEl.length > 0 ) {
				lazyLoadEl.each( function(){
					var element = $(this),
						elementImg = element.attr( 'data-lazyload' );

					element.appear(function () {
						element.attr('src', elementImg);
					},{accX: 0, accY: 120},'easeInCubic');
				});
			} */
			/* if($body.has('device-lg')){

			} else if($body.has('device-sm')){

			} else if($body.has('device-md')){

			} else if($body.has('device-xs')){

			} else {
				
			} */
			var myLazyLoad = new LazyLoad({
				elements_selector: ".lazy",
				//load_delay: 300 //adjust according to use case
			});
		},

		landSection: function() {
			//if ("undefined" == typeof ScrollMagic) return console.log("landSection: ScrollMagic plugin is missing."), !0;
			  //var controller = new ScrollMagic.Controller();
			  /* $document.on('click', 'a[href^="#"]', function (event) {
				event.preventDefault();
			
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top
				}, 5000);
				
			}); */ 
			
			/* $window.bind( 'hashchange', function(e) {
				console.log('location');
			}); */
			$('a[href^="#"]').on('click', function(e) {
				e.preventDefault();
				var href = $.attr(this, 'href');
				TweenMax.to($window, 1.5, { scrollTo: href, ease:Power4.easeOut, onComplete: hashCallback });
				function hashCallback() {
					win.location.hash = href;
				}
				/* $body.animate({
					scroll: $(href).offset().top
				}, 5000, function () {
					win.location.hash = href;
				}); */

				//return false; //this event click and then html and js default function not run same things event.preventDefault();
			});
		},

		scrollBar: function( ){
			if (!$document.niceScroll) return console.log("scrollBar: niceScroll plugin is missing."), !0;
			$body.niceScroll();
		}

	};

	KASUN.section = {
		init: function(){
			KASUN.section.tool();
		},
		slider: function(){
			
		},
		about: function(){
			
		},
		skill: function(){
			
		},
		work: function(){
			
		},
		service: function(){

		},
		tool: function(){
			if (!$document.owlCarousel) return console.log("tool: owl Carousel plugin is missing."), !0;
			$tools.owlCarousel({
				margin:20,
				autoplay:true,
				loop:true,
				//lazyLoad:true,
				//autoWidth:true,
				items:5,
				nav: false,
				dots: false,
				responsive:{
					0:{
						items:1,
						nav:true
					},
					600:{
						items:3,
						nav:false
					},
					1000:{
						items:5,
						nav:false
					}
				}
			});
		}
	};

	KASUN.widget = {

		init: function(){
			KASUN.widget.signatureAnimate();
			KASUN.widget.copyrightIconAnimate();
		},
		signatureAnimate: function(){
			let tl = new TimelineMax({onComplete:startAgain});
			tl.staggerFromTo($signature, 1, {drawSVG:"100%"}, {drawSVG:"50% 50%"}, 0.1);
			function startAgain() {
				tl.play("startRepeat");
			}
		},
		socialBottonAnimate: function() {
			
		},
		copyrightIconAnimate: function() {
			let icon = $copyrightIcon.find('svg');
			let icons = ["fa-heart", "fa-thumbs-up", "fa-smile"];
			var select = 0;
			TweenMax.fromTo(icon, .75, {
				scale: 0.8,
			  },
			{
				scale: 1,
				 repeat: -1, /* Aka infinite amount of repeats */
				 yoyo: true /* Make it go back and forth */
			});
			/* setInterval(function(){
				$(icon).addClass(icons[select]);
				//$(icon).removeClass(icons[select]);
				//console.log(icons[select])
				
				select++;
				if (select >= icons.length) {
					select = 0;
				}
			}, 2000); */
			//icon.each(function(){

			//});
			
			/* setTimeout( function(){
                $(icon).addClass('fa-thumbs-up');
				$(icon).removeClass('fa-heart');
				console.log('run anima')
			}, 5000 ); */
		}

	};
    

    KASUN.documentOnResize = {

		init: function(){

			var t = setTimeout( function(){
                console.log('resize')
			}, 500 );

		}

	};

	KASUN.documentOnReady = {

		init: function(){
			KASUN.initialize.init();
			KASUN.section.init();
			KASUN.widget.init();
		},

		windowscroll: function(){

			

			/* $window.on( 'scroll', function(){
                console.log('scroll')

			}); */

			//window.addEventListener('scroll', onScrollSliderParallax, false);

			
		}

	};

	KASUN.documentOnLoad = {

		init: function(){
			console.log('documentOnLoad')
		}

    };
    
    

    $document.ready( KASUN.documentOnReady.init );
	$window.on('load', KASUN.documentOnLoad.init );
    $window.on( 'resize', KASUN.documentOnResize.init );
    
})(jQuery, window, document);
