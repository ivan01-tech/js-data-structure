function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null
  this.size = 0
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0
}

SinglyLinkedList.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SinglyLinkedListNode(value)
  }
  else {
    const temp = this.head
    const newListItem = new SinglyLinkedListNode(value)
    newListItem.next = temp
    this.head = newListItem
  }
}

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
// console.log(sll1.head)
let pointer = sll1.head
while (pointer.next != null) {
  console.log(pointer.data)
  pointer = pointer.next
}
