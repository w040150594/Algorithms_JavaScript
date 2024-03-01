// 本质上是一个then函数，不过不管是成功还是失败，都会执行onSettled,且onSettled不会改变状态
Promise.prototype.finally = function (onSettled) {
  return this.then(
    data => {
      onSettled(); // 实现了收不到参数了
      return data;
    },
    reason => {
      onSettled();
      throw reason;
    }
  );
};

const pro = new Promise((resolve, reject) => {
  resolve(1);
});
const pro2 = pro.finally(d => {
  console.log('finally', d); // 收不到d参数
  // 本身不改变状态，但是抛出一个错误，数据就会变成它的错误
  // throw 123;
  return 123; //不起作用
});
setTimeout(() => {
  console.log(pro2);
});
