class ArrayNode {
  constructor() {
    this.length = 0
    this.data = []
  }

  //get data from array by index
  get(index) {
    return this.data[index]
  }

  // traverse array
  traverse() {
    console.log(this.data)
  }

  // insert data in array
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  // insert data in array first index
  unshift(item) {
    let tempLen = this.length
    while (tempLen > 0) {
      this.data[tempLen] = this.data[tempLen - 1]
      tempLen--
    }
    this.data[0] = item
    this.length++
  }

  // delete data in array last index
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  // delete data in array first index
  shift() {
    let tempLen = this.length - 1
    for (let i = 0; i < tempLen; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.length--
  }

  // delete data in array by index
  delete(index) {
    // [1,2,3,4,5,6,7,8,9]
    let tempLen = this.length - 1
    while (index < tempLen) { // 3 <= 8
      this.data[index] = this.data[index + 1]
      index++
    }
    this.length--
  }
}

const newArray = new ArrayNode()

newArray.push(1)
newArray.push(2)
newArray.push(3)
newArray.push(4)
newArray.push(5)
newArray.push(6)
newArray.push(7)
newArray.push(8)
newArray.push(9)
newArray.push(10)
newArray.push(11)
newArray.unshift(0)
newArray.pop()
// newArray.traverse()
console.log('after delete')
newArray.delete(3)
newArray.traverse()

