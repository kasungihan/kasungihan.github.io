(function($){

	"use strict";
  
  //console.log($);
  var kasun = kasun || {};
	  
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
		  $("html").addClass("no-mobile");
	  }
	  else {
		  $("html").addClass("mobile");
	  }
  
  /* --------------------------------------------------
  Detect Touch
  ---------------------------------------------------- */
	  if (!("ontouchstart" in document.documentElement)) {
		  $("html").addClass("no-touch");
	  }  
  
  
  
	if ("undefined" == typeof jRespond) return console.log("responsiveClasses: jRespond plugin is missing."), !0;
	  var t = jRespond([{
		  label: "smallest",
		  enter: 0,
		  exit: 479
	  }, {
		  label: "handheld",
		  enter: 480,
		  exit: 767
	  }, {
		  label: "tablet",
		  enter: 768,
		  exit: 991
	  }, {
		  label: "laptop",
		  enter: 992,
		  exit: 1199
	  }, {
		  label: "desktop",
		  enter: 1200,
		  exit: 1e4
	  }]);
	  t.addFunc([{
		  breakpoint: "desktop",
		  enter: function() {
			  $("body").addClass("device-lg")
		  },
		  exit: function() {
			  $("body").removeClass("device-lg")
		  }
	  }, {
		  breakpoint: "laptop",
		  enter: function() {
			  $("body").addClass("device-md")
		  },
		  exit: function() {
			  $("body").removeClass("device-md")
		  }
	  }, {
		  breakpoint: "tablet",
		  enter: function() {
			  $("body").addClass("device-sm")
		  },
		  exit: function() {
			  $("body").removeClass("device-sm")
		  }
	  }, {
		  breakpoint: "handheld",
		  enter: function() {
			  $("body").addClass("device-xs")
		  },
		  exit: function() {
			  $("body").removeClass("device-xs")
		  }
	  }, {
		  breakpoint: "smallest",
		  enter: function() {
			  $("body").addClass("device-xxs")
		  },
		  exit: function() {
			  $("body").removeClass("device-xxs")
		  }
	  }]);
  
  /* --------------------------------------------------
  Logo css style remove on moblie
  ---------------------------------------------------- */
  /*if ($('body').is('.device-xxs, .device-xs')) {
	$('.navbar-brand .logo').removeClass('logo');
  } else {
	$('.navbar-brand .logo').addClass('logo');
  }*/
  
  /* --------------------------------------------------
  Magic Scroll Animatio start 
  ---------------------------------------------------- */
  if ("undefined" == typeof ScrollMagic) return console.log("responsiveClasses: ScrollMagic plugin is missing."), !0;
  var controller = new ScrollMagic.Controller(); 
  
  /* --------------------------------------------------
  start up page loading animation
  ---------------------------------------------------- */ 
  kasun.startUpAnimation = function () {
	if (!$('body').is('.device-xxs, .device-xs')) {
  
	  var mySplitText = new SplitText($("#subtext"), {type:"chars"}),
		$nav = $('.custom-nav'),
		$logo = $('.logo'),
		$navbar = $('.navbar-custom'),
		$navlink = $('.nav-link'),
		$box1 = $('.parallax-box');
  
		var startUp = new TimelineMax();
		startUp.from($nav, 1.8, {autoAlpha: 0, y: '-=130', ease:Bounce.easeOut})
		.from($logo, 0.5, {autoAlpha: 0, x: '-=80', ease:Bounce.easeOut})
		.staggerFrom(mySplitText.chars, 0.5, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.01)
		.staggerFrom($navlink, 0.5, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.1)
		.staggerFrom($box1, 0.5, {autoAlpha: 0, y: '+=100', ease:Power3.easeInOut}, 0.2);
  
	}
  
  }
  
  /* --------------------------------------------------
  Button Main Section Animation
  ---------------------------------------------------- */
  kasun.buttonAnimation = function () {
	if($('html').hasClass('no-touch')) {
		  
		$('.button-rm').each(function(){
		  var button =  $(this),
			  background = button.find('.backgroundHover'),
			  firstWord = button.find('span'),
			  secondWord = button.find('i');
  
		  var tlBtn = new TimelineLite({paused: true});
		  tlBtn.staggerTo(firstWord, 1, {"text-decoration": "none",color: "#ffffff", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");//"#ed1c24"
		  tlBtn.staggerTo(secondWord, 1, {color: "#ffffff", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
		  tlBtn.to(button, 0.3, {"border-color": "rgb(255,255,255,0)", ease: Quad.easeOut}, "#start");
		  tlBtn.from(background, 0.25, {scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut}, "#start");
  
		  button.bind({
			mouseenter: function(e) {
			  tlBtn.play();
			},
			mouseleave: function(e) {
			  tlBtn.reverse();
			}
		  });
  
		});
  
	  } else {
		$('.backgroundHover').css('background', '#ffffff');
	  }
  
  }
  
  /* --------------------------------------------------
  Section Animation
  ---------------------------------------------------- */
  kasun.sectionAnimation = function () {
  
		$('.fade-in').each(function(){
		  var ref = $(this),
			manage = ref.parent().parent().parent().parent().find(".manage"),
			tlBorder = ref.next(".title-border");
  
		  var titleTl = new TimelineMax();
		  var tween = titleTl.from(ref, 0.5, {autoAlpha: 0, scale: 0.1, y: '+=30', ease: Linear.easeNone})
			.to(tlBorder, 0.4, {autoAlpha: 1, scaleX:80, transformOrigin:"50% 50%", ease: Power1.easeOut})
			.staggerFrom(manage, 0.6, {y:50, opacity:0, ease:Elastic.easeInOut}, 0.3);
  
		  var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.9
		  })
		  .setTween(tween)
		  /*.addIndicators({
			  colorStart:'blue',
			  colorEnd: 'pink'
			})*/
		  .addTo(controller);
		});
  
  } 
  
  /* --------------------------------------------------
  Footer Animation
  ---------------------------------------------------- */
  kasun.footerAnimation = function () {
	  if(!$('body').hasClass('device-xxs')) { 
  
		var footerTL = new TimelineMax();
		var footerAnimate = footerTL.from($('.footer-logo'), 0.4, {autoAlpha: 0, scale: 0.5, y: '+=30', ease: Linear.easeNone})
			.staggerFrom(".f-link", 0.5, {scale:0.5, opacity:0, ease:Elastic.easeOut, force3D:true}, 0.1)
			.staggerFrom(".footer-social ul li", 0.6, { x: 160, opacity:0, ease:Back.easeOut}, 0.1); 
  
		var footer = new ScrollMagic.Scene({
			triggerElement: 'footer',
			triggerHook: 1
		  })
		  .setTween(footerAnimate)
		  /*.addIndicators({
			  colorStart:'blue',
			  colorEnd: 'pink'
			})*/
		  .addTo(controller);
  
	  }
  
	  //Hover Effect
	  if($('html').hasClass('no-touch')) { 
  
		$( ".social-circles li" ).bind({
		  mouseenter: function(e) {
			var childern = this;
			  TweenMax.to(childern, .4, {
				scale: '1.5',
				ease: Quad.easeOut
			  });
		  },
		  mouseleave: function(e) {
			  var childern = this;
			  TweenMax.to(childern, 3, {
				scale: '1.',
				ease: Elastic.easeOut
			  });
		  }
		});
  
	  }  
  
  }
  
  /* --------------------------------------------------
  Go to Top Button Animation
  ---------------------------------------------------- */ 
  kasun.gotoTopAnimation = function () {
  
			$("a[href='#top']").on('click', function() {
			  TweenMax.to($(window), 2, { scrollTo:"body", ease:Power3.easeOut});
			  return false;
			});
  
			var winHieght = $(window).height();
			var goBackTop = new TimelineMax();
			var goTopAnimate = goBackTop.staggerFrom($('.help-button'), 0.8, {x: 50, ease:Power4.easeInOut})
				.from($('.goto-top'), 0.8, {y: 60, ease: Power3.easeInOut});
  
			var goTop = new ScrollMagic.Scene({ triggerElement: 'body', offset: winHieght})
			  .setTween(goTopAnimate)
			  .addTo(controller);
  
  }
  
  /* --------------------------------------------------
  Contact form animation
  ---------------------------------------------------- */ 
  kasun.contactFormAnimation = function () {
  
	  //Help Button Animation........
	  setTimeout(function(){ 
		  TweenMax.to(".help-button", 1, { y: -10, autoAlpha:1, ease: Power3.easeOut}); 
	  }, 9000);
  
	  var contactForm = new TimelineLite({paused:true});
		  contactForm.to($('.help-button'), 0.5, {y: 80, ease:Power3.easeIn})
		  .to($('.contact-form'), 0.5, {autoAlpha:1, y: -510, ease:Power3.easeOut});
	  
	  $('.help-click').on('click', function() {
		  contactForm.play();
		});
  
	  $('.contact-form #cancel').on('click',function() {
		  contactForm.reverse();
		});
  
  }
  
  /* --------------------------------------------------
  Link Click After Moving Animation.
  ---------------------------------------------------- */ 
  kasun.linkAnimation = function () {
  
	if (!$('body').is('.device-xxs, .device-xs')) {
	  $(".nav-link").click(function(){
		TweenMax.staggerTo($('.nav-link'), 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
	  });
	}
  
  }
  
  /* --------------------------------------------------
  Moblie Menu Animation
  ---------------------------------------------------- */ 
  kasun.mobileNav = function () {
	
	if ($('body').is('.device-xxs, .device-xs')) {
		/*var mobileNav = new TimelineLite({paused: true});
			mobileNav.from(".navbar-collapse", 0.4, {scale:0, ease:Power1.easeInOut}, "in1")
			.from(".navbar-collapse", 0.3, {rotation:90, ease:Power1.easeInOut}, "in1")
			.staggerFrom("#fromto", 1, {y:-50, opacity:0, ease:Elastic.easeOut}, 0.06)
			.staggerFrom($('.nav-link'), 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);*/
  
		$(".menu").on('click', function(){
		  $("#nav").toggleClass("open");
		  //mobileNav.play();
		});
		/*$("#menu").bind({
			click: function(e) {
			$("#nav").toggleClass("open");
			  mobileNav.play();
			},
			click: function(e) {
			$("#nav").toggleClass("open");
			  
			}
		  });*/
	}
  
  }
  
  /* --------------------------------------------------
  scroll bar
  ---------------------------------------------------- */ 
  kasun.scrollBar = function () {
	if (!$(document).niceScroll) return console.log("responsiveClasses: niceScroll plugin is missing."), !0;
	$("html").niceScroll({scrollspeed: 100, mousescrollstep: 18});
  }
  
  /* --------------------------------------------------
  client logo slider
  ---------------------------------------------------- */ 
  kasun.clientLogo = function () {
	if (!$(document).owlCarousel) return console.log("responsiveClasses: owlCarousel plugin is missing."), !0;
	$("#client-logo").owlCarousel({
	  loop:true,
	  margin:10,
	  dots: false,
	  nav: false,
	  autoplay: true,
	  autoplayTimeout : 1000,
	  responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots: true
			},
			600:{
				items:3,
				nav:true,
				navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
			},
			1000:{
				items:5,
				nav:true,
				navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
			}
		}
	});
	$("#team-slice").owlCarousel({
	  loop:false,
	  margin:10,
	  dots: false,
	  nav: false,
	  responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
			},
			600:{
				items:2,
				nav:true,
				navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
			},
			1000:{
				items:3,
				nav:false
			}
		}
	});
  
	$("#testimonials").owlCarousel({
	  items:1,
	  loop:true,
	  margin:10,
	  dots: false,
	  nav: false
	});
  
  }
  
  /* --------------------------------------------------
  Team Effect
  ---------------------------------------------------- */ 
  kasun.teamEffect = function () {
  
	$('.our-team').click(function() {
	  var varImg = $(this).find('img');
	  var varContent = $(this).find('.team-content');
	  if(varImg.attr('style')) {
		varImg.removeAttr("style");
		varContent.removeAttr("style");
	  } else {
		varImg.css('right','60%');
		varContent.css('right','0');
	  }
	  
	});
  
	var rajitha = $(".our-team.livi > img:nth-of-type(2), .our-team.viraj > img:nth-of-type(2)"),
		livi = $(".our-team.viraj > img:nth-of-type(2), .our-team.rajitha > img:nth-of-type(2)"),
		viraj = $(".our-team.livi > img:nth-of-type(3), .our-team.rajitha > img:nth-of-type(2)");
  
	  $(".rajitha").hover(function() {
		rajitha.css({ opacity: 1, zIndex: 5});
	  }, function() {
		rajitha.css({ opacity: 0, zIndex: -1});
	  });
	  $(".livi").hover(function() {
		livi.css({ opacity: 1, zIndex: 5});
	  }, function() {
		livi.css({ opacity: 0, zIndex: -1});
	  });
	  $(".viraj").hover(function() {
		viraj.css({ opacity: 1, zIndex: 5});
	  }, function() {
		viraj.css({ opacity: 0, zIndex: -1});
	  });
  
  }
  
  
  /* --------------------------------------------------
  Logo hover animation
  ---------------------------------------------------- */ 
  kasun.logoAnimate = function () {
	if ("undefined" == typeof Vivus) return console.log("responsiveClasses: Vivus plugin is missing."), !0;
	var logo = new Vivus('Layer_1', {type: 'oneByOne', duration: 100, start: 'manual', file: 'assets/images/logo.svg'},
	  function () {
		if (window.console) {
		  console.log('Animation finished. [log triggered from callback]');
		}
	});
	$('#logoHover').bind({
	  mouseenter: function(e) {
		logo.reset().play();
	  },
	  mouseleave: function(e) {
		logo.reset().stop();
	  }
	});
  
  }
  
  /* --------------------------------------------------
  contact form script
  ---------------------------------------------------- */ 
  kasun.contactForm = function () {
  
	$('#characterLeft').text('200 characters left');
	$('#message').keydown(function () {
		var max = 200;
		var len = $(this).val().length;
		if (len >= max) {
			$('#characterLeft').text('You have reached the limit');
			$('#characterLeft').addClass('red');
			$('#btnSubmit').addClass('disabled');            
		} 
		else {
			var ch = max - len;
			$('#characterLeft').text(ch + ' characters left');
			$('#btnSubmit').removeClass('disabled');
			$('#characterLeft').removeClass('red');            
		}
	});
	if (!$().ajaxForm) return console.log("responsiveClasses: ajaxForm plugin is missing."), !0;
	 $('form').ajaxForm({
		target: '#contact-form-result',
		dataType: 'json',
		resetForm: true,
		success: function( data ) {
		  /*if( data.alert != 'error' ){
			window.location.replace();
			return true;
		  }*/
  
		  if( data.alert == 'error' ) {
			var alertType = 'alert-danger';
		  } else {
			var alertType = 'alert-success';
		  }
  
		  $('#contact-form-result').removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + alertType ).html( data.message ).slideDown( 400 );
		  
		  if( data.alert != 'error' ) { $(this).clearForm(); }
		}
	  });
  }
  
  /* --------------------------------------------------
  owened and managed by radicalz slice effect
  ---------------------------------------------------- */ 
  kasun.drowTitle = function () {
  
	  if ("undefined" == typeof imagesLoaded) return console.log("responsiveClasses: TiltFx & imagesLoaded plugin is missing."), !0;
		
		  var tiltSettings = [
			{},
			{
			  movement: {
				imgWrapper : {
				  translation : {x: 10, y: 10, z: 30},
				  rotation : {x: 0, y: -10, z: 0},
				  reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
				},
				lines : {
				  translation : {x: 10, y: 10, z: [0,70]},
				  rotation : {x: 0, y: 0, z: -2},
				  reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
				},
				caption : {
				  rotation : {x: 0, y: 0, z: 2},
				  reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
				},
				overlay : {
				  translation : {x: 10, y: -10, z: 0},
				  rotation : {x: 0, y: 0, z: 2},
				  reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
				},
				shine : {
				  translation : {x: 100, y: 100, z: 0},
				  reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
				}
			  }
			}
		  ];
  
		  function init() {
			var idx = 0;
			[].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {
			  idx = pos%3 === 0 ? idx+1 : idx;
			  new TiltFx(el, tiltSettings[idx]);
			});
		  }
  
		  // Preload all images.
		  $(document).imagesLoaded(document.querySelector('main'), function() {
			document.body.classList.remove('loading');
			if($('html').hasClass('no-touch')) {
			  init();
			}  
		  });
  
		  // REMOVE THIS!
		  // For Demo purposes only. Prevent the click event.
		  /*[].slice.call(document.querySelectorAll('a[href="#"]')).forEach(function(el) {
			el.addEventListener('click', function(ev) { ev.preventDefault(); });
		  });*/
  
		 
  }
  
  /* --------------------------------------------------
  Initiatives by radicalz slice effect
  ---------------------------------------------------- */ 
  kasun.motionTitle = function () {
		  if ("undefined" == typeof VegaFx) return console.log("responsiveClasses: Animate plugin is missing."), !0;
		  function init() {
			[].slice.call(document.querySelectorAll('.grid--effect-vega > .grid__item')).forEach(function(stackEl) {
			  new VegaFx(stackEl);
			});
		  }
		  $(document).imagesLoaded(document.querySelector('.grid'), function() {
			document.body.classList.remove('loading');
			if($('html').hasClass('no-touch')) {
			  init();
			}
		  });
  }
  
  /* --------------------------------------------------
  height main slice
  ---------------------------------------------------- */   
  kasun.js_height_100 = function () {
		if (!$('body').is('.device-xxs, .device-xs')) {
  
		  var windowHeight = $(window).height() - $('.custom-nav').height();
		  var windowWidth = $(window).width();
		  var divided = windowWidth / 4;
		  // windowHeight = Math.floor(windowHeight*0.75);
		  $(".video-js").attr("height",windowHeight);
		  $(".video-js").attr("width",divided);
		}
  }
  
  /* --------------------------------------------------
  height main slice
  ---------------------------------------------------- */   
  kasun.clampJs = function () {
	  if (!window.$clamp) return console.log("responsiveClasses: clamp js plugin is missing."), !0;
  
	  $( ".team-content .description" ).each(function( i, e ) {
		$clamp(e, {clamp: 7});
	  });
	  $( ".text-box .description" ).each(function( i, e ) {
		$clamp(e, {clamp: 4});
	  });
	  
  }
  /* --------------------------------------------------
  image Hover effect
  ---------------------------------------------------- */  
  kasun.imgHover = function () {
  
	  if($('html').hasClass('no-touch')) {
  
		$( ".article-img img" ).each(function( i, e ) {
		  
			$(this).bind({
			  mouseover: function() {
				
				TweenMax.to(this, .4, {
					scale: '1.1',
					ease: Quad.easeOut
				});
  
			  },
			  mouseout: function() {
  
				TweenMax.to(this, 3, {
					scale: '1.',
					ease: Elastic.easeOut
				});
  
			  }
			});
  
		});
	  
	  }
	  
  }
  
  /* --------------------------------------------------
  Smooth Scroll
  ----------------------------------------------------*/
  kasun.smoothScroll = function () {
	if (!$(document).easeScroll) return console.log("responsiveClasses: easeScroll js plugin is missing."), !0;
	$("html").easeScroll();
  }
  
  /* --------------------------------------------------
  Fixed Nav bar
  ----------------------------------------------------*/
  kasun.fixedNavbar = function () {
	if (!$('body').is('.device-xxs, .device-xs, .device-sm')) {
  
	  var fixed_navbar = new ScrollMagic.Scene({
			triggerElement: 'body',
			triggerHook: 0
		  })
		  .setPin('.navbar')
		  .addTo(controller);
	}
  }
  
  /* --------------------------------------------------
  sticky Header (sevice)
  ----------------------------------------------------*/
  kasun.stickyHeader = function () {
	if (!$('body').is('.device-xxs, .device-xs, .device-sm')) {
	  if($('#fixed-top').is('.main-content') && $('#main-container').is('.wrapper')) {
  
		var winHieght = ($(window).height() / 3);
		var winWidth = ($(window).width() / 4)
		$(".overlay-content").css({"height": winHieght, "width": winWidth});
  
	  var stickytl = new TimelineMax();
	  /*stickytl.to(".navbar", 0.1, {padding:'0.2rem 1rem', ease:Power3.eseInOut});, borderRadius: '0 0 15px 15px'*/
	  stickytl.to(".navbar-brand", 0.6, { scale: 0.7});
	  /*stickytl.to(".overlay-content", 0.5, { background: '#ccc', ease:Back.easeOut}, 1);*/
	  stickytl.staggerTo(".overlay-content img, .overlay-content h2", 0.3, { scale: 0.8, lineHeight: 0, paddingBottom: 14, ease:Power3.eseInOut }, 0.1);
	  stickytl.to(".bt-hide", 0.1, {display:'none', ease:Power3.eseInOut}, 0.1);
	  /*stickytl.to("", 0.5, { scale: 0.8 }, 2);*/
  
	  //var bgcolorEff = new TimelineMax();
	  var bgcolorEff = TweenMax.to(".overlay-content", 0, {height: 80, ease: Linear.easeIn});
	  var bgcolorEff = TweenMax.staggerTo(".overlay-content", 0, {background: 'rgb(41, 43, 45)', ease: Power3.easeNone});
	  /*bgcolorEff.staggerTo(".overlay-content.photo", 0.1, {height: 80, background: '#ec008c', ease:Bounce.easeIn});
	  bgcolorEff.staggerTo(".overlay-content.anim", 0.1, {height: 80, background: '#66bc46', ease:Bounce.easeIn});
	  bgcolorEff.staggerTo(".overlay-content.web", 0.1, {height: 80, background: '#00a9dd', ease:Bounce.easeIn});*/
  
	  var te_class = $('.main-content');
	  var th_num = 0;
	  var stickyOffset = $('.overlay-content').offset().top - 65;
  
  
	  new ScrollMagic.Scene({ triggerElement: 'body', triggerHook: th_num, offset: stickyOffset })
		  .setPin('.overlay-content.video')
		  /*.setClassToggle('.overlay-content', 'fixed')*/
		  .setTween(stickytl)
		  .addTo(controller);
  
  
	  new ScrollMagic.Scene({ triggerElement: 'body', triggerHook: th_num, offset: stickyOffset })
		  .setPin('.overlay-content.photo')
		  .addTo(controller);
  
	  new ScrollMagic.Scene({ triggerElement: 'body', triggerHook: th_num, offset: stickyOffset })
		  .setPin('.overlay-content.anim')
		  .addTo(controller);
  
	  new ScrollMagic.Scene({ triggerElement: 'body', triggerHook: th_num, offset: stickyOffset })
		  .setPin('.overlay-content.web')
		  .addTo(controller);
  
	  var wapOffset = ($('.main-content').height() - 120);
	  
	  new ScrollMagic.Scene({ triggerElement: '.main-content', triggerHook: 0.11, offset: wapOffset})
		  .setTween(bgcolorEff)
		  /*.addIndicators()*/
		  .addTo(controller);
  
	  } else {
		console.log('class is not defind');
	  }
	  
	}
  }
  
  /* --------------------------------------------------
  Initialization
  ---------------------------------------------------- */   
  
	  $(window).load(function () {
		  console.log('on load');
  
		  kasun.gotoTopAnimation();
		  kasun.contactFormAnimation();
		  kasun.contactForm();
	  });
	  
	  $(document).ready(function(){
		  //kasun.startUpAnimation();
		  kasun.buttonAnimation();
		  //kasun.mobileNav();
		  kasun.linkAnimation();
		  kasun.sectionAnimation();
		  kasun.imgHover();
		  kasun.smoothScroll();
		  //kasun.stickyHeader();
		  kasun.fixedNavbar();
		  //kasun.logoAnimate();
		  kasun.motionTitle();
		  kasun.drowTitle();
		  kasun.clientLogo();
		  kasun.footerAnimation();
		  kasun.js_height_100();
		  kasun.clampJs();
	  });
  
	  $(window).resize(function(){
		console.log('on resize');
		kasun.js_height_100();
	  });
  
  
  })(jQuery);