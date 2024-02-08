const debounce = (fn, delay) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// 测试node环境
const test = debounce(() => console.log('防抖'), 2000);
let time = setInterval(() => {
  test();
}, 1000);

setTimeout(() => {
  clearInterval(time);
}, 3000);
