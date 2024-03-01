// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23

// dp[i]表示以当前为结尾时最大的子数组和
const maxSubArray = function (nums) {
  const len = nums.length;
  const dp = [];
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = i; i < len; i++) {
    dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
    max = Math.max(max, dp[i]);
  }

  return max;
};
