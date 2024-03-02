// 给你一棵二叉树的根节点 root ，请你判断这棵树是否是一棵 完全二叉树 。

// 在一棵 完全二叉树 中，除了最后一层外，所有层都被完全填满，并且最后一层中的所有节点都尽可能靠左。最后一层（第 h 层）中可以包含 1 到 2h 个节点。

// 示例 1：

// 输入：root = [1,2,3,4,5,6]
// 输出：true
// 解释：最后一层前的每一层都是满的（即，节点值为 {1} 和 {2,3} 的两层），且最后一层中的所有节点（{4,5,6}）尽可能靠左。
// 示例 2：

// 输入：root = [1,2,3,4,5,null,7]
// 输出：false
// 解释：值为 7 的节点不满足条件「节点尽可能靠左」。

// 层序遍历最后节点全是空
const isCompleteTree = function (root) {
  const queue = [root];
  let end = false;

  while (queue.length) {
    const count = queue.length;

    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node === null) {
        end = true;
      } else {
        if (end) return false;

        // 不用判空,node不为空时候才push
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  return true;
};
