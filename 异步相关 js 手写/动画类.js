class Animition {
  constructor(dom) {
    this.dom = dom;
    this.queue = [];

    setTimeout(() => this.next());
  }

  moveTo(x, y, time) {
    // 生成动画,执行 time 毫秒,使用RequestAnimationFrame
    this.queue.push(() => {
      const startTime = new Date();

      const id = requestAnimationFrame(() => {
        let currenTime = new Date();
        // 执行动画逻辑
        if (currenTime - startTime >= time) {
          cancelAnimationFrame(id);
          this.next();
        } else {
          requestAnimationFrame(id);
        }
      });
    });
    return this;
  }

  delay(time) {
    this.queue.push(() => {
      setTimeout(() => {
        this.next();
      }, time);
    });
    return this;
  }
  next() {
    const fn = this.queue.unshift();
    if (fn) fn();
  }
}
