const swiper = new Swiper(".myswiper", {
  slidesPerView: 1,

  centeredSlides: true,

  freeMode: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  loop: true,

  direction: "horizontal",

  breakpoints: {
    576: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});
