// 递归
function postOrderTraversal(root) {
  const res = []

  const postOrderTraversalNode = root => {
    if (!root) return

    postOrderTraversalNode(root.left)
    postOrderTraversalNode(root.right)
    res.push(root.val)
  }
  postOrderTraversalNode(root)

  return res
}
// 非递归
function postOrderTraversal1(root) {
  if (!root) return []
  const res = []
  const stack = []

  stack.push(root)
  while (stack.length > 0) {
    const node = stack.pop()
    res.push(node.val)

    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return res.reverse()
}
// 测试
const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
}
console.log(postOrderTraversal(root)) // [2, 4, 5, 3, 1]
console.log(postOrderTraversal1(root)) // [2, 4, 5, 3, 1]
