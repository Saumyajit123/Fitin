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

  // Workout Section Counter Part:
  const counters = document.querySelectorAll(".counter-number");

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

   // INIT ISOTOPE
  var grid = document.querySelector('.grid');
  var iso = new Isotope(grid, {
    itemSelector: '.element-card',
    layoutMode: 'fitRows'
  });

  // FILTER BUTTON CLICK
  var filterBtns = document.querySelectorAll('.button-iso');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {

      // remove active class
      filterBtns.forEach(b => b.classList.remove('active-btn'));
      this.classList.add('active-btn');

      // filter items
      var filterValue = this.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });
  });

  AOS.init({
    once: false,
  });
  
})