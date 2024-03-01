// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

const fib = function (n) {
  if (n < 2) return n;

  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    const sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }

  return dp[1];

  // const dp = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }

  // return dp[n];

  // return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};
