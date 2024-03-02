function reverseURL(str) {
  let reversedStr = '';
  let temp = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '.') {
      reversedStr += temp + '.';
      temp = '';
    } else {
      temp = str[i] + temp;
    }
  }
  // 最后一个单词
  reversedStr += temp;

  return reversedStr;
}

// 时间复杂度O(n) 空间复杂度O(1)
// 测试
console.log(reverseURL('www.domain.test.com')); // com.domain.test.www
