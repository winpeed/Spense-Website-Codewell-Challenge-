let hamMenu = document.querySelector(".hamburger");

let navigationBar = document.getElementsByTagName("nav");

let navigationLinks = document.getElementsByClassName("nav-links");

console.log(navigationLinks);

hamMenu.addEventListener("click", () => {
  navigationBar[0].classList.toggle("nav-open");
  hamMenu.classList.toggle("close");
});

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", () => {
    navigationBar[0].classList.add("nav-close");
    hamMenu.classList.add("open");
  });
}
