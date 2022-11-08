const hero = document.querySelector('.hero-content');
const btnNext = document.querySelector('.slider_btn_next');

console.log(hero);
console.log(btnNext);

btnNext.addEventListener('click', e => {
  console.log(btnNext);
  hero.classList.add('.slider_two');
});
