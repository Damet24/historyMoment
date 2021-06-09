let nav = document.querySelector("#nav");
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    nav.classList.add("fix");
  } else {
    nav.classList.remove("fix");
  }
}

window.addEventListener("scroll", fixNav);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
