class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList() {
    const arrayList = []
    let currentNode = this.head
    while (currentNode !== null) {
      arrayList.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(arrayList)
  }
}

const linkedlist = new LinkedList(15)
linkedlist
  .append(5)
  .append(52)
  .append(12)
  .append(20)
  .prepend(1)
  .printList()
// console.log(linkedlist)