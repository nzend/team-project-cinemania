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

navLink[0].classList.add('current__nav-link');
navLink[3].classList.add('current__nav-link');

if (currentUrl.includes('index')) {
  return;
} else if (currentUrl.includes('catalog')) {
  navLink[0].classList.remove('current__nav-link');
  navLink[3].classList.remove('current__nav-link');
  navLink[1].classList.add('current__nav-link');
  navLink[4].classList.add('current__nav-link');
  return;
} else if (currentUrl.includes('library')) {
  navLink[0].classList.remove('current__nav-link');
  navLink[3].classList.remove('current__nav-link');
  navLink[1].classList.remove('current__nav-link');
  navLink[4].classList.remove('current__nav-link');
  navLink[2].classList.add('current__nav-link');
  navLink[5].classList.add('current__nav-link');
  return;
}
