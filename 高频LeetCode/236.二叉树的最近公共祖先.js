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

const lowestCommonAncestor = function (root, p, q) {
  // 递归结束
  if (root == null || root == p || root == q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 左边没找到,全在右边
  if (left == null) return right;
  if (right == null) return left;

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
