const mySqrt = function (x) {
  if (x < 2) return x;

  let left = 1;
  let right = x;
  let mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 如果没有找到,此时退出循环条件为 left > right，因为是向下取整，所以返回right
  return right;
};

console.log(mySqrt(8));
console.log(mySqrt(4));
console.log(mySqrt(9));
console.log(mySqrt(2501));
