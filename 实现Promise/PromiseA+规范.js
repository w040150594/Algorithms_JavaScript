const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

const runMicroTask = callback => {
  // globalThis是一个关键字，指代全局对象，浏览器环境为window，node环境为global
  if (globalThis.process?.nextTick) {
    process.nextTick(callback);
  } else if (globalThis.MutationObserver) {
    const p = document.createElement('p');
    const observer = new MutationObserver(callback);
    observer.observe(p, {
      childList: true // 观察该元素内部的变化
    });
    p.innerHTML = '1';
  } else {
    setTimeout(callback, 0);
  }
};

const isPromise = obj => !!(obj && typeof obj.then === 'function');

class MyPromise {
  constructor(executor) {
    this._state = PENDING; // 状态
    this._value = undefined; // 数据
    this._handlers = []; // 处理函数形成的队列
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve(data) {
    this._changeState(FULFILLED, data);
  }

  _reject(reason) {
    this._changeState(REJECTED, reason);
  }

  _changeState(newState, value) {
    // 状态一旦改变，就不再改变
    if (this._state !== PENDING) return;

    // 如果value是Promise，那么当前Promise的状态取决于value中promise的状态
    if (isPromise(value)) {
      value.then(this._resolve.bind(this), this._reject.bind(this));
      return;
    }

    this._state = newState;
    this._value = value;

    // executor中直接resolve()或reject()状态变化时候，执行队列中的处理函数
    this._runHandlers();
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._pushHandler(onFulfilled, FULFILLED, resolve, reject);
      this._pushHandler(onRejected, REJECTED, resolve, reject);

      this._runHandlers(); // 执行队列
    });
  }

  _pushHandler(executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject
    });
  }

  _runHandlers() {
    if (this._state === PENDING) return;

    while (this._handlers[0]) {
      this._runOneHandler(this._handlers.shift());
    }
  }

  _runOneHandler({ executor, state, resolve, reject }) {
    runMicroTask(() => {
      // 处理函数中的状态不匹配当前 promise 状态，不执行
      if (this._state !== state) return;

      // 假设处理函数并非一个函数,状态传递不变
      if (typeof executor !== 'function') {
        this._state === FULFILLED ? resolve(this._value) : reject(this._value);
        return;
      }

      //执行处理函数
      try {
        const result = executor(this._value);
        // 如果result是Promise，那么当前Promise的状态取决于result中promise的状态
        isPromise(result) ? result.then(resolve, reject) : resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  // ---------------------------------------------------------------------------------------------以上是PromiseA+实现
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onSettled) {
    return this.then(
      data => {
        onSettled();
        return data;
      },
      reason => {
        onSettled();
        throw reason;
      }
    );
  }

  static resolve(data) {
    if (data instanceof MyPromise) {
      return data;
    }

    return new MyPromise((resolve, reject) => {
      isPromise(data) ? data.then(resolve, reject) : resolve(data);
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(proms) {
    return new MyPromise((resolve, reject) => {
      try {
        const results = [];
        let count = 0;
        let fulfilledCount = 0;

        for (const p of proms) {
          let i = count;
          count++;
          MyPromise.resolve(p).then(data => {
            fulfilledCount++;
            results[i] = data;
            if (fulfilledCount === count) {
              resolve(results);
            }
          }, reject);
        }

        if (count === 0) resolve(results);
      } catch (error) {
        reject(error);
      }
    });
  }

  static allSettled(proms) {
    const ps = [];
    for (const p of proms) {
      ps.push(
        MyPromise.resolve(p).then(
          value => ({
            status: FULFILLED,
            value
          }),
          reason => ({
            status: REJECTED,
            reason
          })
        )
      );
    }

    return MyPromise.all(ps);
  }

  static race(proms) {
    return new MyPromise((resolve, reject) => {
      for (const p of proms) {
        MyPromise.resolve(p).then(resolve, reject);
      }
    });
  }
}
