// es6 class 用栈实现队列
class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  push(x) {
    this.s1.push(x);
  }
  pop() {
    if (this.s2.length === 0) {
      // 将s1中的元素全部弹出并压入s2
      while (this.s1.length > 0) this.s2.push(this.s1.pop());
    }
    // s2中弹出元素
    return this.s2.pop();
  }
  peek() {
    if (this.s2.length === 0) {
      // 将s1中的元素全部弹出并压入s2
      while (this.s1.length > 0) this.s2.push(this.s1.pop());
    }
    // s2中的栈顶元素
    return this.s2[this.s2.length - 1];
  }
  empty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}
// 测试
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 1
console.log(queue.pop()); // 1
console.log(queue.empty()); // false
console.log(queue.pop()); // 2
console.log(queue.empty()); // true
