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
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
}

const linkedlist = new LinkedList(15)
linkedlist
  .append(5)
  .append(52)
  .append(12)
  .append(20)
  .prepend(1)
console.log(linkedlist)