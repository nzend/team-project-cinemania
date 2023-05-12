const LightSwitcher = document.querySelector('.switcher');
let isLight = localStorage.getItem('isLight') === 'true';

document.body.classList.toggle('light', isLight);

LightSwitcher.onclick = function () {
  isLight = !isLight;
  document.body.classList.toggle('light', isLight);
  localStorage.setItem('isLight', isLight);
};

// page link color

const currentUrl = window.location.href;

const navLink = document.querySelectorAll(
  '.mobile-menu__link, .header__nav-link'
);

// if (currentUrl.includes('index')) {
//   classList.toggle('current__nav-link');
// } else if (currentUrl.includes('catalog')) {
//   link.classList.toggle('current__nav-link');
// }
