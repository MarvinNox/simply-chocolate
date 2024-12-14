const menuOpener = document.getElementById("mobile-menu");
const menuOpenBttn = document.getElementById("mobile-menu-opener");
const menuCloseBttn = document.getElementById("close-mobile-menu");
const links = document.querySelectorAll('#mobile-menu a');

menuOpenBttn.addEventListener("click", () => {
  menuOpener.classList.add("is-open-menu");
});

menuCloseBttn.addEventListener("click", () => {
  menuOpener.classList.remove("is-open-menu");
});
// Функція для закриття меню при кліку на посилання
links.forEach(link => {
  link.addEventListener('click', () => {
    menuOpener.classList.remove('is-open-menu');
    });
});