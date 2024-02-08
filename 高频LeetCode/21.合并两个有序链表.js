// 描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
// 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (l1, l2) => {
  let head = new ListNode();
  let cur = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  cur.next = l1 === null ? l2 : l1;
  return head.next;
};
// 时间复杂度：O(n) 空间复杂度：O(1)
// 测试
const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
};
const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};
console.log(mergeTwoLists(l1, l2)); // 1->1->2->3->4->4
