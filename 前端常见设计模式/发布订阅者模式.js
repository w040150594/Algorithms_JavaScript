class EventEmitter {
  constructor() {
    this.handlers = {};
  }
  //订阅事件
  on(eventName, cb) {
    this.handlers[eventName] ? this.handlers[eventName].push(cb) : (this.handlers[eventName] = [cb]);
  }
  //取消订阅
  off(eventName, cb) {
    this.handlers[eventName] = this.handlers[eventName].filter(callBack => callBack !== cb);
  }
  //发布事件
  emit(eventName, ...args) {
    // 避免在回调函数中修改原数组,故需要复制一份
    this.handlers[eventName] ? this.handlers[eventName].slice().forEach(cb => cb(...args)) : null;
  }
  //只订阅一次
  once(eventName, cb) {
    const wrapper = (...args) => {
      cb(...args);
      this.off(eventName, wrapper);
    };

    this.on(eventName, wrapper);
  }
}
// 测试
const emitter = new EventEmitter();
const callback = message => console.log(message);

emitter.on('greet', callback);

emitter.emit('greet', 'Hello, World!'); // 应该输出: Hello, World!

emitter.once('greetOnce', callback);
emitter.emit('greetOnce', 'Hello for the first time!'); // 应该输出: Hello for the first time!
emitter.emit('greetOnce', 'Hello for the second time!'); // 不应该有输出

emitter.off('greet', callback);
emitter.emit('greet', 'Hello again!'); // 不应该有输出
