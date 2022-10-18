class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    // check root node are empty
    if (!this.root) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
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
  }

  lookup(value) {
    if (!this.root) return false
    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (value === currentNode.value) {
        return currentNode
      }
    }
    return `"${value}" is not found!`
  }
}

console.clear()
const tree = new BinaryTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log('Binary tree: ')
const json = JSON.stringify(tree.root)
console.log(json)
console.log('Search Tree: ')
console.log(JSON.stringify(tree.lookup(3)))