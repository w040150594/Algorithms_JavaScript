// 递归
function deepFirstSearch(root) {
  if (!root) return [];

  const res = [];
  const dfs = (root) => {
    res.push(root.val);

    if (root.children) {
      for (const node of root.children) {
        dfs(node);
      }
    }
  };
  dfs(root);

  return res;
}

// 非递归
function deepFirstSearch1(root) {
  if (!root) return [];
  const res = [];
  const stack = [];

  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);

    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--)
        stack.push(node.children[i]);
    }
  }

  return res;
}

// 测试用例
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [{ val: "d" }, { val: "e" }],
    },
    {
      val: "c",
      children: [{ val: "f" }, { val: "g" }],
    },
  ],
};

console.log(deepFirstSearch(tree)); // [a, b, d, e, c, f, g]
console.log(deepFirstSearch1(tree)); // [a, b, d, e, c, f, g]
