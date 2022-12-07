
export const sanitizeInput = (inputValue) => {
  const div = document.createElement('div')
  div.textContent = inputValue
  return div.innerHTML
}
