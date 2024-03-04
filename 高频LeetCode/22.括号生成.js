// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

// 1、一个「合法」括号组合的左括号数量一定等于右括号数量，这个很好理解。
// 2、对于一个「合法」的括号字符串组合 p，必然对于任何 0 <= i < len(p) 都有：子串 p[0..i] 中左括号的数量都大于或等于右括号的数量。
const generateParenthesis = function (n) {
  let res = [];
  let track = [];

  const backtrack = (left, right, track) => {
    if (left > right) {
      // 因为先消费的左边的，所以一定是左边的元素比右边的少
      return;
    }
    if (left < 0 || right < 0) {
      return;
    }
    if (left === 0 && right === 0) {
      res.push(track.slice().join(''));
      return;
    }

    track.push('(');
    backtrack(left - 1, right, track); // 做出了一个选择就消耗了一个左括号
    track.pop();

    track.push(')');
    backtrack(left, right - 1, track); // 做出了一个选择消耗了一个右括号
    track.pop();
  };

  backtrack(n, n, track);

  return res;
};
