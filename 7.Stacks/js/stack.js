class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  // this method always return top value from stack
  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }

  pop() {
    if (!this.top) return null
    if (this.bottom === this.top) this.bottom = null
    const holdingPointer = this.top
    this.top = this.top.next
    return this
  }
}
console.clear()
const stack = new Stack()
stack
  .push('facebook')
  .push('google')
  .pop()
  .pop()
console.log(stack.peek())


// console.log(stack)