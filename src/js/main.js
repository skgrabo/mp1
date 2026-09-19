/* Your JS here. */
console.log('Hello World!')

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
} 

const navbar = document.getElementById('navbar');
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = navLinks
  .map((link) => document.querySelector(link.hash))
  .filter((section) => section !== null);

window.onscroll = function() {
  scroll();
  updateActiveSection();
};

function scroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "10px 10px";
    navbar.style.fontSize = "20px";
  } else {
    navbar.style.padding = "60px 10px";
    navbar.style.fontSize = "25px";
  }
}

function updateActiveSection() {
  const navBottom = navbar.getBoundingClientRect().bottom;
  let activeIndex = sections.findIndex((section) => {
    const sectionBounds = section.getBoundingClientRect();
    return sectionBounds.top <= navBottom && sectionBounds.bottom > navBottom;
  });

  if (activeIndex === -1 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    activeIndex = sections.length - 1;
  }

  navLinks.forEach((link, index) => {
    link.classList.toggle('active', index === activeIndex);
  });
}

scroll();
updateActiveSection();

const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
openBtn.addEventListener('click', () => {
  modal.showModal(); 
});
closeBtn.addEventListener('click', () => {
  modal.close();
});