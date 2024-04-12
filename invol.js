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
