class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => {},
    };
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.events();
  }
  events() {
    console.log('Привет');
  }
}

const modal = new Modal({
  isOpen: modal => {
    console.log(modal);
    console.log('opened');
  },
});
