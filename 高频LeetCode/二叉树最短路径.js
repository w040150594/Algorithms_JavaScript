const shortestDistance = function (root, p, q) {
  let lowestCA = lowerCommonAncestor(root, p, q);
  let pDis = [],
    qDis = [];
  getPath(lowestCA, p, pDis);
  getPath(lowestCA, q, qDis);
  return pDis.length + qDis.length;
};

//求最近公共祖先节点
const lowerCommonAncestor = function (root, p, q) {
  if (root == null || root == p || root == q) return root;
  let left = lowerCommonAncestor(root.left, p, q);
  let right = lowerCommonAncestor(root.right, p, q);
  if (left != null && right != null) return root;
  if (left == null) return root.right;
  if (right == null) return root.left;
};

//求两个节点到最近公共祖先节点的距离
const getPath = function (root, node, path) {
  path.push(root);
  let hasFound = false;
  if (root == node) {
    return true;
  }
  //先找左子树
  if (root.left != null) {
    hasFound = getPath(root.left, node, path);
  }
  //没找到，再找右子树
  if (!hasFound && root.right != null) {
    hasFound = getPath(root.right, node, path);
  }
  //没找到，说明不在这个节点
  if (!hasFound) path.pop();
  return hasFound;
};
