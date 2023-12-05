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