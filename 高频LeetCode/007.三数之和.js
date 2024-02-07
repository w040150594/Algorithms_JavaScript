// 描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

// 求和变成求差,固定一个,移动另外两个
const threeSum = nums => {
  const res = []
  nums = nums.sort((a, b) => a - b)
  const len = nums.length

  // 倒数第三个位置为止
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1
    let right = len - 1
    if (i > 0 && nums[i] === nums[i - 1]) continue

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      } else {
        res.push([nums[i], nums[left], nums[right]])
        right--
        left++
        // 防止结果重复
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }

  return res
}
// 时间复杂度：O(n^2) 空间复杂度：O(1)
// 测试
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [ [-1, 0, 1], [-1, -1, 2] ]
