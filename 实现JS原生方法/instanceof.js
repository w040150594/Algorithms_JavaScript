// 核心：判断对象的原型链上是否有指定的构造函数的原型
const myInstanceof = (left, right) => {
  if (!left) return false;

  return left._proto_ === right.prototype || myInstanceof(left._proto_, right);
};

function Person() {}
let p = new Person();
console.log(myInstanceof(p, Object)); //true
console.log(p instanceof Person); //true
