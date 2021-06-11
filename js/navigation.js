const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
Array.prototype.forEach.call(links, (item) => {
  item.addEventListener("click", mobileMenu);
});

function mobileMenu() {
  hamburger.classList.toggle("in-screen");
  navMenu.classList.toggle("in-screen");
}
