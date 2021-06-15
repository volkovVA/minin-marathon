window.onload = function() {
  slidesPlugin()
}

const slidesPlugin = (activeSlide = 2) => {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  }

  const clearActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}