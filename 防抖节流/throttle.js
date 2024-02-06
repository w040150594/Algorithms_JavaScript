// 时间戳版本
const throttle = (fn, interval) => {
  let last = 0;

  return (...args) => {
    const now = Date.now();

    if (now - last >= interval) {
      last = now;
      fn(...args);
    }
  };
};

// 定时器版
const throttle1 = (fn, interval) => {
  let timer = null;

  return (...args) => {
    // 如果定时器不存在,意味着已经达到了触发的时间,否则不触发
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, interval);
    }
  };
};

// 测试node环境
const test = throttle(() => console.log("时间戳版本"), 2000);
const test1 = throttle1(() => console.log("定时器版本"), 2000);
setInterval(() => {
  test();
}, 100);
setInterval(() => {
  test1();
}, 100);
