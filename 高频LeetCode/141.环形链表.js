// 描述：给定一个链表，判断链表中是否有环。

// 打标记法
const hasCycle = head => {
  while (head !== null) {
    if (head.flag === true) {
      return true;
    } else {
      head.flag = true;
      head = head.next;
    }
  }

  return false;
};

// 快慢指针法
const hasCycle1 = head => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// 哈希表法
const hasCycle2 = head => {
  const map = new Map();

  while (head !== null) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head, true);
      head = head.next;
    }
  }

  return false;
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

console.log(hasCycle(head)); // true
console.log(hasCycle1(head)); // true
console.log(hasCycle2(head)); // true
