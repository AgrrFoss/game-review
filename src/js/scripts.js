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
         slidesPerView: 1.7,
         centeredSlides: true,
      },
      834: {
         slidesPerView: 3,
      }
   },
   
   loop: true,
})





const gamesSlider = new Swiper ('.demo-games__games-slider', {
   slidesPerView: 2.5,
   spaceBetween: 10,
   grid: {
      fill: 'row',
      rows: 2,
   },
   breakpoints: {
      500: {
         slidesPerView: 3,
         spaceBetween: 24,
         
      },
   },
})

const cardsSlider = new Swiper ('.cards__slider', {
   slidesPerView: 1.2,
   spaceBetween: 30,
   grid: {
      fill: 'row',
      rows: 2,
   },
   breakpoints: {
      500: {
         slidesPerView: 2.2,
         spaceBetween: 24,
         
      },
      800: {
         slidesPerView: 3,
         spaceBetween: 24,
         
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 24,
         
      },
   },
   navigation: {
      nextEl: '.cards__nav-next',
      prevEl: '.cards__nav-prev',
   },
   pagination: {
      el: ".cards__nav-pagination",
      bulletClass: 'cards__nav-bullet',
      bulletActiveClass:'cards__nav-bullet_active',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
   
})