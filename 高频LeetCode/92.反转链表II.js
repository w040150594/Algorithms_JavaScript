// 描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明: 1 ≤ m ≤ n ≤ 链表长度。

// 示例:
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

function ListNode() {
  this.val = null;
  this.next = null;
}

const reverseBetween = function (head, m, n) {
  const dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  // 找到m的前一个节点
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  // 保存m的前一个节点
  let leftHead = p;
  // 保存m的节点
  let start = p.next;

  // 反转m到n的节点
  let pre = leftHead.next;
  let cur = pre.next;
  for (let i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  // 处理m的前一个节点和m的节点
  leftHead.next = pre;
  start.next = cur;

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

console.log(reverseBetween(head, 2, 4)); // 1->4->3->2->5->null
