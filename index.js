const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuCarIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail');
const burgerMenu = $('.menu');
const mobileMenu = $('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed){
    aside.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed){
    aside.classList.add('inactive');
  }


  mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {

  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed ){
    mobileMenu.classList.add('inactive');
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}