
const notificationBtnClose = document.querySelector(`.notification-trailer-fail-btn-close`);
const notification = document.querySelector(`.notification-trailer-fail`);
const notificationTrailerFailOverlay = document.querySelector(`.notification-trailer-fail-overlay`);

//!дата атрибут та слухач на кнопку для відкриття модалки
const trailerFailBtn = document.querySelector('button[data-btn="trailer-fail"]');
trailerFailBtn.addEventListener(`click`, onOpenModalBtnClick);

function onOpenModalBtnClick(){
    notificationTrailerFailOverlay.style.display= "flex";
    notificationBtnClose.addEventListener(`click`, onNotificationTrailerFailBtnClick);
    notificationTrailerFailOverlay.addEventListener(`click`, onNotificationTrailerFailOverlay);
    function onNotificationTrailerFailOverlay(event) {
        if (event.currentTarget === event.target) {
          onCloseModal();
        }
      }
     document.addEventListener("keydown", onEscKeyPress); 
            
}

function  onNotificationTrailerFailBtnClick (){
    onCloseModal();
}

function onCloseModal() {
    notificationTrailerFailOverlay.style.display= "none";
  }

  function onEscKeyPress(event) {
    if (event.code !== 'Escape') {
      return;
    }
    document.removeEventListener('keydown', onEscKeyPress);
    onCloseModal();
  }
    


