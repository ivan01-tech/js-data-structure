/*let person = {
  name: true,
  lastName: false
}

let person1 = {
  name: false,
}

Object.setPrototypeOf(person1, person)
console.log(person)
console.log(person1.__proto__ === person)
let person2 = {
  gender: 'male',
  __proto__: person1
}
console.log(person2)
console.log(person2.lastName)

let person4 = {
  class: 'L1',
  get classe() {
    return this.class
  }
}

console.log(person4.classe);

let f = function () {
  this.a = 1
  this.b = 2
}

let o = new f()
console.log(o)
f.prototype.a = 3
f.prototype.b = 12
console.log(o.__proto__.__proto__.__proto__)
console.log(o.__proto__)*/

function findTwoSum(array, sum) {
  var store = {};
  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    if (store[array[i]]) {
      return true;
    } else {
      store[sum - array[i]] = array[i];
      console.log(store);

    }
  }
  return false;
}

console.log(
  findTwoSum([1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2, 12, 25, 31, 23, 75, 81, 100, 6, 1, 2, 3, 4, 5, 1, 15, 10, 45, 27, 100], 100)

);