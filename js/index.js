const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1, // Количество видимых слайдов
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

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

