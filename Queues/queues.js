/**
 * A function that implement a basic Queue data Strctures and proivde enqueue , dequeue , front , isEmpty, size to allow us perform some basic operation on it.
 */

function Queue() {

  this.Storage = {}
  this.count = 0
  this.pointer = 0
  this.indexCounter = 0

}

Queue.prototype.enqueue = function (value) {

  this.Storage[this.indexCounter] = value
  this.count++
  this.indexCounter++

}

Queue.prototype.dequeue = function () {
  if (this.count === 0) return undefined

  const dequeueValue = this.Storage[this.pointer]
  delete this.Storage[this.pointer]
  this.count--

  this.pointer = this.count === 0 ? 0 : this.pointer + 1
  this.indexCounter = this.count === 0 ? 0 : this.indexCounter

  return dequeueValue

}

Queue.prototype.front = function () {
  return this.Storage[this.pointer]
}

Queue.prototype.isEmpty = function () {
  return this.count == 0
}

Queue.prototype.printPropPerty = function () {
  console.log("\ncount: ", this.count)
  console.log("Storage: ", this.Storage, '\n')
}

const myStack = new Queue()

myStack.enqueue('Ivan')
myStack.enqueue('Carlos')
myStack.enqueue('Sonia')
myStack.enqueue(123)
myStack.printPropPerty()

console.log(myStack.dequeue())
console.log(myStack.front())
console.log(myStack.dequeue())
console.log(myStack.dequeue())
console.log(myStack.dequeue())
console.log(myStack.dequeue())
myStack.printPropPerty()

myStack.enqueue(12322)

myStack.printPropPerty()

