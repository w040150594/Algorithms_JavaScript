// 链式调用
// 核心是每个方法返回this实例，这样就可以一直调用下去
class math {
  constructor(initValue = 0) {
    this.value = initValue;
  }

  add(...args) {
    this.value = args.reduce((pre, cur) => pre + cur, this.value);
    return this;
  }
  minus(...args) {
    this.value = this.value - args.reduce((pre, cur) => pre + cur);
    return this;
  }
  times(timer) {
    this.value = timer * this.value;
    return this;
  }
  getVal() {
    return this.value;
  }
}

// test
const m = new math(2);
const val = m.add(2).minus(1).times(3).getVal();
console.log(val); // 9
