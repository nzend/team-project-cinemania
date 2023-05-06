const menuButton = document.getElementById('menu');
const menu = document.querySelector('nav');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');

menuButton.addEventListener('click', () => {
  menu.style.left = '0';
  overlay.style.display = 'block';
//   body.style.overflow = 'hidden';
});

overlay.addEventListener('click', () => {
  menu.style.left = '-64%';
  overlay.style.display = 'none';
  body.style.overflow = 'auto';
});
