const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

const setTime = value => {
  timeEl.innerHTML = `00:${value}`
}

const finishGame = () => {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
}

const decreaseTime = () => {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const getRandomColor = (min = 0, max = 255) => {
  const red = Math.round(Math.random() * (max - min) + min)
  const green = Math.round(Math.random() * (max - min) + min)
  const blue = Math.round(Math.random() * (max - min) + min)
  return `${red}, ${green}, ${blue}`
}

const createRandomCircle = () => {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const rgbColor = getRandomColor()
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = `rgb(${rgbColor})`
  board.append(circle)
}

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  setTime(time)
}

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})

startBtn.addEventListener('click', event => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

const winTheGame = () => {
  const kill = () => {
    const circle = document.querySelector('.circle')
    if (circle) {
      circle.click()
    }
  }
  setInterval(kill, 75)
}