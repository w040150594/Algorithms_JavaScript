// 描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 纪录前驱当前和后序节点(保证能够继续遍历)，然后将当前节点指向前驱节点，然后前驱节点和当前节点都向后移动一位
const everseList = head => {
  let pre = null;
  let cur = head;

  while (cur !== null) {
    let next = cur.next;

    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
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

console.log(everseList(head)); // 5->4->3->2->1->null
