
export const create = (tag, className) => {
  const elt = document.createElement(tag)
  if (className) elt.classList.add(className)
  return elt
}