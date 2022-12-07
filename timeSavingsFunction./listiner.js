export const listen = (target, listener, type, option) => {
  target.addEventListener(type, listener, option)
}