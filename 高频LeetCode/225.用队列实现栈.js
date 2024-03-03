// es6 class 队列实现栈
class MyStack {
  constructor() {
    this.queue = [];
  }
  push(x) {
    this.queue.push(x);
    // 插入元素后，将前面的元素依次取出放到后面
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
    // 调换顺序
    // this.queue.reverse();
  }
  pop() {
    return this.queue.shift();
  }
  top() {
    return this.queue[0];
  }
  empty() {
    return this.queue.length === 0;
  }
}
// 测试
const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); // 2
console.log(stack.pop()); // 2
console.log(stack.empty()); // false
console.log(stack.pop()); // 1
console.log(stack.empty()); // true
