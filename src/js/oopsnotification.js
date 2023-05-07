
const notificationBtnClose = document.querySelector(`.notification-trailer-fail-btn-close`);
const notification = document.querySelector(`.notification-trailer-fail`);
const notificationTrailerFailOverlay = document.querySelector(`.notification-trailer-fail-overlay`);
const openModalBtn = document.querySelector(`.openModalBtn`);

// ! кнопка для запуску модалки, для перевірки в макеті її немає
openModalBtn.addEventListener(`click`, onOpenModalBtnClick);

function onOpenModalBtnClick(e){
    //*зявляється модалка
    notificationTrailerFailOverlay.style.display= "flex";

    //*додає слухача на кнопку "х" закриття модалки
    notificationBtnClose.addEventListener(`click`, onNotificationTrailerFailBtnClick);
    // *додає слухача на клік по оверлею
    notificationTrailerFailOverlay.addEventListener(`click`, onNotificationTrailerFailOverlay);
    // *виконує перевірку куди тицькаєм
    function onNotificationTrailerFailOverlay(event) {
        if (event.currentTarget === event.target) {
          onCloseModal();
        }
      }
    // *додає слухача на кнопку escape
     document.addEventListener("keydown", onEscKeyPress); 
            
}

// *закриває модалку по кнопці
function  onNotificationTrailerFailBtnClick (){
    onCloseModal();
}

// *закриває модалку по оверлею
function onCloseModal() {
    notificationTrailerFailOverlay.style.display= "none";
  }
// * закриває модалку по escape та знімає слухача з escape
  function onEscKeyPress(event) {
    if (event.code !== 'Escape') {
      return;
    }
    document.removeEventListener('keydown', onEscKeyPress);
    onCloseModal();
  }
    


