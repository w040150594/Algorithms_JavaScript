// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1

let lengthOfLIS = function (nums) {
  // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
  let dp = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 寻找 nums[0..j-1] 中比 nums[i] 小的元素,z并且取最大值, 找到则更新 dp[i]等于 dp[j] + 1
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      // 得到 dp[i] 后, 更新 max
      max = Math.max(max, dp[i]);
    }
  }

  return max;
};
