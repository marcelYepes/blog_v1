function navbarHandle() {
  const iconMenu = document.querySelector(".bx-menu");
  const menu = document.querySelector(".menu");

  iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu_show");
  });
}

function navbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
      navbar.classList.add("navbar_active");
    } else {
      navbar.classList.remove("navbar_active");
    }
  });
}

navbarHandle();
navbarScroll();
