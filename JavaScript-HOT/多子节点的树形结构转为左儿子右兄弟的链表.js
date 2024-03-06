const tree = {
  value: 0,
  children: [
    {
      value: 1,
      children: [
        { value: 3, children: [] },
        { value: 4, children: [] }
      ]
    },
    {
      value: 2,
      children: [{ value: 5, children: [] }]
    }
  ]
};

class Fiber {
  value = null; // 该节点的值
  child = null; // 它的子节点
  sibling = null; // 它的右兄弟节点
  return = null; // 它的父级节点

  constructor(value) {
    this.value = value;
  }
}

// 先对当前元素转为Fiber节点；
// 循环该节点的所有子元素，将当前元素转为Fiber节点，然后将第1个子节点指定为child，其他节点使用prevSibling临时属性进行链接；
// 对该节点的每个子元素进行递归，传入该元素（用于继续递归子元素）和该元素的fiber类型（用于形成链表结构）；

function treeTolink(tree) {
  let head = new Fiber(tree.value);

  const traverse = (node, pFiber) => {
    if (!node) return null;

    let preFiber = null;
    if (Array.isArray(node.children) && node.children.length) {
      node.children.forEach((child, index) => {
        const cFiber = new Fiber(child.value);
        cFiber.return = pFiber;

        if (index === 0) {
          pFiber.child = cFiber;
        } else {
          preFiber.sibling = cFiber;
        }

        preFiber = cFiber;
        traverse(child, preFiber);
      });
    }
  };
  traverse(tree, head);

  return head;
}

// 遍历链表结构
function traverse(fiber, parent = null) {
  if (!fiber) return;

  console.log(fiber.value);

  // 遍历当前 fiber 的子节点
  if (fiber.child) {
    traverse(fiber.child, fiber);
  }

  // 如果当前 fiber 不是其父节点的最后一个子节点，则遍历下一个兄弟节点
  if (parent && parent.child === fiber && parent.sibling) {
    traverse(parent.sibling, parent.return);
  }
}

console.log(treeTolink(tree));
console.log(traverse(treeTolink(tree)));
