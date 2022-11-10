const hero = document.querySelector('.hero-content');
const btnNext = document.querySelector('.slider_btn_next');
const btnPrev = document.querySelector('.slider_btn_prev');

const classNames = [
  'hero-content',
  'hero-content slider_two',
  'hero-content slider_three',
];
let index = 0;

localSlider();

btnNext.addEventListener('click', () => {
  index++;
  if (index === classNames.length) index = 0;
  console.log(index);
  localStorage.setItem('slider', index);
  hero.className = classNames[index];
});

btnPrev.addEventListener('click', () => {
  if (index === 0) {
    return;
  }
  index -= 1;
  hero.className = classNames[index];
});

function localSlider() {
  const saveSlider = localStorage.getItem('slider');
  console.log('slider :>> ', saveSlider);
  if (saveSlider) {
    hero.className = classNames[saveSlider];
  }
}

// btnNext.addEventListener('click', () => {

//   // if (index === classNames.length) index = 0;
//   // localStorage.setItem('slider', index);
//   // if (index) {
//   //   hero.classList[1]
//   //     ? hero.classList.replace(hero.classList[1], classNames[index])
//   //     : hero.classList.add(classNames[index]);
//   // } else {
//   //   hero.classList.remove(hero.classList[1]);
//   // }
// });

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
