function BinaryTreeNode(data) {

  this.left = null
  this.right = null
  this.data = data

}

function BinaryTree() {

  this.root = null

}

BinaryTree.prototype.traversePreOrder = function () {

  traversePreorderHelper(this.root)

  function traversePreorderHelper(node) {

    if (!node) return

    console.log(node.data)
    traversePreorderHelper(node.left)
    traversePreorderHelper(node.right)

  }


}