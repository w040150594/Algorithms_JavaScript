// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推

// 类
class LazyManClass {
  constructor(name) {
    this.taskList = [];
    console.log(`Hi! This is ${name}!`);
    // 使用setTimeout(fn, 0)模拟异步
    setTimeout(() => {
      this.next();
    }, 0);
  }
  // 正常任务
  eat(food) {
    const fn = () => {
      console.log(`Eat ${food}~`);
      this.next();
    };
    this.taskList.push(fn);
    return this;
  }
  // sleepFirst方法是在任务列表的最前面插入一个任务
  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    this.taskList.unshift(fn);
    return this;
  }
  // sleep方法是在任务列表的最后面插入一个任务
  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    this.taskList.push(fn);
    return this;
  }

  next() {
    // 取出任务列表的第一个任务执行
    const fn = this.taskList.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// 测试
LazyMan('Hank');
LazyMan('Hank').sleep(3).eat('dinner');
LazyMan('Hank').eat('dinner').eat('supper');
LazyMan('Hank').sleepFirst(5).eat('supper');
