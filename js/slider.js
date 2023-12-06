document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('slider');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const slideWidth = document.querySelector('.slide').offsetWidth;

  let currentIndex = 0;

  nextButton.addEventListener('click', function () {
    if (currentIndex < slider.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slider.children.length - 1;
    }
    updateSlider();
  });

  function updateSlider() {
    const newTransformValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${newTransformValue}px)`;
  }
});