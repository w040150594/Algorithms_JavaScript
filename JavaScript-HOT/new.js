function myNew(fn, ...args) {
  // 基于构造函数原型创建一个新对象
  let newObj = Object.create(fn.prototype);

  // this指向新创建的对象，并执行构造函数
  let res = fn.call(newObj, ...args);

  // 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
  return res instanceof Object ? res : newObj;
}

// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p = myNew(Person, 'Tom', 18);
console.log(p); // Person { name: 'Tom', age: 18 }
