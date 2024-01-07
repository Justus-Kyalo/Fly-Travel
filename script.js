const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const bookingType = document.getElementById("booking-type");
bookingType.addEventListener("click", (e) => {
  Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
});

const swiper = new Swiper(".swiper", {
  slidePerView: "auto",
  spaceBetween: 20,
});

//scroolReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: "1000",
};

// inside header Container 
ScrollReveal().reveal(".header-container h1", { ...scrollRevealOption });

ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container .booking", {
  ...scrollRevealOption,
  delay: 1000,
});

//Service Container
ScrollReveal().reveal(".service-card", {
  duration: 1000,
  interval: 500,
});

//offer container
ScrollReveal().reveal(".offer-card", {
  ...scrollRevealOption,
  interval: 500,
});
