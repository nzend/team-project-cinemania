
const notificationBtnClose = document.querySelector(`.notification-btn-close`);
const notification = document.querySelector(`.notification`);
notificationBtnClose.addEventListener(`click`, onNotificationBtnClick);


function  onNotificationBtnClick (){
    notification.style.display= "none";
}
    


