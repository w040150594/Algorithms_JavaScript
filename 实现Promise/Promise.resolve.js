Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  return new Promise((resolve, reject) => {
    // 如果 value 是 thenable 对象，则包装成 Promise 对象并返回
    if (value && typeof value.then === 'function') value.then(resolve, reject);
    else resolve(value);
  });
};
