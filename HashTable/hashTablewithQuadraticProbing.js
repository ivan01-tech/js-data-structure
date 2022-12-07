/**
 * A Hash table data structure 
 * which use quadratic probing to fixe collision, 
 * this implementation provide  , get, put and delete methods to perform some basic operations on it
 
 * @param {Number} size 
 */
function HashTable(size) {

  this.size = size
  this.items = (new Array(size)).fill(null)
  this.limit = 0

}
HashTable.prototype.printProperty = function () {
  console.log(this.items);
  console.log("Array size: ", this.size);
  console.log("number of items in the structure : ", this.limit);
}

/**
 * this Hash function use Quadratic probing to solve collision in our HashTable
 * * Also it use the prime Number techmique to generate the index
 * @param {String Or Number} key 
 */
HashTable.prototype.hash = function (key) {
  let numberKey = 0

  if (Number.isInteger(key)) {
    numberKey = key
  }
  if (typeof key == 'string') {
    for (const i in key) {
      numberKey += key.charCodeAt(i)
    }
  } else throw new Error('Must be a string or a an Integer')

  console.log(numberKey % this.size, numberKey);
  return numberKey % this.size

}

HashTable.prototype.put = function (key, value) {

  if (this.limit >= this.size) throw new Error('the hash table is full')
  const hashedIndex = this.hash(key)

  // Quadratic probing
  let sqrtIndex = 1
  while (this.items[hashedIndex] != null) {
    hashedIndex = Math.pow(sqrtIndex, 2)

    hashedIndex = hashedIndex % this.size
    sqrtIndex++
  }

  this.items[hashedIndex] = { [key]: value }
  this.limit++
  console.log(key, 'convert to', hashedIndex, 'was successfully push inside the table')
}

HashTable.prototype.get = function (key) {

  const hashedIndex = this.hash(key)

  if (this.items[hashedIndex] == null) return console.log('this object does not exit !')

  let sqrtIndex = 1

  while (this.items[hashedIndex][key] == undefined && this.size >= hashedIndex) {

    hashedIndex = Math.pow(sqrtIndex, 2)
    hashedIndex = hashedIndex % this.size
    sqrtIndex++

  }

  return this.items[hashedIndex]

}

HashTable.prototype.delete = function (key) {

  const hashedIndex = this.hash(key)

  if (this.items[hashedIndex] == null) return console.log('this object does not exit !')

  let sqrtIndex = 1

  while (this.items[hashedIndex][key] == undefined && this.size >= hashedIndex) {

    hashedIndex = Math.pow(sqrtIndex, 2)
    hashedIndex = hashedIndex % this.size

  }

  this.items[hashedIndex] = null
  this.limit--

}

const myHashTable = new HashTable(11)
myHashTable.put('name', 'Ivan')
myHashTable.put('password', 'ivanSilatsa')
myHashTable.put('girlFreind', 'IdunnoKnow')
myHashTable.printProperty()
myHashTable.get('password')
console.log(myHashTable.get('password'))
console.log(myHashTable.get('passwor'))
console.log(myHashTable.delete('name'))
console.log('=======================')
myHashTable.printProperty()


