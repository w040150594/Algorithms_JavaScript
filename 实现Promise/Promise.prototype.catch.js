Promise.prototype.catch = function (onRejected) {
  // catch方法是then方法的语法糖
  return this.then(null, onRejected);
};
