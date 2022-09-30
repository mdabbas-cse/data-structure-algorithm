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

  insert(index, value) {
    // check index
    if (index === 0)
      return this.prepend(value)

    if (index >= this.length)
      return this.append(value)

    const newNode = new Node(value)
    const leader = this.#traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this
  }

  remove(index) {
    const leader = this.#traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this
  }

  #traverseToIndex(previusIndex) {
    let currentNode = this.head
    let counter = 0
    while (counter !== previusIndex) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  printList() {
    const arrayList = { data: {}, length: this.length }
    let currentNode = this.head
    let propertyId = 0
    while (currentNode !== null) {
      arrayList.data[propertyId] = currentNode.value
      currentNode = currentNode.next
      propertyId++
    }
    console.log(arrayList)
    return this
  }

}


console.clear()
const linkedlist = new LinkedList(15)
linkedlist
  .append(5)
  .append(52)
  .append(12)
  .append(20)
  .prepend(1)
  .insert(10, 99)
  .insert(0, 88)
  .insert(3, 77)
  .printList()
  .remove(2)
  .printList()
// console.log(linkedlist)