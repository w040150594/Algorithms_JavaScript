// 描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.
// 说明： 给定的 n 保证是有效的。

function ListNode() {
  this.val = null;
  this.next = null;
}
// 慢指针确定删除节点的前一个节点，快指针确定最后一个节点
const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  while (n !== 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};

// 测试
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

console.log(removeNthFromEnd(head, 2)); // 1->2->3->5
