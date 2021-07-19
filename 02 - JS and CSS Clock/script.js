'use strict'
window.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    setHandAngles()
  }, 1000)
})

function setHandAngles() {
  const secondHand = document.querySelector('.second-hand')
  const minuteHand = document.querySelector('.minute-hand')
  const hourHand = document.querySelector('.hour-hand')
  const { hourAngle, minuteAngle, secondAngle } = getAngles()
  secondHand.style.transform = `rotate(${secondAngle}deg)`
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`
  hourHand.style.transform = `rotate(${hourAngle}deg)`
}

function getAngles() {
  const currentDate = new Date()
  const MINUTE_SECOND_COEFF = 6
  const HOUR_COEFF = 30
  const ANGLE_FOR_SET_ZERO = 90
  const hourAngle =
    HOUR_COEFF * (currentDate.getHours() - 12) +
    ANGLE_FOR_SET_ZERO +
    currentDate.getMinutes() * 0.2
  const minuteAngle =
    MINUTE_SECOND_COEFF * currentDate.getMinutes() +
    ANGLE_FOR_SET_ZERO +
    currentDate.getSeconds() * 0.1
  const secondAngle =
    MINUTE_SECOND_COEFF * currentDate.getSeconds() + ANGLE_FOR_SET_ZERO
  return { hourAngle, minuteAngle, secondAngle }
}
