let nav = document.querySelector("#nav");
let topOfNav = nav.offsetTop;
let op = document.querySelector("#nav");
let topOfNav1 = op.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav1) {
    op.classList.add("fix");
  } else {
    op.classList.remove("fix");
  }

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
