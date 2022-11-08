const hero = document.querySelector('.hero-content');
const btnNext = document.querySelector('.slider_btn_next');

const images = [
  '../images/hero/hero-img-mob.jpg',
  '../images/hero/slider№2.jpg',
  '../images/hero/slider№3.jpg',
];

let index = 0;

console.log(hero.style.backgroundImage);

btnNext.addEventListener('click', e => {
  console.log(btnNext);
  index += 1;
  console.log(index);
  console.log(`${images[index]}`);
  hero.style.backgroundImage = `linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url(${images[index]})`;
});
