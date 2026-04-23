// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// TESTIMONIAL SLIDER
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active-slide"));
  dots.forEach(d => d.classList.remove("active-dot"));

  slides[i].classList.add("active-slide");
  dots[i].classList.add("active-dot");
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);