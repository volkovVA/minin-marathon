window.onload = function() {
  activePacman()
}

const boars = document.querySelector('#board')
const colors = ['#00003E', '#00005C', '#0000DB', '#0000E8', '#0000C2']
const SQUARES_NUMBER = 306

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

const removeDot = element => {
  element.classList.remove('dot')
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.classList.add('dot')

  square.addEventListener('mouseover', () => {
    setColor(square)
    removeDot(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

const activePacman = () => {
  let box = document.querySelector('#board');
  let cursor = document.querySelector('.cursor');

  const onMouseMove = event => {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let boxArea= box.getBoundingClientRect();

    if (boxArea) {
      if (cursor.classList.contains('cursor-hidden')) {
        cursor.classList.remove('cursor-hidden');
      }

      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    }
  }

  const disablePointer = () => {
    requestAnimationFrame(function hidePointer() {
      cursor.classList.add('cursor-hidden');
    });
  }

  box.addEventListener('mousemove', onMouseMove, false);
  box.addEventListener('mouseleave', disablePointer, false);
}