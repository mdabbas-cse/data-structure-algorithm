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
    // console.log('leader', leader.next)
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
    const arrayList = {}
    let currentNode = this.head
    let propertyId = 0
    while (currentNode !== null) {
      arrayList[propertyId] = currentNode.value
      currentNode = currentNode.next
      propertyId++
    }
    console.log(arrayList)
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
// console.log(linkedlist)