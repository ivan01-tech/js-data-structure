// to prevent multiple click in a button we can do like this
/**
 * clickMe()
 * button.disabled = true
 * setTimeout(function(){
 * button.disabled = false
 * }, delay)
 */

const clickMe = function () {
  console.log('clicked');
}
const initApp = function () {
  const button = document.querySelector('button')
  button.addEventListener('click', debounce(clickMe, 2000))
}
document.addEventListener('DOMContentLoaded', initApp)

/**
 * 
 * @param {Function} func 
 * @param {Number} delay 
 * @returns anonimous function that prevent a function to be call very soon or multiple times
 */
function debounce(func, delay) {
  let id
  console.log('call imediately !')
  return (...args) => {
    console.log('prev id' + id)
    if (id) clearInterval(id)
    id = setTimeout(() => {
      func(...args)
    }, delay);

  }
}