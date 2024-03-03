// 题目描述：将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例: 给定有序数组: [-10,-3,0,5,9],
// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// 思路：二叉搜索树的中序遍历是升序序列，所以我们可以用二分法来构建二叉搜索树。

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sortedArrayToBST = function (nums) {
  //函数定义将有序数组 nums 从索引 start 到 end 转换为二叉搜索树
  const buildBST = (nums, start, end) => {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildBST(nums, start, mid - 1);
    root.right = buildBST(nums, mid + 1, end);

    return root;
  };
  return buildBST(nums, 0, nums.length - 1);
};

// 测试
const nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
