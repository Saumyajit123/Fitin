document.addEventListener("DOMContentLoaded", () => {
  // To stop scrolling when offcanvas is opened:
  const offcanvasEl = document.querySelector("#navbarSupportedContent");

  offcanvasEl.addEventListener("shown.bs.offcanvas", () => {
    document.body.classList.add("offcanvas-open");
  });

  offcanvasEl.addEventListener("hidden.bs.offcanvas", () => {
    document.body.classList.remove("offcanvas-open");
  });

  // Modal Form Validation:
  const modalForm = document.querySelector(".modal-form");

  const fname = document.querySelector("#fname");
  const lname = document.querySelector("#lname");
  const emailname = document.querySelector("#emailname");
  const gender = document.querySelector("#gender");
  const age = document.querySelector("#age");
  const phone = document.querySelector("#phone");
  const weight = document.querySelector("#weight");
  const goal = document.querySelector("#goal");
  const password = document.querySelector("#password");
  const error = document.querySelector(".error");
  const eye = document.querySelector(".eye");

  //Regex:
  const passChecker =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (passChecker.test(password.value) == false) {
      error.innerText = "The Password is not following all the checks";
    } else {
      error.innerText = "";
    }
  });

  eye.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text"; // show password
      eye.classList.add("active");
    } else {
      password.type = "password"; // hide password
      eye.classList.remove("active");
    }
  });

  // From Home Page:
  const swiper = new Swiper(".myswiper", {
    slidesPerView: 3,

    slidesToMove: 1,

    // centeredSlides: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    loop: true,

    direction: "horizontal",

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
      },

      // 1200: {
      //   slidesPerView: 3,
      // },
    },
  });

  // AOS JS:
  AOS.init({
    once: false,
  });

  // Luxy JS:
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
  });

  // From Home Page:
  const swiperSec = new Swiper(".coach-swiper", {
    slidesPerView: 3,

    slidesToMove: 1,

    // centeredSlides: true,

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
      768: {
        slidesPerView: 1,
      },

      992: {
        slidesPerView: 2,
      },

      // 1400: {
      //   slidesPerView: 3,
      // }
    },
  });

  // From About Us Page:

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
