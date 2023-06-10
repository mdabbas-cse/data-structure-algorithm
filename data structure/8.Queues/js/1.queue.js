/**
 * Queue implementation using Linked List
 * Queue is a FIFO data structure
 * |Facebook| 
 * |Google| 
 * |Amazon| 
 * |Microsoft| 
 * |Apple|
 */
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  // this method always return bottom/first insert value from queue
  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
  }

  dequeue() {
    if (!this.first) return null
    if (this.first === this.last) this.last = null
    const holdingPointer = this.first
    this.first = this.first.next
    this.length--
    return holdingPointer
  }

  isEmpty() {

  }
}

const queue = new Queue()
queue.enqueue('facebook')
queue.enqueue('google')
queue.enqueue('amazon')
queue.enqueue('microsoft')
queue.enqueue('apple')
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.peek())