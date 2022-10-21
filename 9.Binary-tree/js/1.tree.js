class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  // displayData = null
  constructor() {
    this.root = null
    this.displayData = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    }
    else {
      let currentNode = this.root
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
    this.displayData = this.root
    return this
  }

  lookup(value) {
    let currentNode = this.root
    while (currentNode) {
      if (value === currentNode.value) {
        this.displayData = currentNode
        return this
      } else if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      }
    }
    this.displayData = `${value} is not found!`
    return this
  }

  remove(value) {

  }

  display() {
    const data = JSON.stringify(this.displayData)
    console.log(data)
  }
}
// https://www.youtube.com/watch?v=80GhW9X1MGI&ab_channel=Codevolution
// https://www.youtube.com/watch?v=gcULXE7ViZw&ab_channel=mycodeschool
console.clear()
const binaryTree = new BinaryTree()
binaryTree.insert(9)
binaryTree.insert(4)
binaryTree.insert(20)
binaryTree.insert(1)
binaryTree.insert(6)
binaryTree.insert(15)
binaryTree.insert(170).display()
// console.log(JSON.stringify(binaryTree.root))
binaryTree.lookup(170).display()
