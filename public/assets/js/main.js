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
const createTagDiv = document.createElement('div');
const createTagA = document.createElement('a');
const createTagSpan = document.createElement('span');

// create extra button for menu
const menu = document.querySelector('.menu');
createTagDiv.className = 'menu-mobile';
const extraButton = menu.before(createTagDiv); // place before .menu
const menuButton =
// extraButton.appendChild(createTagA);
createTagDiv.appendChild(createTagSpan);

// menu mobile button
const menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', () => {
  // check if menu has class active before then show menu
  if(menuMobile.classList.contains('close')){
    menuMobile.classList.remove('close');
    menu.classList.remove('active');
  } else {
    menuMobile.classList.add('close');
    menu.classList.add('active');
  }

  // window.addEventListener('click', (e) => {
  //   e.stopImmediatePropagation();
  //   // check if user click outside menu area
  //   if((menu != e.target) && (menuMobile != e.target)){
  //     menuMobile.classList.remove('close');
  //     menu.classList.remove('active');
  //     console.log('hi');
  //   }
  // });
});
// end menu mobile

// responsive
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log('screen width: ', screenWidth);

// submenu
const submenu = document.querySelectorAll('.menu li.sub');
const submenuContainer = document.querySelector('.sub-menu-container');
const submenuChild = document.querySelectorAll('.sub-menu-container li');
for(let i = 0; i < submenu.length; i++){
  submenu[i].addEventListener('mouseover', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    if(submenu[i].classList.contains('active')){
      submenu[i].classList.remove('active');
    } else {
      submenu[i].classList.add('active');
    }
  });

  submenu[i].addEventListener('mouseout', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    if(submenu[i].classList.contains('active')){
      submenu[i].classList.remove('active');
    } else {
      submenu[i].classList.remove('active');
    }

    // for(let j = 0; j < submenuChild.length; j++){
    //   console.log(submenuChild[j]);
    //   submenuChild[j].addEventListener('click', function(e){
    //     e.preventDefault();
    //     e.stopImmediatePropagation();
    //     submenuChild[j].classList.remove('active');
    //     if(submenuChild[j].classList.contains('active')){
    //       submenuChild[j].classList.remove('active');
    //     } else {
    //       submenuChild[j].classList.add('active');
    //     }
    //   });
    // }
  
  });

}

// store tabs variable
// var myTabs = document.querySelectorAll(".tabs > li");

// function myTabClicks(tabClickEvent) {
//   for (var i = 0; i < myTabs.length; i++) {
//     myTabs[i].classList.remove("active");
//   }

//   var clickedTab = tabClickEvent.currentTarget; 

//   clickedTab.classList.add("active");
//   tabClickEvent.preventDefault();

//   var myContentPanes = document.querySelectorAll(".tab-content");

//   for (i = 0; i < myContentPanes.length; i++) {
//     myContentPanes[i].classList.remove("active");
//   }

//   var anchorReference = tabClickEvent.target;
//   var activePaneId = anchorReference.getAttribute("href");
//   var activePane = document.querySelector(activePaneId);

//   activePane.classList.add("active");
// }

// for (i = 0; i < myTabs.length; i++) {
//   myTabs[i].addEventListener("click", myTabClicks)
// }

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('mouseover', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();



// for(let i = 0; i < submenu.length; i++){
//   // var listener = (screenWidth < 768) ? 'click' : 'mouseleave';
//   submenu[i].addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     console.log(submenu[i]);
//     if(submenu[i].classList.contains('active')){
//       submenu[i].classList.remove('active');
//     } else {
//       submenu[i].classList.add('active');
//     }

//     // if(submenuContainer.classList.contains('active')){
//     // }

//     for(let j = 0; j < submenuChild.length; j++){
//       console.log(submenuChild[j]);
//       submenuChild[j].addEventListener('mouseenter', function(e){
//         if(submenuChild[j].classList.contains('active')){
//           submenuChild[j].classList.remove('active');
//         } else {
//           submenuChild[j].classList.add('active');
//         }
//       });
//     }
//     console.log(submenuChild);
//   });
//   // submenuContainer.addEventListener('mouseleave', function(e){
//   //   e.preventDefault();
//   //   e.stopImmediatePropagation();
//   //   if(submenu[i].classList.contains('active')){
//   //     submenu[i].classList.remove('active');
//   //   } else {
//   //     submenu[i].classList.remove('active');
//   //   }
//   // });
// }
// end submenu

let resizeTimeout;
// window.addEventListener('resize', () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(function(){
//     window.location.reload();
//   }, 0);
//   if(screenWidth > 800){
//     console.log('desktop');
//   } else {
//     console.log('mobile');
//   }
// });
var swiper = document.querySelector('.swiper-container');

if(swiper){
  var slideThumbnailHeadline = new Swiper('.small', {
    // spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      768: {
        slidesPerView: 'auto'
      }
    }
  });
  var slideHeadline = new Swiper('.big', {
      spaceBetween: 10,
      // autoplay: true,
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