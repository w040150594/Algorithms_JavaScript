// 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

// 示例: 输入: nums = [1,2,3]
// 输出:
// [
// [3],
// [1],
// [2],
// [1,2,3],
// [1,3],
// [2,3],
// [1,2],
// []
// ]

const subsets = function (nums) {
  const len = nums.length;
  const res = [];
  const subset = [];
  const dfs = index => {
    res.push(subset.slice());

    for (let i = index; i < len; i++) {
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
    }
  };
  dfs(0);

  return res;
};
// 测试
console.log(subsets([1, 2, 3]));
