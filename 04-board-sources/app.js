const boars = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#349db', '#e67e22', '#2ecc71']
const SQUARES_NUMBER = 500

const setColor = element => {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = element => {
  element.style.backgroundColor = '#353535'
  element.style.boxShadow = `0 0 2px #000`
}

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}