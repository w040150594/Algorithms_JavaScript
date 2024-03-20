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

// 原地排序
function quickSort1(arr) {
  const sort = (arr, left, right) => {
    if (left > right) return;

    let p = partition(arr, left, right);
    sort(arr, left, p - 1);
    sort(arr, p + 1, right);
  };
  sort(arr, 0, arr.length - 1);

  function partition(arr, left, right) {
    let pivot = arr[right];

    let p = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        swap(arr, p, i);
        p++;
      }
    }

    swap(arr, p, right);

    return p;
  }
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

// test
const arr = [85, 24, 63, 45, 17, 31, 96, 50];
// console.log(quickSort(arr)); // [17, 24, 31, 45, 50, 63, 85, 96]
console.log(quickSort1(arr));
