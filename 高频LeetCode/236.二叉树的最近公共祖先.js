// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 示例 1：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出：3
// 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
// 示例 2：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 输出：5
// 解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
// 示例 3：

// 输入：root = [1,2], p = 1, q = 2
// 输出：1

// 函数表示：lowestCommonAncestor(root, p, q) root是一个二叉树的根节点，p和q是两个节点，返回p和q的最近公共祖先节点。
//如果一个节点能够在它的左右子树中分别找到 p 和 q，则该节点为 LCA 节点。
const lowestCommonAncestor = function (root, p, q) {
  // 如果root为空,找不到最近公共祖先
  if (root === null) return null;
  // 查找前如果找到p或者q,本身其本身就是最近公共祖先
  if (root === p || root === q) return root;

  // 在左右子树中分别查找p和q
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 左边没找到,说明公共祖先在右边
  if (left === null) return right;
  // 右边没找到,说明公共祖先在左边
  if (right === null) return left;
  // 如果一个节点能够在它的左右子树中分别找到 p 和 q，则该节点为 LCA 节点
  // 或者说如果发现 left 和 right 都非空，就说明当前节点是 LCA 节点
  return root;
};

// 遍历 + 哈希存储公共祖先
const lowestCommonAncestor1 = function (root, p, q) {
  // 存储每个节点的父节点
  const map = new Map();
  const set = new Set();

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();

    if (node.left) {
      map.set(node.left, node);
      stack.push(node.left);
    }
    if (node.right) {
      map.set(node.right, node);
      stack.push(node.right);
    }
  }
  // 存储p的所有父节点路径
  while (p) {
    set.add(p);
    p = map.get(p);
  }
  // 查找q的父节点路径中是否有p的父节点
  while (q) {
    if (set.has(q)) return q;
    q = map.get(q);
  }
  return null;
};
