/**
 * EACH ELEMENT IN OUR TREE WILL GOT THE SAME STRUCTURE AS FOLLOW
 */
class BinarySearchTreeNode {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }
}

/**
 * OUR BINARY SEARCH TREE CLASS
 */
class BinarySearchTree {
  constructor() {
    this.node = null
  }
  /**
   * A function which help to insert an element inside a binarySearchTree
   * @param {any} value
   * @returns null || undefined
   */
  insert(value) {

    if (this.node == null) {
      this.node = new BinarySearchTreeNode(value)
      return
    }

    BTSInsertHelper(this.node, value)

    function BTSInsertHelper(node, value) {
      if (node == null) {
        node = new BinarySearchTreeNode(value)
        return
      }

      if (node.data < value) {
        if (node.right == null) {
          node.right = new BinarySearchTreeNode(value)
          return
        }
        else
          BTSInsertHelper(node.right, value)

      } else if (node.data > value) {
        if (node.left == null) {
          node.left = new BinarySearchTreeNode(value)
          return
        }
        else
          BTSInsertHelper(node.left, value)

      }
      else
        return null
    }
  }
  // return true if a given element is present inside the BST
  isPresent(value) {

    function isPresentHelper(node, value) {

      if (node == null)
        return false

      if (node.data == value)
        return true

      else if (node.data < value) {
        return isPresentHelper(node.right, value)
      }
      else
        return isPresentHelper(node.left, value)

    }

    return isPresentHelper(this.node, value)

  }
  /**
   * a function that return the max value on a bianrySearchTree
   * @return any
   */
  findMax() {
    if (!this.node)
      return null

    let currentNode = this.node
    while (currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.data
  }
  findMin() {
    if (!this.node)
      return null

    let currentNode = this.node
    while (currentNode?.left) {
      currentNode = currentNode.left
    }

    return currentNode?.data
  }
  /**
   * A function to determine the min leaf length in a binary search tree , here we suppose that a tree with a single element have a Zero lenght.
   * @returns Number
   */
  findMinheight() {

    return findMinheightHelper(this.node)

    function findMinheightHelper(node) {
      if (!node)
        return -1
      const left = findMinheightHelper(node.left)
      const right = findMinheightHelper(node.right)

      if (left < right)
        return left + 1
      else
        return right + 1
    }

  }
  /**
   * A function to determine the max leaf length's in a binary search tree , here we suppose that a tree with a single element have a Zero lenght.
   * @returns Number
   */
  findMaxheightHelper() {

    return findMaxheightHelper(this.node)

    function findMaxheightHelper(node) {
      if (!node)
        return -1

      const left = findMaxheightHelper(node.left)
      const right = findMaxheightHelper(node.right)

      if (left < right)
        return right + 1
      else
        return left + 1
    }
  }

  /**
   * a function that helps to traverse the the binary tree regading to to preTraverse Method 
   * (first root , the left and finally the right)
   */

  preOrderTraversal() {
    if (!this.node) return

    var result = []

    function preOrderTraversalHelper(node) {
      if (!node) return
      result.push(node.data)
      node.left && preOrderTraversalHelper(node.left)
      node.right && preOrderTraversalHelper(node.right)

    }

    preOrderTraversalHelper(this.node)
    return result
  }
  // the left node then the actually node and finally the right node
  inOrderTravse() {
    if (!this.node) return

    let result = []
    function inOrderTraversalHelper(node) {
      if (!node) return
      node.left && inOrderTraversalHelper(node.left)
      result.push(node.data)
      node.right && inOrderTraversalHelper(node.right)
    }

    inOrderTraversalHelper(this.node)
    return result
  }

  // left , right , node
  postOrderTravse() {
    if (!this.node) return

    let result = []
    function postOrderTraversalHelper(node) {
      if (!node) return
      node.left && postOrderTraversalHelper(node.left)
      node.right && postOrderTraversalHelper(node.right)
      result.push(node.data)
    }

    postOrderTraversalHelper(this.node)
    return result
  }
  /**
   * A function to delete an element inside a Binary Search Tree
   * @param {any} value 
   * @returns Boolean
   *
  */
  removeElement(value) {

    function removeNodeHelper(node, value) {
      if (!node) return null
      if (node.data == value) {
        //In case that a node does'nt have a child
        if (node.right == null && node.left == null) {
          return null
        }
        // In case that the node only have one child
        if (node.left && !node.right) {
          return node.left

        }
        if (node.right && !node.left) {
          return node.right
        }

        // In case that the node have 2 children
        let tempNode = node.right
        while (tempNode.left) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        // TODO
        node.right = removeNodeHelper(node.right, tempNode.right)
        return node
      } else if (node.data < value) {
        node.right = removeNodeHelper(node.right, value)
        return node
      } else {
        node.left = removeNodeHelper(node.left, value)
        return node
      }
    }
    this.node = removeNodeHelper(this.node, value)
  }

}

const bts = new BinarySearchTree()
bts.insert(5289)
bts.insert(21)
bts.insert(0256)

console.log(bts.findMax());
console.log(bts.findMin());
console.log("post Order : " + bts.postOrderTravse());
bts.removeElement(256)
bts.removeElement(-1)
console.log(bts.isPresent(21))
console.log(bts.findMaxheightHelper())
console.log("pre Order: " + bts.preOrderTraversal());
console.log("in order: " + bts.inOrderTravse());

console.log("post Order : " + bts.postOrderTravse());
