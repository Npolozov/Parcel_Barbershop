let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('.radio_btn');

button.addEventListener('click', function (e) {
  e.preventDefault();
  for (let radio of radios) {
    if (radio.checked) {
      console.log(radio.value);
      if (radio.value === 'yellow') {
        document.querySelector('body').classList.add('yellow');
        document.querySelector('body').classList.remove('green');
      } else if (radio.value === 'green') {
        document.querySelector('body').classList.remove('yellow');
        document.querySelector('body').classList.add('green');
      } else {
        document.querySelector('body').classList.remove('green');
        document.querySelector('body').classList.remove('yellow');
      }
    }
  }
});
