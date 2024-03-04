// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * 解法一：边界模拟法
 * 思路：
 * 我们想象有一一个矩阵，从第一个元素开始，往右到底后再往
 * 下到底后再往左到底后再往上，结束这一-圈，进入下一圈螺旋。
 * 时间复杂度: O(mn)，相当于遍历整个矩阵.
 * 空间复杂度: 0(1)，res属于必要空间，没有使用额外辅助空间
 */

function spiralOrder(matrix) {
  const res = [];
  if (matrix.length === 0) return res;

  let left = 0;
  let right = matrix[0].length - 1;
  let up = 0;
  let down = matrix.length - 1;

  while (left <= right && up <= down) {
    // 从左到右遍历
    for (let i = left; i <= right; i++) res.push(matrix[up][i]);

    // 收缩上边界
    up++;
    if (up > down) break;
    // 从上到下遍历
    for (let i = up; i <= down; i++) res.push(matrix[i][right]);

    // 收缩右边界
    right--;
    if (left > right) break;
    // 从右到左遍历
    for (let i = right; i >= left; i--) res.push(matrix[down][i]);

    // 收缩下边界
    down--;
    if (up > down) break;
    // 从下到上遍历
    for (let i = down; i >= up; i--) res.push(matrix[i][left]);

    // 收缩左边界
    left++;
    if (left > right) break;
  }

  return res;
}
