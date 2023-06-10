class ManipulateArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    console.log(this.data[index])
  }

  push(item) {
    this.data[this.length] = item
    this.length++
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    this.#shiftItem(index)
    return item
  }

  replace(index, item) {
    this.data[index] = item
  }

  #shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}
const myArray = new ManipulateArray()
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push('!')
console.log(myArray)
// console.log(myArray.pop())
myArray.delete(1)
console.log(myArray)
myArray.replace(4, 5)
console.log(myArray)
myArray.get(0)