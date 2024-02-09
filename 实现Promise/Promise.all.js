// 实现 Promise.all
Promise._all = iterObj => {
  if (typeof iterObj !== 'object' && iterObj !== null && typeof iterObj[Symbol[iterator]] !== 'function') {
    throw new TypeError(`${iterObj} is not a iterable`);
  }

  return new Promise((reslove, reject) => {
    const promises = Array.from(iterObj);
    const len = promises.length;
    if (len === 0) reslove([]);

    let count = 0;
    const res = [];
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          res[index] = value;
          if (++count === len) reslove(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};

// test
function test() {
  try {
    Promise._all(null).then(
      res => console.log(res),
      rej => console.log(rej)
    );
    // throw err: null is not iterable
  } catch (e) {
    console.log(e);
  }

  Promise._all([]).then(
    res => console.log(res),
    rej => console.log(rej)
  );
  // []

  Promise._all(new Set()).then(
    res => console.log(res),
    rej => console.log(rej)
  );
  // []

  Promise._all(new Map()).then(
    res => console.log(res),
    rej => console.log(rej)
  );
  // []

  Promise._all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), 4]).then(
    res => console.log(res),
    rej => console.log(rej)
  );

  // [1, 2, 3, 4]

  Promise._all([Promise.reject(1), Promise.resolve(2), Promise.resolve(3), 4]).then(
    res => console.log(res),
    rej => console.log(rej)
  );
  // 1
}
test();
