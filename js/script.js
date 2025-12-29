document.addEventListener("DOMContentLoaded", () => {
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
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  AOS.init({
    once: false,
  });

  const swiperSec = new Swiper(".coach-swiper", {
    slidesPerView: 1,

    centeredSlides: true,

    freeMode: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 1,
      },

      992: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 2,
        centeredSlides: false,
      },

      1400: {
        slidesPerView: 3,
      },
    },
  });

  // Counter Part:
  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    const target = +counter.dataset.target;
    let count = 0;
    const speed = 150;

    const update = () => {
      const inc = target / speed;
      if (count < target) {
        count += inc;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});
