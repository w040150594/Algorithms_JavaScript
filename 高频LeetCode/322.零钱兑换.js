// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

// 示例 1：

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1
// 示例 2：

// 输入：coins = [2], amount = 3
// 输出：-1
// 示例 3：

// 输入：coins = [1], amount = 0
// 输出：0

// 1、确定 base case，显然目标金额 amount 为 0 时算法返回 0，因为不需要任何硬币就已经凑出目标金额了。
// 2、确定「状态」，也就是原问题和子问题中会变化的变量。由于硬币数量无限，硬币的面额也是题目给定的，只有目标金额会不断地向 base case 靠近，所以唯一的「状态」就是目标金额 amount。
// 3、确定「选择」，也就是导致「状态」产生变化的行为。目标金额为什么变化呢，因为你在选择硬币，你每选择一枚硬币，就相当于减少了目标金额。所以说所有硬币的面值，就是你的「选择」。
// 4、明确 dp 函数/数组的定义：输入一个目标金额 n，返回凑出目标金额 n 的最少硬币数量。
// 按照 dp 函数的定义描述「选择」，得到最终答案 dp(amount)。

const coinChange = function (coins, amount) {
  // let memo = new Array(amount + 1).fill(-666);

  // // dp 函数定义：输入一个目标金额 n，返回凑出目标金额 n 的最少硬币数量
  // function dp(coins, amount) {
  //   if (amount === 0) return 0;
  //   if (amount < 0) return -1;
  //   // 查备忘录，防止重复计算
  //   if (memo[amount] !== -666) return memo[amount];

  //   let res = Infinity;
  //   // 选择
  //   for (let coin of coins) {
  //     // 计算子问题的结果,给定 amount - coin 金额，返回凑出目标金额 n 的最少硬币数量
  //     let subProblem = dp(coins, amount - coin);
  //     // 子问题无解则,换下一个面值的硬币
  //     if (subProblem === -1) continue;
  //     // 在子问题中选择最优解，然后加上 1 枚硬币
  //     res = Math.min(res, subProblem + 1);
  //   }
  //   // 把计算结果存入备忘录
  //   memo[amount] = res === Infinity ? -1 : res;

  //   return memo[amount];
  // }

  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  // 遍历所有状态的所有取值
  for (let i = 0; i < dp.length; i++) {
    // 选择
    for (let coin of coins) {
      // 如果当前的硬币面值大于目标金额，则跳过
      if (i - coin < 0) {
        continue;
      }
      // 状态转移方程,dp[i] 等于当前的需要硬币数,和减去当前硬币面值的需要硬币数 + 1 的最小值
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] == amount + 1 ? -1 : dp[amount];
};
