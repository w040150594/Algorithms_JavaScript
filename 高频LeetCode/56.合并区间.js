// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

const merge = function (intervals) {
  const res = [];
  // 按区间的 start 升序排列
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  // 先将第一个区间放入 res 中
  res.push(intervals[0]);
  // 遍历区间
  for (let i = 1; i < intervals.length; i++) {
    // 后一个区间
    const curr = intervals[i];
    // 前一个区间
    const pre = res[res.length - 1];
    // 后一个区间的 start 小于等于前一个区间的 end，说明区间重叠
    if (curr[0] <= pre[1]) {
      // 更新前一个区间的 end, 取前一个区间的 end 和后一个区间的 end 的最大值
      pre[1] = Math.max(pre[1], curr[1]);
    } else {
      // 处理下一个待合并区间
      res.push(curr);
    }
  }
  return res;
};
