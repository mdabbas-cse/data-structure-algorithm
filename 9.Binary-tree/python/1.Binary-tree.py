from '0.Node' import Node

class BinaryTree:
  def __init__(self):
    self.root = None
  
  def insert(self, value):
    newNode = Node(value)
    if self.root is None:
      self.root = newNode
      return True
    currentNode = self.root
    while(True):
      if value < currentNode.value:
        if currentNode.left is None:
          currentNode.left = newNode
          return True
        currentNode = currentNode.left
      else:
        if currentNode.right is None:
          currentNode.right = newNode
          return True
        currentNode = currentNode.right



tree = BinaryTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

print(tree.root.left.left.value)