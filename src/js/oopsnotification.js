
const notificationBtnClose = document.querySelector(`.notification-trailer-fail-btn-close`);
const notification = document.querySelector(`.notification-trailer-fail`);
notificationBtnClose.addEventListener(`click`, onNotificationTrailerFailBtnClick);


function  onNotificationTrailerFailBtnClick (){
    notification.style.display= "none";
}
    


