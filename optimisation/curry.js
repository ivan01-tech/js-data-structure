/**
 * CURRIYING IN JS 
 * @param {Function} fns
 * @param {Number} arity
 * @returns Closure function
 */

function curry(fns, arity = null) {
  return function curried(...args) {
    if (args.length >= fns.length || arity) {
      return fns.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const add1 = curry(add)(1);
console.log(add1);
console.log(add1(7));
console.log(curry(add)(1, 2));
console.log(curry(multiply)(6, 9, 9));

const tab = [1, 7, 9, 6];
let x = 0;

console.log(
  tab
    .map(curry(add)(1))
    .map(curry(multiply)(5))
    .map(curry(divide)(100))
    .reduce(add, x)
);
