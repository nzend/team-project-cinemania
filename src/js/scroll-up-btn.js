const backHomeBtn = document.querySelector('.back-home');
const firstSection = document.querySelector('.header');
const firstSectionPosition = firstSection.offsetTop;
backHomeBtn.classList.add('hidden');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > firstSectionPosition) {
    backHomeBtn.classList.remove('hidden');
  } else {
    backHomeBtn.classList.add('hidden');
  }
});

backHomeBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
