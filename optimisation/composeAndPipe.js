/**
 * 
 * here we are using pointer free method that (every unary arguments that is pass to these unaries functions is not seing )
 * 
 */

/**
 * a function who helps us to make a composition of multiple functions by the right to left
 * @param  {...any} fns 
 * @returns Function
 */
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val)

/**
 * a function who helps us to make a composition of multiple functions by the left to right
 * @param  {...any} fns 
 * @returns Function
 */
const pipe = (...fns) => val => fns.reduce((prev, fn) => fn(prev), val)

const add2 = (num) => num + 2
const multBy2 = (num) => num * 2

console.log(compose(add2, multBy2)(2));
console.log(pipe(add2, multBy2)(2));
