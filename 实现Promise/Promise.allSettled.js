//实现 Promise.allSettled
Promise._allSettled = promises => {
  return new Promise((resolve, reject) => {
    let len = promises.length;
    let count = 0;
    let res = [];
    if (len === 0) resolve([]);

    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then(value => {
          res[i] = { status: 'fulfilled', value };
          if (++count === len) resolve(res);
        })
        .catch(reason => {
          res[i] = { status: 'rejected', reason };
          if (++count === len) resolve(res);
        });
    }
  });
};

// test
Promise._allSettled([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), 4]).then(
  res => console.log(res),
  rej => console.log(rej)
);
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 4 }
// ]

Promise._allSettled([Promise.reject(1), Promise.resolve(2), Promise.resolve(3), 4]).then(
  res => console.log(res),
  rej => console.log(rej)
);
// [
//   { status: 'rejected', reason: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 4 }
// ]
