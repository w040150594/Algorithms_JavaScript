// 描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 示例: 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]

// 双指针法
const merge = (nums1, m, nums2, n) => {
  let right1 = m - 1,
    right2 = n - 1,
    right = m + n - 1;

  while (right1 >= 0 && right2 >= 0) {
    if (nums1[right1] >= nums2[right2]) {
      // 原地交换,不需要额外空间
      nums1[right] = nums1[right1];
      right1--;
      right--;
    } else {
      nums1[right] = nums2[right2];
      right2--;
      right--;
    }
  }
  // 如果nums2还有剩余,直接拷贝到nums1中
  while (right2 >= 0) {
    nums1[right] = nums2[right2];
    right2--;
    right--;
  }

  return nums1;
};
// 时间复杂度：O(m+n) 空间复杂度：O(1)

// js 数组方法
const merge1 = (nums1, m, nums2, n) => {
  nums1.splice(m, n, ...nums2);
  return nums1.sort((a, b) => a - b);
};
// 时间复杂度：O((m+n)log(m+n)) 空间复杂度：O(1)

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
