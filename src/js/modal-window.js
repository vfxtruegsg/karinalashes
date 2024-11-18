const modalWindow = document.querySelector('.modal-window');
const btnOpen = document.querySelector('.burger-btn');
const btnClose = document.querySelector('.closed-button');

btnOpen.addEventListener('click', () => {
  modalWindow.classList.add('is-open');
});

btnClose.addEventListener('click', () => {
  modalWindow.classList.remove('is-open');
});
