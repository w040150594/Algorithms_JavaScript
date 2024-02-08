// curry
const curry = (fn, ...args) => {
  return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args);
};

const add = (a, b, c) => a + b + c;
const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)); // 6
console.log(curryAdd(1, 2)(3)); // 6
console.log(curryAdd(1)(2, 3)); // 6
console.log(curryAdd(1, 2, 3)); // 6
