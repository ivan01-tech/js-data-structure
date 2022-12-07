
export const select = (scope, target) => {
  return (scope || document).querySelector(target)
}