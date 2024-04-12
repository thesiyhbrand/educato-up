var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
var swipper = new Swiper(".mySwipper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var menu = document.querySelector("#menu");
var close = document.querySelector("#close");
var resNav = document.querySelector(".res-nav");
console.log(resNav);

menu.addEventListener("click", () => {
  resNav.style.opacity = 1;
  resNav.style.left = "0%";
});

close.addEventListener("click", () => {
  resNav.style.left = "-100%";
});
