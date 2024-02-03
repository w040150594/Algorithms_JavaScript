// 迭代(层序遍历)
function breadthFirstSearch(root) {
  if (!root) return []

  const res = []
  const queue = []

  queue.push(root)
  while (queue.length) {
    const node = queue.shift()
    res.push(node.val)

    if (!node.children) continue
    for (const child of node.children) {
      queue.push(child)
    }
  }

  return res
}

// 测试用例
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        { val: 'd' },
        { val: 'e' }
      ]
    },
    {
      val: 'c',
      children: [
        { val: 'f' },
        { val: 'g' }
      ]
    }
  ]
}
console.log(breadthFirstSearch(tree)) // [a, b, c, d, e, f, g];