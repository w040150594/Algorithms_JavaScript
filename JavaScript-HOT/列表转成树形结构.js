const list = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 }
];

// 列表转树(遍历列表,先创建当前节点-有可能已经创建过则直接赋值chidren,再处理父节点,如果父节点还没遍历到则创建,如果之前已经创建过则直接赋值,父节点的children中加入当前节点)
function getTree(list) {
  const tree = [];
  // 用hashmap存储id=>{node, children:[]}的映射
  const hashmap = {};

  for (const item of list) {
    const { id, pid } = item;

    // 处理当前节点
    // 如果没创建就创建,如果之前已经创建过则直接赋值
    if (!hashmap[id]) hashmap[id] = { ...item, children: [] };
    else hashmap[id] = { ...item, children: hashmap[id].children };

    // 处理父节点
    if (pid === 0) {
      // 根节点直接放入list
      tree.push(hashmap[id]);
    } else {
      // 非根节点,如果父节点还没遍历到则创建
      if (!hashmap[pid]) {
        hashmap[pid] = {
          children: []
        };
      }
      // 父节点的children中加入当前节点
      hashmap[pid].children.push(hashmap[id]);
    }
  }

  return tree;
}
