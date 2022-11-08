let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('.radio_btn');

button.addEventListener('click', function (e) {
  e.preventDefault();
  for (let radio of radios) {
    if (radio.checked) {
      console.log(radio.value);
      if (radio.value === 'aqua') {
        document.querySelector('body').classList.add('aqua');
        document.querySelector('body').classList.remove('blue');
      } else if (radio.value === 'blue') {
        document.querySelector('body').classList.remove('aqua');
        document.querySelector('body').classList.add('blue');
      } else {
        document.querySelector('body').classList.remove('aqua');
        document.querySelector('body').classList.remove('blue');
      }
    }
  }
});
