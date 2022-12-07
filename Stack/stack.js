/**
 * A basic implementation of Stack data structure in JS
 * provide methods are push, pop, peek, size
 */

function Stack() {
  this.storage = {}
  this.count = 0
}

Stack.prototype.printPropPerty = function () {

  console.log("\ncount: ", this.size())
  console.log("Storage: ", this.storage, '\n')

}

Stack.prototype.push = function (value) {

  this.storage[this.count] = value
  this.count++
}

Stack.prototype.isEmpty = function () {
  return this.count == 0
}

Stack.prototype.peek = function () {
  return this.storage[this.count - 1]
}

Stack.prototype.size = function () {
  return this.count
}

Stack.prototype.pop = function () {

  if (this.count == 0) return undefined
  this.count--
  const value = this.storage[this.count]
  delete this.storage[this.count]

  return value
}

const myStack = new Stack()

myStack.push('ivan')
myStack.push('Carlos')
myStack.push('Sonia')
myStack.push(123)

console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(Object.length)
myStack.printPropPerty()


