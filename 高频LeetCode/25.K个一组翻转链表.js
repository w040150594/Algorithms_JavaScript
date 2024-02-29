// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

// 示例 1：

// 输入：head = [1,2,3,4,5], k = 2
// 输出：[2,1,4,3,5]
// 示例 2：

// 输入：head = [1,2,3,4,5], k = 3
// 输出：[3,2,1,4,5]

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  const dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;
  let start = head;
  let end = head;
  // 截断后保存后续节点
  let next = head;

  while (next) {
    for (let i = 1; i < k && end; i++) {
      end = end.next;
    }
    if (!end) return dummy.next;

    // 保存后续节点后截断
    next = end.next;
    end.next = null;

    // 头尾翻转
    end = start;
    start = reverse(start);

    // 接头结尾
    pre.next = start;
    end.next = next;

    // 移步
    pre = end;
    start = next;
    end = next;
  }

  function reverse(head) {
    let pre = null;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }

  return dummy.next;
};
