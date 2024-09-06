const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
