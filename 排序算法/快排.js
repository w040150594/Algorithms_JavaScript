// 快速排序
const quickSort = arr => {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  // 从数组中取出我们的"基准"元素
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// test
const arr = [85, 24, 63, 45, 17, 31, 96, 50];
console.log(quickSort(arr)); // [17, 24, 31, 45, 50, 63, 85, 96]
