const burgerActive = document.querySelector('.header_burger');
const burgerMenu = document.querySelector('.backdrop');
const lockBody = document.querySelector('body');

const linkClickRef = document.querySelectorAll('.mobal_link');
console.log(linkClickRef);

burgerActive.addEventListener('click', e => {
  burgerActive.classList.toggle('active');
  burgerMenu.classList.toggle('is-open');
  lockBody.classList.toggle('lock');
});

linkClickRef.forEach(item => {
  item.addEventListener('click', linkClickClose);
});

function linkClickClose(event) {
  burgerActive.classList.remove('active');
  burgerMenu.classList.remove('is-open');
  lockBody.classList.remove('lock');
}
