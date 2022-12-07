const clickMe1 = function () {
  console.log('clicked1');
}
const initApp1 = function () {
  const button = document.querySelector('button')
  button.addEventListener('click', throttle(clickMe1, 2000))
}
document.addEventListener('DOMContentLoaded', initApp1)

/**
 * a function which allow you to execute some others functions only after certain delay.
 * Not to confuse with debounce which execute a function after the end of an actions and delay
 * @param {Function} func 
 * @param {Number} delay 
 * @returns Function
 * 
 */
function throttle(func, delay) {
  let lastTime
  console.log('call imediately')
  return (...args) => {
    const now = new Date().getTime()
    if (now - lastTime < delay) return
    lastTime = now
    func(...args)

  }

}


