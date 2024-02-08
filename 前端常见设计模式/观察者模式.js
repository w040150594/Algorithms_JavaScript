// 被观察者
class Observerd {
  constructor() {
    this.observerList = [];
  }
  // 添加观察者
  addObserver(Observer) {
    this.observerList.push(Observer);
  }
  // 移除观察者
  removeObserver(Observer) {
    this.observerList = this.observerList.filter(item => item !== Observer);
  }
  // 通知观察者
  notify() {
    this.observerList.forEach(Observer => Observer.update());
  }
}

class Observer {
  constructor(doSomo) {
    this.doSomo = doSomo;
  }
  update() {
    console.log(this.doSomo);
  }
}

const ob1 = new Observer('我是ob1');
const ob2 = new Observer('我是ob2');
const ob3 = new Observer('我是ob3');
const test = new Observerd();
test.addObserver(ob1);
test.addObserver(ob2);
test.addObserver(ob3);
test.removeObserver(ob2);
test.notify();
