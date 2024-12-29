'use strict'
const modalOpener = document.getElementById("modal-window");
const openBttn = document.getElementById("open-modal");
const closeBttn = document.getElementById("close-modal");

openBttn.addEventListener("click", () => {
  modalOpener.classList.add("is-open");
});

closeBttn.addEventListener("click", () => {
  modalOpener.classList.remove("is-open");
});
// Функція закриття модального вікна при кліку поза межами вікна
window.addEventListener("click", (event) => {
  if (event.target === modalOpener) {
  modalOpener.classList.remove("is-open");
  }
});
