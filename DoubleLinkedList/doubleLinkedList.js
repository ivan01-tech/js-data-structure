
function DoubleLinkListNode(data) {
  this.prev = null
  this.data = data
  this.next = null
}

function DoubleLinkList() {
  this.head = null
  this.size = 0
  this.tail = null
}

DoubleLinkList.prototype.isEmpty = function () {
  return this.size == 0
}
// insert an item in the head of list
DoubleLinkList.prototype.insertAtTheHead = function (value) {

  if (this.head === null) {

    this.head = new DoubleLinkListNode(value)
    this.tail = this.head

  }
  else {


    const newListItem = new DoubleLinkListNode(value)
    newListItem.next = this.head
    this.head.prev = newListItem
    this.head = newListItem
  }
  this.size++
}
// insert an item in the tail of list
DoubleLinkList.prototype.insertAtTheTail = function (value) {

  if (this.head === null) {

    this.tail = new DoubleLinkListNode(value)
    this.head = this.tail

  } else {

    const newListItem = new DoubleLinkListNode(value)
    newListItem.prev = this.tail
    this.tail.next = newListItem
    this.tail = newListItem

  }

  this.size++
}

DoubleLinkList.prototype.deleteAtTheHead = function () {
  if (this.head == null) {
    console.log('The list is empty')
    return null
  }

  const data = this.head.data
  if (this.head === this.tail) {
    this.head = null
    this.tail = null
  }
  else {
    this.head.next.prev = null
    this.head = this.head.next
  }

  this.size--
  return data

}


DoubleLinkList.prototype.deleteAtTheTail = function () {
  if (this.tail == null) {
    console.log('The list is empty')
    return
  }

  let data = this.tail.data
  if (this.tail == this.head) {
    this.tail = null
    this.head = null
  } else {
    this.tail.prev.next = null
    this.tail = this.tail.prev
  }

  this.size--
  return data

}

DoubleLinkList.prototype.searchByHead = function (value) {
  if (this.head == null) return false

  let pointer = this.head
  do {

    if (pointer.data == value) return true
    pointer = pointer.next

  } while (pointer != null)

  return false
}

DoubleLinkList.prototype.searchByTail = function (value) {
  if (this.tail == null) return false

  let pointer = this.tail
  do {

    if (pointer.data === value) return true
    pointer = pointer.prev

  } while (pointer != null)

  return false
}

DoubleLinkList.prototype.printPropertyByTheHead = function () {

  console.log('By the head: Head: ', this.size)
  if (this.head == null) {
    console.log('The List is Empty')
    return
  }

  let pointer = this.head
  do {
    console.log(pointer.data)
    pointer = pointer.next

  } while (pointer != null)
}

DoubleLinkList.prototype.printPropertyByTheTail = function () {
  console.log('By the tail: TAIL', this.size)
  if (this.tail == null) {
    console.log('The List is Empty')
    return
  }

  let pointer = this.tail
  do {
    console.log(pointer.data)
    pointer = pointer.prev

  } while (pointer != null)
}

// --------------------------- HELPER FUNCTION ----------------






// -----------------------------------------------------------

var sll1 = new DoubleLinkList();
sll1.insertAtTheHead(100);
sll1.insertAtTheHead(17);
sll1.insertAtTheHead(16);
sll1.insertAtTheHead(13);
// console.log([1, 2, 3].includes(2))
// sll1.printPropertyByTheHead()
// sll1.deleteDuplicateItem()
// console.log('first')
sll1.printPropertyByTheHead()


// console.log(sll1.searchByTail(17))
// console.log(sll1.searchByHead(100))
// console.log(sll1.searchByTail(1))
// // sll1.printPropertyByTheTail()
// // console.log('\n', sll1.deleteAtTheHead())

// sll1.insertAtTheTail(11);
// sll1.insertAtTheTail(12);
// sll1.insertAtTheTail(20);
// sll1.printPropertyByTheHead()
// // sll1.printPropertyByTheTail()
// console.log('\n', sll1.deleteAtTheTail())
// console.log('\n', sll1.deleteAtTheTail())
// console.log('\n', sll1.deleteAtTheTail())
// console.log('\n', sll1.deleteAtTheTail())
// console.log('\n', sll1.deleteAtTheHead())
// console.log('\n', sll1.deleteAtTheHead())
// console.log('\n', sll1.deleteAtTheHead())
// // console.log('\n', sll1.deleteAtTheHead())

// sll1.printPropertyByTheHead()
