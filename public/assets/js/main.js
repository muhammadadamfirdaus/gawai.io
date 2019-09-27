var getParents = function (elem, selector) {
	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	// Set up a parent array
	var parents = [];

	// Push each parent element to the array
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if (selector) {
			if (elem.matches(selector)) {
				parents.push(elem);
			}
			continue;
		}
		parents.push(elem);
	}

	// Return our parent array
	return parents;

};

var getClosest = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;

};
var showMultiple = document.querySelectorAll('.show-multiple');

for(let i = 0; i < showMultiple.length; i++){
  showMultiple[i].addEventListener('click', function(){
    this.classList.toggle("active");
    var panel = this.closest('.wrapper').nextElementSibling;
    if(panel.classList.contains('active')){
      panel.classList.remove('active');
    } else {
      panel.classList.add('active');
    }
  });
};

var showOne = document.getElementsByClassName('show-one');
var showOneButton = document.getElementsByClassName('toggle');
for (i = 0; i < showOneButton.length; i++) {
  showOneButton[i].addEventListener('click', toggleItem, false);
}

function toggleItem(){
  var buttonParent = this.parentNode;
  for (i = 0; i < showOne.length; i++) {
    showOne[i].classList.remove('active');
  }
  if (buttonParent.classList.contains('show-one')) {
    buttonParent.classList.add('active');
  }
}

var option = document.querySelector('.option');
window.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  for (i = 0; i < showOne.length; i++) {
    // check if user click outside area
    if(!e.target.closest('.option') && e.target.closest('.toggle')){
      console.log('di dalam');
    } else {
      showOne[i].classList.remove('active');
      console.log('di luar');
    }
  }
});
var swiper = document.querySelector('.swiper-container');

if(swiper){
  var slideThumbnailHeadline = new Swiper('.small', {
    // spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // centerInsufficientSlides: true,
    // slideToClickedSlide: true,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 'auto'
      }
    }
  });
  var slideHeadline = new Swiper('.big', {
      spaceBetween: 10,
      autoplay: {
        delay: 5000
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: slideThumbnailHeadline
      },
      breakpoints: {
        768: {
          spaceBetween: 0
        }
      }
  });
}

if (navigator.share) {
  navigator.share({
      title: 'Web Fundamentals',
      text: 'Check out Web Fundamentals — it rocks!',
      url: 'https://developers.google.com/web',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}