// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
// 示例 1:
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3

// 解题思路：遍历链表，如果当前节点的值和下一个节点的值相等，则删除下一个节点，否则继续遍历。
const deleteDuplicates = head => {
  let cur = head;

  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
};

const head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }
};

console.log(deleteDuplicates(head)); // 1 -> 2
