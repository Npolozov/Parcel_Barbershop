const hero = document.querySelector('.hero-content');
const btnNext = document.querySelector('.slider_btn_next');
const btnPrev = document.querySelector('.slider_btn_prev');

// const images = [
//   '../images/hero/hero-img-mob.jpg',
//   '../images/hero/slider2.jpg',
//   '../images/hero/slider3.jpg',
// ];

// let index = 0;

// console.log(hero.style.backgroundImage);

// btnNext.addEventListener('click', e => {
//   console.log(btnNext);
//   index += 1;
//   console.log(index);
//   console.log(`${images[index]}`);
//   hero.style.backgroundImage = `linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url(${images[index]})`;
// });

const classNames = ['hero-content', 'slider_two', 'slider_three'];
let index = 0;

localPagination();

btnNext.addEventListener('click', () => {
  if (index + 1 === classNames.length) index = -1;
  index++;
  localStorage.setItem('pagination', index);
  if (index) {
    hero.classList[1]
      ? hero.classList.replace(hero.classList[1], classNames[index])
      : hero.classList.add(classNames[index]);
  } else {
    hero.classList.remove(hero.classList[1]);
  }
});

function localPagination() {
  const savePagination = localStorage.getItem('pagination');
  console.log('savePagination :>> ', savePagination);
  if (savePagination) {
    hero.classList.add(classNames[savePagination]);
  }
}

// btnPrev.addEventListener('click', () => {
//   if (index + 1 === classNames.length) index = +1;
//   index++;
//   if (index) {
//     hero.classList[1]
//       ? hero.classList.replace(hero.classList[1], classNames[index])
//       : hero.classList.add(classNames[index]);
//   } else {
//     hero.classList.remove(hero.classList[1]);
//   }
// });
