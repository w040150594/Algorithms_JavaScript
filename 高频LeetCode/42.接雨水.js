// 题目描述：给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 示例：
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

// 蓄水量 由左侧最高柱子和右侧最高柱子中，较矮的那个柱子决定
const trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    if (leftHeight < rightHeight) {
      leftMax = Math.max(leftHeight, leftMax);
      res = res + leftMax - leftHeight;
      left++;
    } else {
      rightMax = Math.max(rightHeight, rightMax);
      res = res + rightMax - rightHeight;
      right--;
    }
  }

  return res;
};
