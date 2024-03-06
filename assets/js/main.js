// ========= SHOW MENU ==========
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// ======= Menu show ========
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ====== Menu hidden =======
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ========== REMOVE MENU MOBILE ==========
const navLink = document.querySelectorAll(".nav__Link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ========== ADD BLUR HEADER ==========
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add class if the bottom offsite is greater than 50 of the value
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// ========== SHOW SCROLL UP ==========

// ========== SCROLL SECTIONS ACTIVE LINK ==========

// ========== SCROLL REVEAL ANIMATION ==========
