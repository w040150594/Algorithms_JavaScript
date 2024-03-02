const arr = [
  {
    name: '可乐',
    categories: ['热门', '饮料']
  },
  {
    name: '苹果',
    categories: ['热门', '食物']
  },
  {
    name: '洗衣液',
    categories: ['生活用品']
  }
];

[
  { name: '热门', categories: ['可乐', '苹果'] },
  { name: '饮料', categories: ['可乐'] },
  { name: '食物', categories: ['苹果'] },
  { name: '生活用品', categories: ['洗衣液'] }
];

function changeArr(arr) {
  let map = new Map();
  for (const item of arr) {
    for (const categorie of item.categories) {
      if (map.has(categorie)) {
        map.get(categorie).push(item.name);
      } else {
        map.set(categorie, [item.name]);
      }
    }
  }

  return Array.from(map).map(([name, categories]) => ({ name, categories }));
}
console.log(changeArr(arr));
