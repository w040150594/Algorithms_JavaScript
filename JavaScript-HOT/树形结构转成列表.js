const data = [
  {
    id: 1,
    text: '节点1',
    parentId: 0,
    children: [
      {
        id: 2,
        text: '节点1_1',
        parentId: 1
      }
    ]
  }
];

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

const flatData = getList(data);
console.log(flatData);
