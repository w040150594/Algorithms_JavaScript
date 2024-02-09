// 实现 Promise.any
Promise._any = function (arr) {
  if (typeof iterObj !== 'object' && iterObj !== null && typeof iterObj[Symbol[iterator]] !== 'function') {
    throw new TypeError(`${iterObj} is not a iterable`);
  }

  return new Promise((resolve, reject) => {
    let len = arr.length;
    let count = 0;
    let errors = [];
    if (len === 0) resolve([]);

    for (let item of arr) {
      Promise.resolve(item)
        .then(resolve)
        .catch(err => {
          errors.push(err);
          if (++count === len) {
            reject(errors);
          }
        });
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

Promise._any([p1, p2, p3])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
// 3
