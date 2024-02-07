// 描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 示例 1: 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

const validPalindrome = s => {
  const len = s.length
  let left = 0,
    right = len - 1
  // 遍历直到左右不相等
  while (left < right && s[left] === s[right]) {
    left++
    right--
  }

  const isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }

  // 判断删除左边或者右边之后的字符串是否是回文
  if (isPalindrome(left + 1, right)) return true
  if (isPalindrome(left, right - 1)) return true

  return false
}
// 时间复杂度：O(n) 空间复杂度：O(1)
// 测试
console.log(validPalindrome('aba')) // true
console.log(validPalindrome('abca')) // true
