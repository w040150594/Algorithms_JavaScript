const arr1 = [1, 2, 3, 4, 5],
  arr2 = [5, 6, 7, 8, 9];

// 交集
let intersection = arr1.filter(function (val) {
  return arr2.indexOf(val) > -1;
});

// 并集
let union = arr1.concat(
  arr2.filter(function (val) {
    return !(arr1.indexOf(val) > -1);
  })
);

// 补集 两个数组各自没有的集合
let complement = arr1
  .filter(function (val) {
    return !(arr2.indexOf(val) > -1);
  })
  .concat(
    arr2.filter(function (val) {
      return !(arr1.indexOf(val) > -1);
    })
  );

// 差集 数组arr1相对于arr2所没有的
let diff = arr1.filter(function (val) {
  return arr2.indexOf(val) === -1;
});

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('交集', intersection);
console.log('并集', union);
console.log('补集', complement);
console.log('差集', diff);
