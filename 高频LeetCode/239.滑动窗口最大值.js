// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例: 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

// 解释: 滑动窗口的位置
// ---------------
// [1 3 -1] -3 5 3 6 7
// 1 [3 -1 -3] 5 3 6 7
// 1 3 [-1 -3 5] 3 6 7
// 1 3 -1 [-3 5 3] 6 7
// 1 3 -1 -3 [5 3 6] 7
// 1 3 -1 -3 5 [3 6 7]

// 最大值分别对应：
// 3 3 5 5 6 7

// 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
const maxSlidingWindow = function (nums, k) {
  if (!nums || !nums.length) return [];

  const len = nums.length;
  const res = [];

  let left = 0;
  let right = k - 1;

  while (right < len) {
    const max = calMax(nums, left, right);
    res.push(max);
    left++;
    right++;
  }

  return res;
};

function calMax(arr, left, right) {
  let maxNum = arr[left];

  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) maxNum = arr[i];
  }

  return maxNum;
}

// 测试
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(maxSlidingWindow(nums, 3)); // 3 3 5 5 6 7
