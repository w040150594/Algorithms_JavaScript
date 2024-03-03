function changeHumpToLowerCase(str) {
  // return str.replace(/([A-Z])/g, '_$1').toLowerCase();

  return str
    .split('')
    .map(ch => {
      return ch === ch.toLowerCase() ? ch : `_${ch.toLowerCase()}`;
    })
    .join('');
}

let str = 'fullName';
console.log(changeHumpToLowerCase(str)); // 打印结果为：full_name
