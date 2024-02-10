// 深拷贝
function isObject(val) {
  return typeof val === 'object' && val !== null;
}

// 递归实现
function deepClone(obj, hash = new WeakMap()) {
  // 基本类型
  if (!isObject(obj)) return obj;

  // 对象类型,先判断 hash 上有没有,防止死循环
  if (hash.has(obj)) return hash.get(obj);

  // 处理特殊对象类型
  const constructor = obj.constructor;
  if (/^(|Map|Set|RegExp|Date)$/i.test(constructor.name)) return new constructor(obj);

  // 处理数组和普通对象
  const target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);

  Reflect.ownKeys(obj).forEach(item => {
    if (isObject(item)) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });

  return target;
}

// 测试
let obj = {
  a: 1,
  b: {
    c: 2,
    array: [
      1,
      2,
      {
        item: 3
      }
    ]
  },
  e: new Date(),
  g: /a/g,
  h: new Map(),
  i: new Set()
};
obj.d = obj;
let obj2 = deepClone(obj);

console.log(obj2);
