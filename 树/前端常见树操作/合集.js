const list = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 }
];

const tree = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门2',
        pid: 1,
        children: []
      },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: [
              {
                id: 5,
                name: '部门5',
                pid: 4,
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '部门6',
    pid: 0,
    children: []
  }
];

const strarr = {
  'a-b-c-d': 1,
  'a-b-c-e': 2,
  'a-b-f': 3,
  'a-j': 4
};

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

// 树转列表(遍历树,将节点放入结果,如果有children则递归遍历children,将结果放入结果中)
function getList(data, result = []) {
  if (!data) return [];

  for (const node of data) {
    const { children, ...rest } = node;
    result.push(rest);

    if (children && children.length) getList(children, result);
  }

  return result;
}

// 计算树的深度(遍历树,找到叶子节点,更新最大深度)
function getDeep(tree) {
  let max = 0;

  const traverse = (node, level) => {
    if (!node) return;
    // 如果是叶子节点,更新最大深度
    if (node?.children.length === 0) max = Math.max(max, level);

    node?.children.forEach(child => {
      traverse(child, level + 1);
    });
  };

  tree?.forEach(node => {
    traverse(node, 1);
  });

  return max;
}

// 树形结构获取路径(遍历树,进入节点前加入节点路径,离开节点前节点路径,找到id,返回结果)
function getTreePath(tree, id) {
  const path = [];
  let res = '';

  const traverse = (node, path) => {
    if (!node) return;

    path.push(node.name);
    if (node.id === id) {
      res = path.join('->');
      return;
    }

    node?.children.forEach(child => {
      traverse(child, path);
      path.pop();
    });
  };

  tree?.forEach(node => {
    traverse(node, path);
  });

  return res;
}

// 对象字符串转对象(遍历字符串,根据-分割,遍历分割后的数组,最后一个直接赋值,否则判断是否存在,不存在则创建,指向下一层)
function strToObject(str) {
  if (!str) return {};

  let obj = {};

  for (let key in str) {
    let keys = key.split('-');

    let temp = obj;
    keys.forEach((item, index) => {
      // 如果是最后一个,直接赋值
      if (index === keys.length - 1) {
        temp[item] = str[key];
      } else {
        // 如果不是最后一个,则判断是否存在,不存在则创建
        temp[item] ??= {};
      }

      // 指向下一层
      temp = temp[item];
    });
  }

  return obj;
}

// 树筛选,(分解子问题)一个节点是否保留在过滤后的树结构中，取决于它自身以及后代节点中是否有符合条件的节点
function filterTree(tree, func) {
  if (!Array.isArray(tree) || tree.length === 0) {
    return [];
  }

  // 使用map复制一下节点，避免修改到原树
  return tree
    .map(node => ({ ...node }))
    .filter(node => {
      // 如果有子节点，遍历过滤子节点得到新的子节点
      if (node.children) node.children = filterTree(node.children, func);

      // 节点本身符合条件，或者它的子节点中有符合条件的节点，就保留
      if (func(node)) return true;
      if (node.children && node.children.length) return true;
    });
}

// 遍历转换将树节中没有 pid 的节点中添加 pid
function addPid(tree) {
  const traverse = (node, pid) => {
    if (!node) return;

    node.pid = pid;

    node?.children.forEach(child => {
      traverse(child, node.id);
    });
  };

  tree?.forEach(node => {
    traverse(node, 0);
  });

  return tree;
}

const tree1 = getTree(list);
console.log(tree1);
console.log(getList(tree1));
console.log(getDeep(tree1));
console.log(getTreePath(tree1, 6));
console.log(strToObject(strarr));
console.log(filterTree(tree1, node => node.id === 3));
console.log(addPid(tree1));
console.log(treeToFiber(tree1));
