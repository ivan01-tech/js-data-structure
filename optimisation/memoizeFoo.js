/**
 a function to memoize some other function which manage  huge and expense operation (Primary need for recursion)
 * @param {Function} func 
 * @returns Function
 */

const memoize = (func) => {
  const cache = {}

  return (...args) => {
    const key = args.toString()
    if (key in cache) {
      console.log(cache[key], 'in cache')
      return cache[key]
    }
    const result = func(...args)
    cache[key] = result
    console.log(cache, 'newHere')
    return result
  }
}
// example
function fib(num) {
  if (num < 2) return num
  return fib(num - 1) + fib(num - 2)
}

const memoizeFib = memoize(fib)

