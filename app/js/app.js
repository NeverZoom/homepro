import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import Swiper from 'swiper/bundle';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
gsap.registerPlugin(ScrollTrigger);


$(function(){$("[data-phone-pattern]").on("input blur focus",function(e){var c=e.target,h=$(c).data("phoneClear"),a=$(c).data("phonePattern");a=a?a:"+7(___) ___-__-__";var d=0,f=a.replace(/\D/g,""),b=$(c).val().replace(/\D/g,"");"false"!==h&&"blur"===e.type&&b.length<a.match(/([_\d])/g).length?$(c).val(""):(f.length>=b.length&&(b=f),$(c).val(a.replace(/./g,function(g){return/[_\d]/.test(g)&&d<b.length?b.charAt(d++):d>=b.length?"":g})))})});


document.addEventListener('DOMContentLoaded', () => {

	var images = $('img'),
	images_total_count = $('img').length,
	images_loaded_count = 0,
	perc_display = document.getElementById("loader-counter"),
	preloader = document.getElementById("preloader");

	if(preloader) {
		let perVal = 0;
		let increament = setInterval(() => {
			perVal++;
			perc_display.innerHTML = `${perVal}%`;
	
			for (var i = 0; i < images_total_count; i++) {
				var image_clone = new Image();
				image_clone.onload = images_loaded_count++;
				image_clone.onerror = images_loaded_count++;
				image_clone.src = images[i].src;
			}
	
	
			if (perVal == 100 && images_loaded_count >= images_total_count) {
				clearInterval(increament);
				$('body').addClass('loaded_hiding');
					window.setTimeout(function () {
						$('body').addClass('loaded');
						// $('body').addClass('loaded_hiding');
					}, 300);
			}
		}, 20);
	}

	if($('.slideImg').length != 0) {

		let tl = gsap.timeline({
			// yes, we can add it to an entire timeline!
			scrollTrigger: {
				trigger: ".slideImg",
				pin: true,   // pin the trigger element while active
				start: "center center", // when the top of the trigger hits the top of the viewport
				end: "+="+innerHeight, // end after scrolling 500px beyond the start
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				// markers: true,
			}
		});
		// add animations and labels to the timeline
		tl.addLabel("start")
			.fromTo('.slideImg__top', {clip:"rect(0 100vw 100vh 0)"}, {clip:"rect(0 100vw 0px 0)"});
	}


	if (document.documentElement.clientWidth < 834 ) {
		if ($('.news_slider').length) {
			const projectSwiper = new Swiper('.news_slider', {
				loop: false,
				// centeredSlides: true,
				slidesPerView: "auto",
				spaceBetween: 10,
				direction: 'horizontal',
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1.2,
						spaceBetween: 10,
					},
					// when window width is >= 640px
					425: {
						slidesPerView: 1.2,
						spaceBetween: 10,
					},
					550: {
						slidesPerView: 1.5,
						spaceBetween: 10,
					},
					630: {
						slidesPerView: 1.7,
						spaceBetween: 10,
					},
					750: {
						slidesPerView: 2.1,
						spaceBetween: 10,
					}
				},
			});
		}

		if ($('.reviews_slider').length) {
			const reviewsSwiper = new Swiper('.reviews_slider', {
				loop: false,
				// centeredSlides: true,
				slidesPerView: "auto",
				spaceBetween: 10,
				direction: 'horizontal',
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1.03,
						spaceBetween: 10,
					},
					// when window width is >= 640px
					425: {
						slidesPerView: 1.2,
						spaceBetween: 10,
					},
					550: {
						slidesPerView: 1.5,
						spaceBetween: 10,
					},
					630: {
						slidesPerView: 1.7,
						spaceBetween: 10,
					},
					750: {
						slidesPerView: 2.1,
						spaceBetween: 10,
					}
				},
			});
		}

	}

	$('.calc_wrapper .step .item input').on('change', function() {
		console.log($(this).parent().parent().parent().parent().children().children().children().children('svg'));
		$(this).parent().parent().parent().parent().children().children().children().children('svg').removeClass('active');
		$(this).siblings('svg').addClass('active');
	})

	$('.calc .calc_navigation .button.nav').on('click', function(){

		if($(this).hasClass('next')) {
			var nav = $(this).attr('data-nav');
		} else {
			var nav = $(this).attr('data-nav');
		}


		$('.calc .counter').empty();
		// console.log(nav);
		if (nav != 8 && nav != 1) {
			$('.calc .counter').text(nav-1+' / 6');
		} else if (nav == 8) {
			$('.calc .counter').text('И наш менеджер вышлет вам просчет стоимости');
		} else {
			$('.calc .counter').text('Ответьте на 7 вопросов');
		}



		$('.calc .calc_navigation .next').attr('data-nav', Number(nav)+1);
		$('.calc .calc_navigation .prev').attr('data-nav', Number(nav)-1);

		if (nav != 0) {
			$('.calc .calc_navigation .button.prev').removeClass('disabled');
		}

		if (nav == 1) {
			$('.calc .calc_navigation .button.prev').addClass('disabled');
		}

		if (nav == 8) {
			$('.calc .calc_navigation .button.next').addClass('disabled');

			// $('.calc .calc_navigation .button.next').addClass('d-none');

		} else {
			$('.calc .calc_navigation .button.next').removeClass('disabled');

			// $('.calc .calc_navigation .button.next').removeClass('d-none');

		}

		if(nav != 0) {

			$('.calc .title').empty()
			var quest = $('.calc *[data-step='+ nav +']').attr('data-question');
			$('.calc .title').text(quest)

			$('.calc .step').removeClass('active');
			$('.calc *[data-step='+ nav +']').addClass('active');	
		}

	});

	if($('.ready').length != 0) {
		$('.ready .tabs .tab').on('click', function() {
			var slide = $(this).data('content');
			$('.tab_nav.active').removeClass('active');

			$('.ready .tabs .tab.active').addClass('dis');
			$('.ready .tabs .tab.active').removeClass('active');

			$(this).removeClass('dis');
			$(this).addClass('active');
			$('*[data-item='+ slide +']').addClass('active');


		});
	}

	if (document.querySelector('.map')) {
		;(function() {
			if (typeof ymaps === 'undefined') {
				return;
			}
			ymaps.ready(function () {
				var ymap = document.querySelector('.map');
				var coordinates = ymap.getAttribute('data-coordinates');
				var address = ymap.getAttribute('data-address');
				var myMap = new ymaps.Map('ymap2', {
						center: coordinates.split(','),
						zoom: 17
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						balloonContent: address
					});
				myMap.geoObjects.add(myPlacemark);
				myMap.behaviors.disable('scrollZoom');
		});
		})();
	}

	if ($('.ready_hero_slider').length) {
		const readyHeroSwiper = new Swiper('.ready_hero_slider', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			direction: 'horizontal',
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
		});

		const lightbox = new PhotoSwipeLightbox({
			gallery: '#my-gallery',
			children: '.swiper-slide',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();

	}

	if ($('.plan_slider').length) {
		const planSwiper = new Swiper('.plan_slider', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			direction: 'horizontal',
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});

		const lightbox = new PhotoSwipeLightbox({
			gallery: '#my-gallery-pl1',
			children: '.swiper-slide',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	}

	if ($('.facade_slider').length) {
		const facadeSwiper = new Swiper('.facade_slider', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			direction: 'horizontal',
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});

		const lightbox = new PhotoSwipeLightbox({
			gallery: '#my-gallery-pl2',
			children: '.swiper-slide',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	}

	$('.single_ready_content .tabs .tab').on('click', function() {
		var slide = $(this).data('tabitem');
		$('.tabs_content.active').removeClass('active');
		$('.single_ready_content .tabs .tab.active').removeClass('active');
		$(this).addClass('active');
		$('*[data-tabcontent='+ slide +']').addClass('active');


	});

	$('.single_ready_content .select_tabs.tb .options div').on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		var slide = $(this).data('tabitem');
		var text = $(this).text();

		$('.single_ready_content .select_tabs.tb .name span').empty();
		$('.single_ready_content .select_tabs.tb .name span').append(text);

		$('.single_ready_content .tabs_content.active').removeClass('active');
		$('*[data-tabcontent='+ slide +']').addClass('active');

		

	});

	$('.single_ready_content .select_tabs').on('click', function() {
		$(this).children('.options').slideToggle();
		$(this).toggleClass('active');
	});

	$('.single_ready_content .select_tabs.sel .options div').on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		var slide = $(this).data('val');
		var text = $(this).text();

		$('.single_ready_content .select_tabs.sel .name span').empty();
		$('.single_ready_content .select_tabs.sel .name span').append(text);

		$('.single_ready_content .select_tab_content.active').removeClass('active');
		$('*[data-selectcontent='+ slide +']').addClass('active');

		

	});

	$('.accordeon .item .name').on('click', function() {
		$(this).parent().toggleClass('active');
		$(this).siblings('.content').slideToggle();
	});

	if ($('.single_ready_content .container-fluid .fixed-block').length != ''){
		(function(){
			var a = document.querySelector('.fixed-block'), b = null, K = null, Z = 0, P = 10, N = 10;  // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
			window.addEventListener('scroll', Ascroll, false);
			document.body.addEventListener('scroll', Ascroll, false);
			function Ascroll() {
				var Ra = a.getBoundingClientRect(),
						R1bottom = document.querySelector('.single_ready_content .main_content').getBoundingClientRect().bottom;
				if (Ra.bottom < R1bottom) {
					if (b == null) {
						var Sa = getComputedStyle(a, ''), s = '';
						for (var i = 0; i < Sa.length; i++) {
							if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
								s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
							}
						}
						b = document.createElement('div');
						b.className = "stop";
						b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
						a.insertBefore(b, a.firstChild);
						var l = a.childNodes.length;
						for (var i = 1; i < l; i++) {
							b.appendChild(a.childNodes[1]);
						}
						a.style.height = b.getBoundingClientRect().height + 'px';
						a.style.padding = '0';
						a.style.border = '0';
					}
					var Rb = b.getBoundingClientRect(),
							Rh = Ra.top + Rb.height,
							W = document.documentElement.clientHeight,
							R1 = Math.round(Rh - R1bottom),
							R2 = Math.round(Rh - W);
					if (Rb.height > W) {
						if (Ra.top < K) {  // скролл вниз
							if (R2 + N > R1) {  // не дойти до низа
								if (Rb.bottom - W + N <= 0) {  // подцепиться
									b.className = 'sticky';
									b.style.top = W - Rb.height - N + 'px';
									Z = N + Ra.top + Rb.height - W;
								} else {
									b.className = 'stop';
									b.style.top = - Z + 'px';
								}
							} else {
								b.className = 'stop';
								b.style.top = - R1 +'px';
								Z = R1;
							}
						} else {  // скролл вверх
							if (Ra.top - P < 0) {  // не дойти до верха
								if (Rb.top - P >= 0) {  // подцепиться
									b.className = 'sticky';
									b.style.top = P + 'px';
									Z = Ra.top - P;
								} else {
									b.className = 'stop';
									b.style.top = - Z + 'px';
								}
							} else {
								b.className = '';
								b.style.top = '';
								Z = 0;
							}
						}
						K = Ra.top;
					} else {
						if ((Ra.top - P) <= 0) {
							if ((Ra.top - P) <= R1) {
								b.className = 'stop';
								b.style.top = - R1 +'px';
							} else {
								b.className = 'sticky';
								b.style.top = P + 'px';
							}
						} else {
							b.className = '';
							b.style.top = '';
						}
					}
					window.addEventListener('resize', function() {
						a.children[0].style.width = getComputedStyle(a, '').width
					}, false);
				}
			}
			})()
	}

	if ($('.single_ready_content .container-fluid .fixed-block1').length != ''){
		(function(){
			var a = document.querySelector('.fixed-block1'), b = null, K = null, Z = 0, P = 10, N = 10;  // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
			window.addEventListener('scroll', Ascroll, false);
			document.body.addEventListener('scroll', Ascroll, false);
			function Ascroll() {
				var Ra = a.getBoundingClientRect(),
						R1bottom = document.querySelector('.single_ready_content .main_content').getBoundingClientRect().bottom;
				if (Ra.bottom < R1bottom) {
					if (b == null) {
						var Sa = getComputedStyle(a, ''), s = '';
						for (var i = 0; i < Sa.length; i++) {
							if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
								s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
							}
						}
						b = document.createElement('div');
						b.className = "stop";
						b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
						a.insertBefore(b, a.firstChild);
						var l = a.childNodes.length;
						for (var i = 1; i < l; i++) {
							b.appendChild(a.childNodes[1]);
						}
						a.style.height = b.getBoundingClientRect().height + 'px';
						a.style.padding = '0';
						a.style.border = '0';
					}
					var Rb = b.getBoundingClientRect(),
							Rh = Ra.top + Rb.height,
							W = document.documentElement.clientHeight,
							R1 = Math.round(Rh - R1bottom),
							R2 = Math.round(Rh - W);
					if (Rb.height > W) {
						if (Ra.top < K) {  // скролл вниз
							if (R2 + N > R1) {  // не дойти до низа
								if (Rb.bottom - W + N <= 0) {  // подцепиться
									b.className = 'sticky';
									b.style.top = W - Rb.height - N + 'px';
									Z = N + Ra.top + Rb.height - W;
								} else {
									b.className = 'stop';
									b.style.top = - Z + 'px';
								}
							} else {
								b.className = 'stop';
								b.style.top = - R1 +'px';
								Z = R1;
							}
						} else {  // скролл вверх
							if (Ra.top - P < 0) {  // не дойти до верха
								if (Rb.top - P >= 0) {  // подцепиться
									b.className = 'sticky';
									b.style.top = P + 'px';
									Z = Ra.top - P;
								} else {
									b.className = 'stop';
									b.style.top = - Z + 'px';
								}
							} else {
								b.className = '';
								b.style.top = '';
								Z = 0;
							}
						}
						K = Ra.top;
					} else {
						if ((Ra.top - P) <= 0) {
							if ((Ra.top - P) <= R1) {
								b.className = 'stop';
								b.style.top = - R1 +'px';
							} else {
								b.className = 'sticky';
								b.style.top = P + 'px';
							}
						} else {
							b.className = '';
							b.style.top = '';
						}
					}
					window.addEventListener('resize', function() {
						a.children[0].style.width = getComputedStyle(a, '').width
					}, false);
				}
			}
			})()
	}

	$('.slider_wrapper input').on('input', function() {
		var val = $(this).val();
		const num = val.replace(/\s/g, '');
		val = (parseInt(num)).toLocaleString('ru-Ru');
		if ($(this).parent().siblings('.current').children('input').hasClass('years') == false) {
			$(this).parent().siblings('.current').children('input').val(val+' ₽');
		} else {
			$(this).parent().siblings('.current').children('input').val(val+' ЛЕТ');
		}
	});

	$('.ipo_calc .current input').on('change', function() {
		var val = $(this).val();
		$(this).parent().siblings('.slider_wrapper').children('input').val(val);

		if ($(this).hasClass('years') == false) {
			val = val.split(' ₽').join('');
			$(this).val(val+' ₽');
		} else {
			val = val.split(' ЛЕТ').join('');
			$(this).val(val+' ЛЕТ');
		}


	});

	if ($('.single_project_gallery').length) {
		const lightbox = new PhotoSwipeLightbox({
			gallery: '.single_project_gallery',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	}

	if ($('.years_slider').length) {
		const yearsSwiper = new Swiper('.years_slider', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			direction: 'horizontal',
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					var cur = 0;
					if (index == 0) {
						cur = 2012;
					} else if (index == 1) {
						cur = 2014;
					} else if (index == 2) {
						cur = 2015;
					} else if (index == 3) {
						cur = 2018;
					} else if (index == 4) {
						cur = 2019;
					} else if (index == 5) {
						cur = 2021;
					} else if (index == 6) {
						cur = 2023;
					} else if (index == 7) {
						cur = 2024;
					}
					return '<span class="' + className + '">' + cur + '</span>';
				}
			},
			
		});
	}

	$('.top-line .main_line nav .sub').on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	});

	$('.popup1').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.popup2').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.popup3').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.burger').on('click', function() {
		$('.mobile-menu').addClass('active');
	});

	$('.mobile-menu .close').on('click', function() {
		$('.mobile-menu').removeClass('active');
	});

	$('.mobile-menu ul .sub').on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).siblings().children('.sub-menu').slideUp();
		$(this).toggleClass('active');
		$(this).children('.sub-menu').slideToggle();
	});

	$('.ipo_calc form button').on('click', function() {
		event.preventDefault();

		var price = $(this).parent().parent().find('input.price').val();
		var first = $(this).parent().parent().find('input.first').val();
		var time = $(this).parent().parent().find('input.time').val();

		$.magnificPopup.open({
      items: {
          src: '#popup3' 
      },
      type: 'inline'
    });

		$('#popup3 input#ipoprice').val(price);
		$('#popup3 input#ipofirst').val(first);
		$('#popup3 input#ipotime').val(time);


	});


})
