// the format of every single object in our SingleLinkedList
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

/**
 * A new instantce of the function will create a new head or pointer for a SingleLinkedList
 */
function SinglyLinkedList() {
  this.head = null
  this.size = 0
}

// return the number of elements in our List
SinglyLinkedList.prototype.size = function () {
  return this.size == 0
}
// just to print out every element in our list
SinglyLinkedList.prototype.printElement = function () {
  console.log('Printing Elements...')
  let pointer = this.head

  do {
    console.log('\t', pointer.data)
    pointer = pointer.next

  } while (pointer != null)

}
// to add a new item in the lis
SinglyLinkedList.prototype.insert = function (value) {

  if (this.head == null)
    this.head = new SinglyLinkedListNode(value)

  else {
    // const temp = this.head
    // const newListItem = new SinglyLinkedListNode(value)
    // newListItem.next = temp
    // this.head = newListItem

    const newListItem = new SinglyLinkedListNode(value)
    newListItem.next = this.head
    this.head = newListItem
  }

  this.size++
}

// to delete the first element in the list
SinglyLinkedList.prototype.deleteAtTheHead = function () {
  if (this.head == null) {
    console.log('The List is Empty')
    return
  }

  const data = this.head.data
  this.head = this.head.next
  this.size--
  return data
}

// to search any value in our list return true if it exist et false otherwise
SinglyLinkedList.prototype.search = function (value) {

  let pointer = this.head

  do {
    if (pointer.data == value)
      return true
    else
      pointer = pointer.next

  } while (pointer != null)

  return false
}

// to delete a value in our list
SinglyLinkedList.prototype.deleteByValue = function (value) {

  let pointer = this.head
  let prevPointer = null

  do {
    if (pointer.data == value) {
      let data = pointer.data

      if (prevPointer != null)
        prevPointer.next = pointer.next

      else
        this.head = pointer.next

      this.size--
      return data
    } else {
      prevPointer = pointer
      pointer = pointer.next
    }
  } while (pointer != null)

  return null
}

//-------------------------------- HELPER FUNCTION --------------------------

SinglyLinkedList.prototype.
  deleteDuplicateInASingleLinkList = function () {

    let pointer = this.head
    if (!pointer) return null

    let cahceData = []
    let prevPointer

    do {
      if (cahceData.includes(pointer.data)) {
        // if (!pointer.next) break
        const temp = pointer.next
        if (prevPointer)
          prevPointer.next = temp.next
        else prevPointer = temp.next

        pointer = temp.next
        prevPointer = temp
      }
    } while (pointer)
    return pointer
  }

function reverseList(singleLinkList) {

  if (singleLinkList.head === null) return
  let pointer = singleLinkList.head

  let prevPointer = null

  while (pointer) {

    let temp = pointer.next
    pointer.next = prevPointer
    prevPointer = pointer

    if (!temp) break

    pointer = temp

  }
  return pointer

}

//------------------------------------------------------------------


var sll1 = new SinglyLinkedList();
sll1.insert(100);
sll1.insert(17);
sll1.insert(16);
sll1.insert(13);
sll1.insert(11);
sll1.insert(12);
sll1.insert(20);
sll1.head = reverseList(sll1)

sll1.printElement()

// sll1.deleteByValue(20)
// sll1.printElement()
// sll1.deleteByValue(0)
// sll1.printElement()

// console.log(sll1.deleteAtTheHead())
// console.log(sll1.deleteAtTheHead())
// sll1.printElement()
// console.log(sll1.search(20))
// console.log(sll1.search(100))
// console.log(sll1.search(17))
