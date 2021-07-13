'use strict'
window.addEventListener('DOMContentLoaded', () => {
  const keys = [...document.querySelectorAll('.key')]

  keys.forEach(key => {
    key.addEventListener('click', () => {
      playSound(key.dataset.key)
    })
  })

  document.addEventListener('keypress', e => {
    playSound(e.code)
  })
})

function playSound(keyCode) {
  const buttonNode = document.querySelector(`div[data-key="${keyCode}"]`)
  const audioNode = document.querySelector(`audio[data-key="${keyCode}"]`)

  if (!audioNode) {
    return
  }

  setBorderClass(buttonNode)
  const url = audioNode.src
  const audio = new Audio(url)
  audio.play()
}

function setBorderClass(target) {
  target.classList.add('playing')
  target.addEventListener('transitionend', removeBorderClass)
}

function removeBorderClass(e) {
  e.target.classList.remove('playing')
  e.target.removeEventListener('transitionend', removeBorderClass)
}
