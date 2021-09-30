let hamMenu = document.querySelector(".hamburger");

let navigationBar = document.getElementsByTagName("nav");

let navigationLinks = document.querySelectorAll(".nav-links");

console.log(navigationLinks);

hamMenu.addEventListener("click", () => {
  navigationBar[0].classList.toggle("nav-open");
  hamMenu.classList.toggle("close");
});

navigationLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navigationBar[0].classList.remove("nav-open");
    hamMenu.classList.remove("close");
  });
});
