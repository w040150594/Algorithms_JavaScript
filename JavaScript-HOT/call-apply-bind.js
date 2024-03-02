Function.prototype.call = function (context, ...args) {
  if (typeof this !== 'function') throw new TypeError('Error');
  context ??= {};

  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
};
Function.prototype.apply = function (context, args) {
  if (typeof this !== 'function') throw new TypeError('Error');
  context ??= {};

  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
};

Function.prototype.bind = function (context, args) {
  if (typeof this !== 'function') throw new TypeError('Error');
  context ??= {};

  return function (...args2) {
    context.fn = this;
    let res = context.fn(...args, ...args2);
    delete context.fn;
    return res;
  };
};

// 测试
let obj = {
  name: 'obj'
};

function fn(...args) {
  console.log(this.name, args);
}

fn.call(obj, 1, 2, 3);
fn.apply(obj, [1, 2, 3]);
fn.bind(obj, 1, 2, 3)(4, 5, 6);
