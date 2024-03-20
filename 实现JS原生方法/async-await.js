function getData(endpoint) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Data received from ${endpoint}`);
    }, 2000);
  });
}

// 生成器函数
function* generator() {
  const result1 = yield getData('Endpoint 1');
  console.log(result1);
  const result2 = yield getData('Endpoint 2');
  console.log(result2);
  return 'All data received';
}

// 自动执行器
function autoRun(generatorFn) {
  const g = generatorFn();

  try {
    return run(g.next());
  } catch (e) {
    return Promise.reject(e);
  }

  function run({ done, value }) {
    // 如果迭代器已经完成，直接返回结果
    if (done) return Promise.resolve(value);
    // 否则，继续执行迭代器
    return Promise.resolve(value)
      .then(res => run(g.next(res)))
      .catch(err => run(g.throw(err)));
  }
}

autoRun(getDataAsync).then(result => console.log(result));
