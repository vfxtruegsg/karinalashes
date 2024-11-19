const modalWindow = document.querySelector('.modal-window');
const btnOpen = document.querySelector('.burger-btn');
const btnClose = document.querySelector('.closed-button');
const body = document.querySelector('body');

btnOpen.addEventListener('click', () => {
  modalWindow.classList.add('is-open');
  body.classList.add('body-lock');
});

btnClose.addEventListener('click', () => {
  modalWindow.classList.remove('is-open');
  body.classList.remove('body-lock');
});
