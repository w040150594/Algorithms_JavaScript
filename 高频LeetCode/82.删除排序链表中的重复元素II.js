// 描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
// 示例 1:
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3

// 创建dummy结点就是咱们人为制造出来的第一个结点的前驱结点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deleteDuplicates = head => {
  if (!head || !head.next) return head;
  let dummy = new ListNode();
  dummy.next = head;

  let cur = dummy;
  // cur后面至少有两个节点
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      // 保存相同值
      const val = cur.next.val;
      // 遍历检查之后还有没有相同的值,有则删除
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};
// 时间复杂度 O(n), 空间复杂度 O(1)
// 测试
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    }
  }
};
console.log(deleteDuplicates(head)); // 1 -> 2 -> 5
