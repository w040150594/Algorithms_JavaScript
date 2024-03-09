function serial(ajaxArr) {
  ajaxArr.reduce((prev, next) => prev.then(() => next()), Promise.resolve());
}

// 测试
const ajax1 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('1秒后ajax1请求完毕');
      resolve(1);
    }, 1000);
  });
const ajax2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('2秒后ajax2请求完毕');
      resolve(2);
    }, 2000);
  });
const ajax4 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('4秒后ajax4请求完毕');
      resolve(4);
    }, 4000);
  });
const ajaxArr = [ajax1, ajax2, ajax4];
serial(ajaxArr);
// 1秒后ajax1请求完毕
// 再过2秒，ajax2请求完毕
// 再过4秒，ajax4请求完毕
