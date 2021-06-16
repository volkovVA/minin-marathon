const upBtn = document.querySelector('.down-button'),
      downBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide'),
      slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount-1)*100}vh`
let activeSlideIndex = 0

const changeSlide = (direction) => {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex == slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

