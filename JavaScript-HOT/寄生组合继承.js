function inheritPrototype(son, father) {
  // 创建父类原型的一个副本
  let objProto = Object.create(father.prototype);
  // 增强对象
  objProto.constructor = son;
  // 指定对象
  son.prototype = objProto;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
function Son(name, age, skills) {
  Person.call(this, name, age);

  this.skills = skills;
}

inheritPrototype(Son, Person);
let son = new Son('Tom', 18, ['js', 'css']);
console.log(son);
console.log(son instanceof Person); // true
console.log(son instanceof Son); // true
