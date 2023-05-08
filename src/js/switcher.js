const LightSwitcher = document.querySelector('.switcher');
let isLight = localStorage.getItem('isLight') === 'true';

document.body.classList.toggle('light', isLight);

LightSwitcher.onclick = function () {
isLight = !isLight;
document.body.classList.toggle('light', isLight);
localStorage.setItem('isLight', isLight);
};