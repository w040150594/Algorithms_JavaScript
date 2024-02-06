// 根据不同的策略执行不同封装过后一般相对独立的操作
const strategies = {
  add: num => num + num,
  multiply: num => num * num
}
const calculateBonus = (type, num) => strategies[type](num)
console.log(calculateBonus('add', 3))
console.log(calculateBonus('multiply', 3))
