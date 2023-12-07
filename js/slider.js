// let offset = 0 //смещение от левого края
// const sliderLine = document.querySelector('.slider_line')

// document.querySelector('#next').addEventListener('click', () => {
//   offset += 1187
//   if(offset > 2374){
//     offset = 0
//   }
//   sliderLine.style.left = -offset + 'px'
// })

// document.querySelector('#prev').addEventListener('click', () => {
//   offset -= 1187
//   if(offset < 0){
//     offset = 2374
//   }
//   sliderLine.style.left = -offset + 'px'
// })

// function init(){
//   width = sliderLine.offsetWidth;
//   sliderLine.style.width = width * images.length + 'px'
//   images.forEach((item) => {
//     item.style.width = width + 'px'
//     item.style.height = 'auto'
//   })
// }
// window.addEventListener('resize', init())

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

window.addEventListener('resize', function () {
  swiper.update();
});