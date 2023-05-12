const openBtn = document.querySelector('.footer__link');
const modalWrap = document.querySelector('.modal__wrap--our-team');
const modal = document.querySelector('.modal-team');
const closeEl = document.querySelector('.upcoming-content__btn--team');

openBtn.addEventListener('click', onOpenModal);
closeEl.addEventListener('click', modalClose);

function onOpenModal(event) {
  event.preventDefault();

  document.querySelector('body').classList.add('modal-open');
  modalWrap.classList.remove('modal-hide');
  modal.classList.add('team-modal--open');
}

function modalClose(event) {
  event.preventDefault();

  document.querySelector('body').classList.remove('modal-open');
  modalWrap.classList.add('modal-hide');
  modal.classList.remove('team-modal--open');
}
