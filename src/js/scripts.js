const mainSlider = new Swiper ('.first__slider-main', {
   autoplay: {
      delay: 3000,
   },
   speed: 700,
   effect: "fade",
   pagination: {
      el: '.swiper-pagination',
    },
})

const promoSlider = new Swiper ('.first__slider-promo', {
 autoplay: {
    delay: 3000,
 },
 speed: 700,
 
 effect: "flip",
 loop: true,
 pagination: {
    el: '.swiper-pagination',
  },
})

const promoCodesSlider = new Swiper ('.promocodes__block', {
   autoplay: {
      delay: 3000,
   },
   speed: 700,
   slidesPerView: 1.2,
   spaceBetween: 10,
   breakpoints: {
      500: {
         slidesPerView: 2,
         centeredSlides: true,
      },
      834: {
         slidesPerView: 3,
      }
   },

   loop: true,
  })