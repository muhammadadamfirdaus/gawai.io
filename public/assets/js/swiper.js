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