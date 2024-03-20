function repeat(fn, count, wait) {
  return function cb(...args) {
    const timer = setTimeout(() => {
      fn(...args);
      count--;

      if (count > 0) cb(...args);
    }, wait);
  };
}

function repeat1(func, times, delay) {
  function one(args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        func.call(this, ...args);
        resolve();
      }, delay);
    });
  }
  return async function (...args) {
    for (let i = 1; i <= times; i++) {
      await one(...args);
    }
  };
}

const repeatLog = repeat1(console.log, 5, 1000);
repeatLog('hello world');

const test = repeat(console.log, 5, 1000);
console.log(test('1'));
