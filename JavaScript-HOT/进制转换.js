// 实现 10 进制转任何进制

const baseConversion = (num, base) => {
  const stack = [];
  let result = '';

  while (num > 0) {
    // 余数入栈
    stack.push(num % base);
    // 商继续除,向下取整
    num = Math.floor(num / base);
  }

  while (stack.length) {
    result += stack.pop();
  }

  return result;
};

// 实现任何进制转 10 进制
const baseConversion2 = (num, base) => {
  let result = 0;
  let len = num.length;

  for (let i = 0; i < len; i++) {
    result += num[i] * Math.pow(base, len - i - 1);
  }

  return result;
};

// 测试
console.log(baseConversion(10, 2)); // 1010
console.log(baseConversion(10, 8)); // 12
console.log(baseConversion(10, 16)); // A(12)
console.log(baseConversion(10, 10)); // 10
console.log(baseConversion(64, 62)); // 12
console.log(baseConversion2('1010', 2)); // 10
console.log(baseConversion2('12', 8)); // 10
console.log(baseConversion2('12', 16)); // 10
console.log(baseConversion2('10', 10)); // 10
console.log(baseConversion2('12', 62)); // 64
