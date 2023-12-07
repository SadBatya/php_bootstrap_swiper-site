const burgerMenu = () => {
  const burgerButton = document.querySelector('.burger_button');
  const body = document.querySelector('body')
  const menu = document.querySelector('.burger_menu');
  
  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    body.classList.toggle('stop-scroll')
  });
};

burgerMenu()

