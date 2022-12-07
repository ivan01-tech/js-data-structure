
function HashTable(size) {
  this.size = size
  this.count = 0
  this.Storage = new Array(size).fill(null)
}

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

HashTable.prototype.add = function (key, value) {
  const hashedIndex = this.hash(key)

  if (this.Storage[hashedIndex]) {
    let inserted
    for (let i = 0; i < this.Storage[hashedIndex].length; i++) {
      if (this.Storage[hashedIndex][i][key]) {
        this.Storage[hashedIndex][i][key] = value
        inserted = true
      }
    }
    if (!inserted) {
      this.Storage[hashedIndex].push({ key: value })
      this.count++

    }
  } else {
    this.Storage[hashedIndex] = [{ [key]: value }]
    this.count++
  }
}

HashTable.prototype.remove = function (key) {
  const hashedIndex = this.hash(key)
  if (!this.Storage[hashedIndex]) return

  let value = null

  for (let i = 0; i < this.Storage[hashedIndex].length; i++) {

    if (this.Storage[hashedIndex][i][key]) {

      value = this.Storage[hashedIndex][i][key]
      this.Storage[hashedIndex][i] = null
      this.count--

    }

  }
  this.Storage[hashedIndex] = this.Storage[hashedIndex].filter(Boolean)

  return value

}

HashTable.prototype.peek = function (key) {
  const hashedIndex = this.hash(key)

  if (!this.Storage[hashedIndex]) return null

  for (let i = 0; i < this.Storage[hashedIndex].length; i++) {
    if (this.Storage[hashedIndex][i][key]) {
      return value = this.Storage[hashedIndex][i][key]
    }

  }
  return null

}

HashTable.prototype.printProperty = function () {
  console.log(this.Storage);
  console.log("Array size: ", this.size);
  console.log("number of items in the structure : ", this.count);
}

const myHashTable = new HashTable(11)
myHashTable.add('name', 'Ivan')
myHashTable.add('password', 'ivanSilatsa')
myHashTable.add('girlFreind', 'IdunnoKnow')
myHashTable.printProperty()
myHashTable.peek('password')
console.log(myHashTable.peek('password'))
console.log(myHashTable.peek('passwor'))
console.log(myHashTable.remove('name'))
console.log('=======================')
myHashTable.printProperty()
