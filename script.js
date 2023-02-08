const addBtn = document.getElementById("menu-mobile");
const showMenu = document.getElementById("show-menu");
const removeBtn = document.getElementById("close-menu");
const closeicon = document.getElementById("close-icon");
const showBg = document.getElementById("showBg");

showMenu.addEventListener("click", () => {
  removeBtn.classList.add("show");
});

closeicon.addEventListener("click", () => {
  removeBtn.classList.remove("show");
});

showMenu.addEventListener("click", () => {
  showBg.classList.add("show");
});

closeicon.addEventListener("click", () => {
  showBg.classList.remove("show");
});
showBg.addEventListener("click", () => {
  removeBtn.classList.remove("show");
  showBg.classList.remove("show");
});
