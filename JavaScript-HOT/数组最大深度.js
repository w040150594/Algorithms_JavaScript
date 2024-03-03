// 实现获取数组最大嵌套层数
// 递归
function getDeep(arr) {
  let max = 0;

  arr.forEach(item => {
    if (Array.isArray(item)) max = Math.max(max, getDeep(item) + 1);
  });
  return max;
}

let arr = [1, [2, [3, [4, [5]]]]];
console.log(getDeep(arr)); // 5
