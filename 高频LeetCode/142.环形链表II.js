// 描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

// 打标记法
const detectCycle = head => {
  while (head !== null) {
    if (head.flag === true) {
      return head;
    } else {
      head.flag = true;
      head = head.next;
    }
  }

  return null;
};

// 快慢指针法
const detectCycle1 = head => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let p = head;
      while (p !== slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
  }

  return null;
};

// 哈希表法
const detectCycle2 = head => {
  const map = new Map();

  while (head !== null) {
    if (map.has(head)) {
      return head;
    } else {
      map.set(head, true);
      head = head.next;
    }
  }

  return null;
};

// 测试
const head = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: 4,
        next: null
      }
    }
  }
};
head.next.next.next.next = head.next;
console.log(detectCycle(head)); // { val: 2, next: { val: 0, next: { val: 4, next: null } } }
console.log(detectCycle1(head)); // { val: 2, next: { val: 0, next: { val: 4, next: null } } }
console.log(detectCycle2(head)); // { val: 2, next: { val: 0, next: { val: 4, next: null } } }
