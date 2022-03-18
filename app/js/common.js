window.onload = function () {
	var search = document.querySelector("#form-search");
	if (search) {
		search.addEventListener('keyup', showButton, true);
		search.addEventListener('click', resetInput, true);
		search.addEventListener('click', showButton, true);
	}
}

function resetInput(e){
	var input = this.querySelector('#search');
	input.value = input.defaultValue;
}

function showButton(){
}

function addClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}
 
function removeClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

$('#promo-slider').slick({
	infinity: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true,
	lazyLoad: 'ondemand',
	prevArrow: '<button type="button" class="promo__slider-arrow promo__slider-arrow_prev"><svg class="promo__slider-svg" width="56" height="44" viewBox="0 0 56 44" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 42.6021L1.00002 42.6021L1.00002 2.01469L39 2.01469L39 21.7743L15.2266 21.7743L22.4689 14.0389L21.7618 13.2837L13.3124 22.3084L21.7618 31.3331L22.4689 30.5779L15.2266 22.8424L39 22.8424L39 42.6021ZM40 22.8424L40 43.6702L1.90735e-05 43.6702L2.28085e-05 0.946597L40 0.9466L40 21.7743L55.999 21.7744L55.999 22.8424L40 22.8424Z"/></svg></button>',
	nextArrow: '<button type="button" class="promo__slider-arrow promo__slider-arrow_next"><svg class="promo__slider-svg" width="56" height="43" viewBox="0 0 56 43" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.999 1.15086L54.999 1.15086L54.999 41.7383L16.999 41.7383V21.9786H40.7724L33.5301 29.7141L34.2372 30.4693L42.6866 21.4446L34.2372 12.4198L33.5301 13.1751L40.7724 20.9105H16.999L16.999 1.15086ZM15.999 20.9105L15.999 0.0827637L55.999 0.0827637L55.999 42.8064L15.999 42.8064L15.999 21.9786L0 21.9786L0 20.9105L15.999 20.9105Z"/></svg></button>'
});