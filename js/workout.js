document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: false,
  });

  // For Selecting the sorting buttons:
  const sortingButtons = document.querySelectorAll(".sorting-button");

  sortingButtons.forEach((btn) => {
    const menu = btn.querySelector(".dropdown-sorted-menu");

    // Only add listener if menu exists
    if (menu) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent event bubbling
        menu.classList.toggle("show-sorted-menu");
      });
    }
  });

  // Optional: close menus when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-sorted-menu").forEach((menu) => {
      menu.classList.remove("show-sorted-menu");
    });
  });

  var grid = document.querySelector(".grid");

  var iso = new Isotope(grid, {
    itemSelector: ".element-card",
    layoutMode: "fitRows",
  });

  const checkboxes = document.querySelectorAll(
    '.workout-category-list input[type="checkbox"]'
  );

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", filterCards);
  });

  function filterCards() {
    let activeFilters = [];

    checkboxes.forEach((cb) => {
      if (cb.checked) {
        activeFilters.push("." + cb.value);
      }
    });

    // If nothing checked → show all
    let filterValue = activeFilters.length ? activeFilters.join(",") : "*";

    iso.arrange({ filter: filterValue });
  }

  // Loader Part:
  window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");

    setTimeout(() => {
      loader.classList.add("hide");
    }, 500); // delay for smooth exit
  });
  
});
