const openBtn = document.querySelector('.footer__link');
const modal = document.querySelector('.modal__wrap--our-team');
const closeEl = document.querySelector('.modal__hide');

openBtn.addEventListener('click', onOpenModal);
closeEl.addEventListener('click', modalClose);

function onOpenModal(event) {
  event.preventDefault();
  document.querySelector('body').classList.add('modal-open');

  modal.classList.remove('modal-hide');
  document.querySelector('.modal-team').classList.add('team-modal--open');
}

function modalClose(event) {
  event.preventDefault();
  document.querySelector('body').classList.remove('modal-open');

  document.querySelector('.modal-team').classList.remove('team-modal--open');

  modal.classList.add('modal-hide');
}
