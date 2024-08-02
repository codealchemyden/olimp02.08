(function ($) {
	"use strict";
	
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.mainmenu li a, .logo a,.slicknav_nav li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.screenshot-wrap').slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		centerPadding: '20%',
		centerMode: true,
		prevArrow: '',
		nextArrow: '',
		responsive: [{

		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			centerPadding: '33.3%'
		  }

		},{

		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			centerPadding: '0'
		  }

		}]
	});
	
	var testimonialSlider = $('.testimonial-wrap');
	testimonialSlider.owlCarousel({
		loop:true,
		dots: true,
		mouseDrag: false,
		autoplay: false,
		autoplayTimeout:4000,
		nav: false,
		items: 1,
	});
	testimonialSlider.on("translate.owl.carousel", function(){
		$(".single-testimonial-box img, .author-rating").removeClass("animated zoomIn").css("opacity", "0");
	});
	testimonialSlider.on("translated.owl.carousel", function(){
		$(".single-testimonial-box img, .author-rating").addClass("animated zoomIn").css("opacity", "1");
	});
	testimonialSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('.author-img').html();
		var nextRating = $(property.target).find(".owl-item").eq(current).next().find('.author-img').html();
		$('.thumb-prev .author-img').html(prevRating);
		$('.thumb-next .author-img').html(nextRating);
	});
	$('.thumb-next').on('click', function() {
		testimonialSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	$('.thumb-prev').on('click', function() {
		testimonialSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});
	
	var heroSlider = $('.hero-area-slider');
	heroSlider.owlCarousel({
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
		items: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		mouseDrag: true,
		touchDrag: true,
		responsive:{
			768:{
				mouseDrag: false,
				touchDrag: false,
			}
		}
	});
	
	/*----------------------------
	START - videos popup
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 3000
	});
	
	/*----------------------------
    START - Video
    ------------------------------ */
	if($.fn.YTPlayer){
		$(".player").YTPlayer();
	}
	
	/*----------------------------
    START - Switcher animation
    ------------------------------ */
	$('#toggle-switcher').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'right':'-232px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'right':'0'});
		}
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).on('load', function(){
		jQuery("#preloader").fadeOut(500);
	});
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */


}(jQuery));







let select = document.getElementById('select')
let radio=document.querySelectorAll('input[type="radio"][name="drone"]').forEach(radio => {
	radio.addEventListener('change', () => select.innerHTML = radio.value);
});

document.getElementById('btn-tarif').onclick = function(event) {
	window.location.href = '/forma/form.html';
};


/*форма */

document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault();
	
	let isValid = true;

	// Имя
	const name = document.getElementById('name').value;
	const nameError = document.getElementById('nameError');
	if (!name) {
			isValid = false;
			nameError.textContent = 'Имя обязательно для заполнения.';
	} else {
			nameError.textContent = '';
	}

	// Номер телефона
	const phone = document.getElementById('phone').value;
	const phoneError = document.getElementById('phoneError');
	const phonePattern = /^\d{10}$/; // Пример простого паттерна для телефона
	if (!phone) {
			isValid = false;
			phoneError.textContent = 'Номер телефона обязателен для заполнения.';
	} else if (!phonePattern.test(phone)) {
			isValid = false;
			phoneError.textContent = 'Введите корректный номер телефона (10 цифр).';
	} else {
			phoneError.textContent = '';
	}

	// Город
	const city = document.getElementById('city').value;
	const cityError = document.getElementById('cityError');
	if (!city) {
			isValid = false;
			cityError.textContent = 'Выберите город.';
	} else {
			cityError.textContent = '';
	}

	// Регион
	const region = document.getElementById('region').value;
	const regionError = document.getElementById('regionError');
	if (!region) {
			isValid = false;
			regionError.textContent = 'Выберите регион.';
	} else {
			regionError.textContent = '';
	}

	if (isValid) {
			window.location.href = '/thank/thank.html';
	}
});


/*
function updateButton() {
  if (button.value === "Включить ПК") {
    button.value = "Выключить пк";
    paragraph.textContent = "ПК включён!";
  } else {
    button.value = "Включить ПК";
    paragraph.textContent = "ПК выключен.";
  }
}
*/



/*

var nodes = document.getElementById('dewey');
for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].type == "radio")
    nodes[i].checked = true;
}*/



/*
const button = document.getElementById('btn1');
const paragraph = document.getElementById("dewey");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Включить ПК") {
    button.value = "Выключить пк";
    paragraph.textContent = "ПК включён!";
  } else {
    button.value = "Включить ПК";
    paragraph.textContent = "ПК выключен.";
  }
}*/
