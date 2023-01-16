const refs = {
  openModalBtn: document.querySelectorAll('.btn'),
  modal: document.querySelector('.modal'),
  lockBody: document.querySelector('body'),
  modals: document.querySelectorAll('.modal__container'),
};

refs.modal.addEventListener('click', onBackdropClick);

refs.openModalBtn.forEach(el => {
  el.addEventListener('click', e => {
    let path = e.currentTarget.getAttribute('data-path');

    refs.modals.forEach(el => {
      el.classList.remove('modal--visible');
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('modal--visible');
    openBtnClick();
  });
});

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function openBtnClick() {
  toggleModal();
  document.addEventListener('keydown', keyBoardPress);
  refs.lockBody.classList.toggle('disable-scroll');
}

const closeBtnClick = () => {
  toggleModal();
  document.removeEventListener('keydown', keyBoardPress);
  refs.lockBody.classList.toggle('disable-scroll');
};

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeBtnClick();
  }
}

function keyBoardPress(event) {
  if (event.key === 'Escape') {
    closeBtnClick();
  }
}
