function format_with_substring(number) {
  // 数字转为字符串，并按照 .分割
  let arr = String(number).split('.');
  let int = arr[0] + '';
  let fraction = arr[1] || '';
  // 多余的位数
  let f = int.length % 3;
  // 获取多余的位数，f可能是0， 即r可能是空字符串
  let r = int.substring(0, f);
  // 每三位添加','金额对应的字符
  for (let i = 0; i < Math.floor(int.length / 3); i++) {
    r += ',' + int.substring(f + i * 3, f + (i + 1) * 3);
  }
  // 如果是余数0则去掉',',否则添加
  if (f === 0) r = r.substring(1);

  // 调整部分和小数部分拼接
  return r + (fraction ? '.' + fraction : '');
}
console.log(format_with_substring(12112123313.78));
