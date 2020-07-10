var btn_top = document.querySelector('.back-to-top');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn_top.style.display = "block";
  } else {
    btn_top.style.display = "none";
  }
}
// Show navbar mobile
var btnBar = document.querySelector('.header__navbar-mobile__bar');
var navOverlay = document.querySelector('.nav__overlay');
var listNavBar = document.querySelector('.header__navbar-mobile__collapse');
var navClose = document.querySelector('.header__navbar-mobile__close');
btnBar.addEventListener('click', function(){
  navOverlay.style.display = "block";
  listNavBar.classList.add('is--open');
});
navOverlay.addEventListener('click', function(){
  navOverlay.style.display = "none";
  listNavBar.classList.remove('is--open');
});
navClose.addEventListener('click', function(){
  navOverlay.style.display = "none";
  listNavBar.classList.remove('is--open');
})


  

