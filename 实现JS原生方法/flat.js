const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];

Array.prototype.flat = function (deep = 1) {
  let res = [];
  deep--;
  for (const item of this) {
    if (Array.isArray(item) && deep > 0) {
      res = res.concat(item.flat(deep));
    } else {
      res.push(item);
    }
  }

  return res;
  // return this.reduce((acc, cur) => {
  //   return acc.concat(Array.isArray(cur) && deep > 1 ? cur.flat(deep - 1) : cur);
  // }, []);

  // return this.toString().split(',').map(Number);

  // 原生方法
  // return this.flat(deep);
};
console.log(arr.flat(2));
