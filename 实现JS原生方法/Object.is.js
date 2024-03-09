// 实现 Object.is 方法

Object.is = function (x, y) {
  // 处理 +0 -0
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  }
  // 处理 NaN
  // if (x !== x && y !== y) {
  //   return true;
  // }
  if (isNaN(x) && isNaN(y)) return true;
  return x === y;
};

// 测试
console.log(Object.is(0, 0)); // true
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, '5')); // false
console.log(Object.is([], [])); // false
console.log(Object.is({}, {})); // false
