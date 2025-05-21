console.log("bateu aqui");

const bars = document.getElementById("bars");
const nav = document.getElementById("nav");
const navItem = document.querySelectorAll("a");

bars.addEventListener("click", toggleMenu);
function toggleMenu() {
  console.log("clicou no menu");
  bars.classList.toggle("active");
  nav.classList.toggle("active");
}
navItem.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});
