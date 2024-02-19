// 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例: 输入: n = 4, k = 2
// 输出:
// [
// [2,4],
// [3,4],
// [2,3],
// [1,2],
// [1,3],
// [1,4],
// ]

const combine = function (n, k) {
  const res = [];
  const subset = [];

  const dfs = index => {
    if (subset.length === k) {
      res.push(subset.slice());
      // 减枝
      return;
    }

    for (let i = index; i <= n; i++) {
      subset.push(i);
      dfs(i + 1);
      subset.pop();
    }
  };
  dfs(1);

  return res;
};
// 测试
console.log(combine(4, 2));

// 题目中暗示了一个或多个解，并且要求我们详尽地列举出每一个解的内容时(不问解的内容，只问解的个数常常用递归)，一定要想到 DFS、想到递归回溯。可以转化为树形逻辑模型求解。

// function xxx(入参) {
//   前期的变量定义、缓存等准备工作
//   // 定义路径栈
//   const path = []
//   dfs(起点)
//   // 定义 dfs
//   dfs(递归参数) {
//     if(到达了递归边界) {
//       结合题意处理边界逻辑，往往和 path 内容有关
//       return
//     }

//     // 注意这里也可能不是 for，视题意决定
//     for(遍历坑位的可选值) {
//       path.push(当前选中值)
//       处理坑位本身的相关逻辑
//       path.pop()
//     }
//   }
// }
