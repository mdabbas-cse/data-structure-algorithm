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


  // DFS traversal
  preOrder(root) {
    if (!root) return
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
  }

  inOrder(root) {
    if (!root) return
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  }

  postOrder(root) {
    if (!root) return
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.value)
  }

  // BFS traversal
  lavalOrder() {
    const queue = []
    queue.push(this.root)
    while (queue.length) {
      const node = queue.shift()
      console.log(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  // min value 
  min(root) {
    if (!root.left)
      return root.value
    else
      return this.min(root.left)
  }

  // max depth
  max(root) {
    if (!root.right)
      return root.value
    else
      return this.max(root.right)
  }

  remove(value) {

  }

  display() {
    const data = JSON.stringify(this.displayData)
    console.log(data)
  }
}
// https://www.youtube.com/watch?v=mrzE5SqzoQY&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=38&ab_channel=Codevolution
// https://www.youtube.com/watch?v=gcULXE7ViZw&ab_channel=mycodeschool
console.clear()
const binaryTree = new BinaryTree()
binaryTree.insert(9)
binaryTree.insert(5)
binaryTree.insert(15)
binaryTree.insert(3)
binaryTree.insert(7)
display(binaryTree.root)
// console.log(JSON.stringify(binaryTree.root))
// display(binaryTree.root)
// display(binaryTree.lookup(binaryTree.root, 29))
// binaryTree.preOrder(binaryTree.root)
// binaryTree.inOrder(binaryTree.root)
// binaryTree.postOrder(binaryTree.root)
// binaryTree.lavalOrder()
display(binaryTree.min(binaryTree.root))
display(binaryTree.max(binaryTree.root))
