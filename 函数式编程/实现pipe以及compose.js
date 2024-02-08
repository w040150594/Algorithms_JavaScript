// pipe, 从左到右执行
function pipe(...funcs) {
  if (funcs.length === 0) return arg => arg;
  if (funcs.length === 1) return funcs[0];

  return value => funcs.reduce((value, funcN) => funcN(value), value);
}

// compose, 从右到左执行
function compose(...funcs) {
  if (funcs.length === 0) return arg => arg;
  if (funcs.length === 1) return funcs[0];

  return value => funcs.reduceRight((value, funcN) => funcN(value), value);
}

// test
const add = x => x + 1;
const multi = x => x * 2;
const addThenMulti = pipe(add, multi);
const multiThenAdd = compose(add, multi);
console.log(addThenMulti(2)); // 6
console.log(multiThenAdd(2)); // 5
