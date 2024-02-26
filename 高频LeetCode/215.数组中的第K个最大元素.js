// 题目描述：在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

// 示例 2: 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

// 说明:
// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

const findKthLargest = function (arr, k) {
  const n = arr.length;
  if (n === 1) return arr[n - k];

  // 构建最大堆
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  if (k === 1) return arr[0];

  // 取堆头元素
  let count = 0;
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
    if (++count === k) return arr[n - k];
  }
  if (k === n) return arr[0];
};

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (arr[left] > arr[largest] && left < n) largest = left;
  if (arr[right] > arr[largest] && right < n) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
