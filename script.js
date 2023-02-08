const addBtn = document.getElementById("menu-mobile");
const showMenu = document.getElementById("show-menu");
const removeBtn = document.getElementById("close-menu");
// const removeBtn = document.getElementById("close-icon");

showMenu.addEventListener("click", () => {
  removeBtn.classList.add("show");
});

showMenu.addEventListener("click", () => {
  //   removeBtn.classList.remove("show");
});
