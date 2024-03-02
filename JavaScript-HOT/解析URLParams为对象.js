function parseSearch(search) {
  const paramArr = search.split('?').slice(1).join('').split('&');
  let obj = {};
  paramArr.forEach(item => {
    let [key, val] = item.split('=');
    // 对于存在中文字符，需要通过encodeURIComponent进行处理
    key = decodeURIComponent(key);
    val = decodeURIComponent(val);

    // 如果key已经存在，且不是数组，需要转换为数组
    if (obj[key]) {
      obj[key] = Array.isArray(obj[key]) ? obj[key].push(val) : [obj[key], val];
    } else {
      obj[key] = val;
    }
  });

  return obj;
}

let search = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled=';
console.log(parseSearch(search));
