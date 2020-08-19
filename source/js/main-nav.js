var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navToggleText = navToggle.querySelector('span');
var navList = document.querySelector('.main-nav__list');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navList.classList.contains('main-nav__list--closed')) {
    navList.classList.remove('main-nav__list--closed');
    navToggle.classList.remove('main-nav__toggle--open');
    navToggle.classList.add('main-nav__toggle--close');
    navToggleText.textContent = 'Закрыть меню';
  } else {
    navList.classList.add('main-nav__list--closed');
    navToggle.classList.add('main-nav__toggle--open');
    navToggle.classList.remove('main-nav__toggle--close');
    navToggleText.textContent = 'Открыть меню';
  }
});
