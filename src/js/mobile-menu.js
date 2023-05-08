const mobileMenuButton = document.getElementById('menu');
const menuNav = document.querySelector('nav');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');

mobileMenuButton.addEventListener('click', () => {
  menuNav.style.left = '0';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
});

overlay.addEventListener('click', () => {
  menuNav.style.left = '-64%';
  overlay.style.display = 'none';
  body.style.overflow = 'auto';
});
