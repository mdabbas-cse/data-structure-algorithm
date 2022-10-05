class Stack {
  constructor() {
    this.array = []
  }

  // this method always return top value from stack
  peek() {
    return this.array[this.array.length - 1]
  }

  // this method always add value to top of stack
  push(value) {
    this.array.push(value)
    return this
  }

  // this method always remove top value from stack
  pop() {
    this.array.pop()
    return this
  }
}
const stack = new Stack()
console.clear()
stack.push('google')
stack.push('facebook')
stack.push('youtube')
stack.push('amazon')
stack.push('apple')
stack.push('microsoft')
stack.pop()
console.log(stack.peek())