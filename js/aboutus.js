document.addEventListener("DOMContentLoaded", ()=> {

    // About Section:
    const swiperAbout = new Swiper(".about-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: ".about-pagination",
      clickable: true,
    },
  });
})