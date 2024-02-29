// 题目描述：给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：
// 输入: "cbbd"
// 输出: "bb"

const longestPalindrome = function (s) {
  const len = s.length;
  let maxLen = 0;
  let res = '';

  const expendCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        res = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < len; i++) {
    // 奇数情况
    expendCenter(i, i);
    // 偶数情况
    expendCenter(i, i + 1);
  }

  return res;
};
