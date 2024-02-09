// 实现 Promise.race
Promise._race = function (iterObj) {
  if (typeof iterObj !== 'object' && iterObj !== null && typeof iterObj[Symbol[iterator]] !== 'function') {
    throw new TypeError(`${iterObj} is not a iterable`);
  }

  return new Promise((resolve, reject) => {
    for (let item of iterObj) {
      Promise.resolve(item).then(resolve).catch(reject);
    }
  });
};

let p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(1);
  }, 100);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  });
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  });
});

Promise._race([p1, p2, p3])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
// 1
