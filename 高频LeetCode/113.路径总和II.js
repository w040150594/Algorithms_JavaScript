// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

// 示例 1：

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]
// 示例 2：

// 输入：root = [1,2,3], targetSum = 5
// 输出：[]
// 示例 3：

// 输入：root = [1,2], targetSum = 0
// 输出：[]

// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

const pathSum = function (root, sum) {
  const res = [];
  const path = [];
  let curSum = 0;

  const traverse = root => {
    if (!root) return;

    // 进入节点时处理
    path.push(root.val);
    curSum += root.val;
    // 叶子节点时处理
    if (root.left === null && root.right === null && curSum === sum) res.push(path.slice());

    traverse(root.left);
    traverse(root.right);
    // 离开节点时处理
    curSum -= root.val;
    path.pop();
  };
  traverse(root);

  return res;
};
