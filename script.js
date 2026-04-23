// MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("show");
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

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click",()=>{
    sideMenu.classList.remove("show");
});

const menuLinks=document.querySelectorAll(".side-menu a");

menuLinks.forEach(link => {
    link.addEventListener("click",()=>{
        sideMenu.classList.remove("show");
    });
});

