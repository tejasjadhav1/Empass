const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navlist = document.querySelector(".nav-list");
const rightnav = document.querySelector(".rightnav");
const registerForm = document.querySelector(".register-modal-main-container");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("v-class-resp");
  navlist.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

const handleScrollColor = () => {
  if (window.scrollY > 400) {
    navbar.classList.remove("scrolled");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", handleScrollColor);

const toggleRegisterModal = () => {
  registerForm.classList.toggle("show");
};
