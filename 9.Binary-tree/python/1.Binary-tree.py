import json


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None
        self.displayData = None

    def insert(self, value):
        newNode = Node(value)
        if self.root is None:
            self.root = newNode
            return True
        currentNode = self.root
        while currentNode:
            if value < currentNode.value:
                if currentNode.left is None:
                    currentNode.left = newNode
                    return self
                currentNode = currentNode.left
            else:
                if currentNode.right is None:
                    currentNode.right = newNode
                    return self
                currentNode = currentNode.right
        self.displayData = self.root
        return self

    def lookup(self, value):
        if self.root is None:
            return False
        currentNode = self.root
        while currentNode:
            if value < currentNode.value:
                currentNode = currentNode.left
            elif value > currentNode.value:
                currentNode = currentNode.right
            elif currentNode.value == value:
                self.displayData = currentNode
                return self

    def display(self):
        if self.displayData is None:
            print("No data to display")
            return False
        else:
            root = self.displayData
            convert = json.dumps(self.displayData.__dict__)
            print(convert)
            return True


tree = BinaryTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.display()

tree.lookup(1).display()
