function display(data) {
  console.log(JSON.stringify(data))
}

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
      this.#insertNode(this.root, newNode)
    }
    this.displayData = this.root
    return this
  }

  #insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left)
        root.left = newNode
      else
        this.#insertNode(root.left, newNode)
    } else {
      if (!root.right)
        root.right = newNode
      else
        this.#insertNode(root.right, newNode)
    }
  }

  lookup(root, value) {
    if (!root) return false
    if (value === root.value) {
      return true
    } else if (value < root.value) {
      return this.lookup(root.left, value)
    } else {
      return this.lookup(root.right, value)
    }
  }

  preOrder(root) {
    if (!root) return
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
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
// display(binaryTree.root)
// display(binaryTree.lookup(binaryTree.root, 29))
binaryTree.preOrder(binaryTree.root)
