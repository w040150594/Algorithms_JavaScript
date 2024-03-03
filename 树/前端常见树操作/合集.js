const provinceList = [
  {
    id: '1000',
    label: '湖北省',
    children: [
      {
        id: '1001',
        pid: '1000',
        label: '武汉',
        children: [
          { id: '100101', pid: '1001', label: '洪山区' },
          { id: '100102', pid: '1001', label: '武昌区' },
          { id: '100103', pid: '1001', label: '汉阳区' }
        ]
      },
      { id: '1020', pid: '1000', label: '咸宁' },
      { id: '1022', pid: '1000', label: '孝感' },
      { id: '1034', pid: '1000', label: '襄阳' },
      { id: '1003', pid: '1000', label: '宜昌' }
    ]
  },
  {
    id: '1200',
    value: '江苏省',
    label: '江苏省',
    children: [
      { id: '1201', pid: '1200', label: '南京' },
      { id: '1202', pid: '1200', label: '苏州' },
      { id: '1204', pid: '1200', label: '扬州' }
    ]
  }
];

// 列表形式
const list = [
  { id: '1000', pid: '0', name: '湖北省' },
  { id: '1001', pid: '1000', name: '武汉' },
  { id: '100101', pid: '1001', name: '洪山区' },
  { id: '100102', pid: '1001', name: '武昌区' },
  { id: '100103', pid: '1001', name: '汉阳区' },
  { id: '1020', pid: '1000', name: '咸宁' },
  { id: '1022', pid: '1000', name: '孝感' },
  { id: '1034', pid: '1000', name: '襄阳' },
  { id: '1003', pid: '1000', name: '宜昌' },
  { id: '1200', pid: '0', name: '江苏省' },
  { id: '1201', pid: '1200', name: '南京' },
  { id: '1202', pid: '1200', name: '苏州' },
  { id: '1204', pid: '1200', name: '扬州' }
];

const listToTreeFn = list => {
  // 建立了id=>node的映射
  let obj = list.reduce(
    // map-累加器，node-当前值
    (map, node) => ((map[node.id] = node), (node.children = []), map),
    // 初始值
    {}
  );
  return list.filter(node => {
    // 寻找父元素的处理：
    // 1. 遍历list：时间复杂度是O(n)，而且在循环中遍历，总体时间复杂度会变成O(n^2)
    // 2. 对象取值：时间复杂度是O(1)，总体时间复杂度是O(n)
    obj[node.pid] && obj[node.pid].children.push(node);
    // 根节点没有pid，可当成过滤条件
    return !node.pid;
  });
};
listToTreeFn(list);
console.log(list);
