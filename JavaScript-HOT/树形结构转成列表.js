const data = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];

function flattenTree(data, result = []) {
  if (!data) return [];

  for (const node of data) {
    const { children, ...rest } = node;
    result.push(rest);

    if (children && children.length) flattenTree(children, result);
  }

  return result;
}

const flatData = flattenTree(data);
console.log(flatData);
