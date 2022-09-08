/* ------------
   Header
   ------------ */

// Header styling on sticky

document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const headerHasMoved = window.scrollY > 0;

  headerHasMoved
    ? header.classList.add("header--moved")
    : header.classList.remove("header--moved");
});

/* ------------
   Navigation
   ------------ */

const logo = document.getElementById("logo")
const navLinks = document.querySelectorAll(".nav__link");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenuButton = document.getElementById("close-hamburger-menu");
const tabletBreakpoint = "(max-width: 600px)";

window.addEventListener("resize", () => {
  const nav = document.getElementById("nav");
  nav.classList.remove("nav--active");
});

function toggleHamburgerMenu() {
  const nav = document.getElementById("nav");
  const isNavActive = nav.classList.contains("nav--active");

  if (isMobile()) {
    hamburgerMenu.setAttribute("aria-expanded", !isNavActive);
    nav.classList.toggle("nav--active");
  }
}

// Toggle mobile navigation / hamburger menu

[hamburgerMenu, closeMenuButton, ...navLinks].forEach((button) =>
  button.addEventListener("click", toggleHamburgerMenu)
);

// Toggle active link
;
[logo, ...navLinks].forEach((el) => {
  el.addEventListener("click", () => {
    const hasActiveLink = document.querySelector(".is-active");
    hasActiveLink.classList.remove("is-active");

    el.classList.add("is-active");

    if(!logo){
      toggleHamburgerMenu();
    }
  });
});

/* ------------
   Contact Form
   ------------ */

// Empty form submit preventation

const submitButton = document.getElementById("submit-form");
const formInputs = document.getElementsByClassName("form__input");

submitButton.addEventListener("submit", (e) => {
  formInputs.forEach((input) => {
    if (input.value == "") {
      e.preventDefault();
    }
  });
});

/* ------------
   Utils
   ------------ */

function isMobile() {
  return window.matchMedia(tabletBreakpoint).matches;
}
