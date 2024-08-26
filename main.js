const bodyEl = document.querySelector("body");
const headerEl = document.querySelector(".color");
const menuEl = document.querySelector(".fa-bars");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    headerEl.classList.add("active-color");
    menuEl.classList.add("active-menu");
  } else if (scrollTop === 0) {
    // Scrolling up
    headerEl.classList.remove("active-color");
    menuEl.classList.remove("active-menu");
  }
});
