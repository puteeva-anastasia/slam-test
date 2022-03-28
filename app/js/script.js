let wrapper = document.querySelector('#swiper-wrp');
let swiperSlider = document.querySelector('#swiper-slide');

const linkToImg = 'https://picsum.photos/300/300.webp?random=';

for (let i = 5; i <= 52; i++) {
	let copied = swiperSlider.cloneNode(true);
	copied.querySelector('.offer__img').setAttribute("data-background", linkToImg + i);
	wrapper.appendChild(copied);
}

let slickDots = document.querySelector('.swiper-pagination');

function hiddenDots() {
	slickDots.style.zIndex = -1;
}

function displayDots() {
	slickDots.style.zIndex = 'auto';
}

window.onload = function () {
	var search = document.querySelector("#form-search");
	if (search) {
		search.addEventListener('keyup', showButton, true);
		search.addEventListener('click', resetInput, true);
		search.addEventListener('click', showButton, true);
	}
}

function resetInput(e) {
	var input = this.querySelector('#search');
	input.value = input.defaultValue;
}

function showButton() {}

function addClass(o, c) {
	var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
	if (re.test(o.className)) return
	o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c) {
	var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
	o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}


$(document).ready(function () {
	var promoSwiper = new Swiper('#promo-slider', {
		speed: 400,
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		preloadImages: false,
		lazy: true,
		navigation: {
			nextEl: ".promo__slider-arrow_next",
			prevEl: ".promo__slider-arrow_prev",
		},
		autoplay: {
			delay: 5000,
		},
	});

	$("#promo-slider").mouseenter(function () {
		promoSwiper.autoplay.stop();
	});

	$("#promo-slider").mouseleave(function () {
		promoSwiper.autoplay.start();
	});

	$('#my-menu').mmenu({
		extensions: ['effect-menu-slide', 'pagedim-black', 'position-left'],
		navbar: {
			title: '<img src="img/logo.svg" alt="SLAM">'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});

	var mySwiper = new Swiper('#offer-swiper', {
		speed: 400,
		spaceBetween: 30,
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			1200: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1700: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: ".offer__arrow_next",
			prevEl: ".offer__arrow_prev",
		},
		preloadImages: false,
		lazy: true,
		watchSlidesProgress: true
	});

	var dots = $('.swiper-pagination span');
	dots.click(function () {
		var $this = $(this);
		dots.removeClass('before after');
		$this
			.prev().addClass('before')
			.prev().addClass('before');
		$this
			.next().addClass('after')
			.next().addClass('after');
		if (!$this.prev().length) {
			$this.next().next().next()
				.addClass('after').next()
				.addClass('after');
		}
		if (!$this.prev().prev().length) {
			$this.next().next().next()
				.addClass('after');
		}
		if (!$this.next().length) {
			$this.prev().prev().prev()
				.addClass('before').prev()
				.addClass('before');
		}
		if (!$this.next().next().length) {
			$this.prev().prev().prev()
				.addClass('before');
		}
	});
	dots.eq(0).click();




});