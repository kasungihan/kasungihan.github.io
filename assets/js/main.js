var $ = jQuery.noConflict();

var KASUN = KASUN || {};

(function($, win, doc){

    "use strict";

    KASUN.initialize = {

		init: function(){

			/* SEMICOLON.initialize.responsiveClasses();
			SEMICOLON.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			SEMICOLON.initialize.stickyElements();
			SEMICOLON.initialize.goToTop();
			SEMICOLON.initialize.fullScreen();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.lightbox();
			SEMICOLON.initialize.resizeVideos();
			SEMICOLON.initialize.imageFade();
			SEMICOLON.initialize.pageTransition();
			SEMICOLON.initialize.dataResponsiveClasses();
			SEMICOLON.initialize.dataResponsiveHeights(); */


		},

		responsiveClasses: function(){
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
			
		},

		modal: function(){

		},

		imageFade: function(){
			/* $('.image_fade').hover( function(){
				$(this).filter(':not(:animated)').animate({opacity: 0.8}, 400);
			}, function() {
				$(this).animate({opacity: 1}, 400);
			}); */
		},

		preLoader: function(){

		},

		lazyLoad: function() {
			var lazyLoadEl = $('[data-lazyload]');
			if( lazyLoadEl.length > 0 ) {
				lazyLoadEl.each( function(){
					var element = $(this),
						elementImg = element.attr( 'data-lazyload' );

					element.appear(function () {
						element.attr('src', elementImg);
					},{accX: 0, accY: 120},'easeInCubic');
				});
			}
		},

		topScrollOffset: function() {
			
		},

		defineColumns: function(  ){
			
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
            console.log('documentOnReady')
		},

		windowscroll: function(){

			

			$window.on( 'scroll', function(){
                console.log('scroll')

			});

			//window.addEventListener('scroll', onScrollSliderParallax, false);

			
		}

	};

	KASUN.documentOnLoad = {

		init: function(){
			console.log('document')
		}

    };
    
    var $window = $(win);
    var $document = $(doc);

    $document.ready( KASUN.documentOnReady.init );
	$window.on('load', KASUN.documentOnLoad.init );
    $window.on( 'resize', KASUN.documentOnResize.init );
    
})(jQuery, window, document);

console.log(KASUN);