const obj = {
  a: {
    b: 123
  },
  arr: [
    {
      demo: 'demo'
    }
  ]
};
function _get(source, path, defaultValue = undefined) {
  const keyList = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');

  const res = keyList.reduce((obj, key) => {
    return Object(obj)[key];
  }, source);

  return res ? res : defaultValue;
}

console.log(_get(obj, 'a.b', 123)); // 123
console.log(_get(obj, 'a.c', 123)); // 123
console.log(_get(obj, 'arr[0].demo', 123)); // 'demo'
