// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
// 示例：
// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]
const permute = function (nums) {
  const len = nums.length;
  const res = [];
  const cur = [];
  const visited = {};

  const dfs = nth => {
    if (nth === len) res.push(cur.slice());

    for (let i = 0; i < len; i++) {
      // 处理还没有"占坑"的元素
      if (!visited[nums[i]]) {
        cur.push(nums[i]);
        visited[nums[i]] = 1;
        dfs(nth + 1);
        cur.pop();
        visited[nums[i]] = 0;
      }
    }
  };
  dfs(0);

  return res;
};
// 测试
console.log(permute([1, 2, 3]));
