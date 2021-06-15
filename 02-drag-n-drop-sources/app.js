window.onload = function() {
  activeDragDrop()
}

const activeDragDrop = () => {
  const item = document.querySelector('.item')
  const placeholders = document.querySelectorAll('.placeholder')

  const dragStart = event => {
    event.target.classList.add('hold')
    setTimeout(() => (event.target.classList.add('hide')), 0)
  }

  const dragEnd = event => {
    event.target.className = 'item'
  }

  const dragover = event => {
    event.preventDefault()
  }

  const dragenter = event => {
    event.target.classList.add('hovered')
  }

  const dragleave = event => {
    event.target.classList.remove('hovered')
  }

  const dragdrop = event => {
    event.target.classList.remove('hovered')
    event.target.append(item)
  }

  for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
  }

  item.addEventListener('dragstart', dragStart)
  item.addEventListener('dragend', dragEnd)
}
