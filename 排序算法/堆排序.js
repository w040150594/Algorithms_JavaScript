function heapSort(arr) {
  const n = arr.length;

  // 构建最大堆
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    // 从最后一个非叶子节点开始下沉
    heapify(arr, n, i);
  }

  // 逐步将堆顶元素与堆的最后一个元素交换，并调整堆
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 然后从堆顶开始下沉
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// 堆结构(优先级队列), 最大堆
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  swap(i, j) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  peek() {
    return this.queue[0];
  }
  insert(val) {
    this.queue.push(val);

    this.up(this.queue.length - 1);
  }
  delete(val) {
    if (this.isEmpty()) return 0;
    if (this.queue.length === 1) return this.queue.pop();

    this.swap(0, this.queue.length - 1);
    const max = this.queue.pop();
    this.down(0);
    return max;
  }
  up(i) {
    let parent = Math.floor(i / 2);

    if (parent >= 0 && this.queue[parent] < this.queue[i]) {
      this.swap(parent, i);
      this.up(parent);
    }
  }
  down(i) {
    const n = this.queue.length;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < n && this.queue[left] > this.queue[max]) max = left;
    if (right < n && this.queue[right] > this.queue[max]) max = right;

    if (max !== i) {
      this.swap(max, i);
      this.down(max);
    }
  }
}

// 测试
const priorityQueue = new PriorityQueue();
priorityQueue.insert(3);
console.log(priorityQueue.queue);
priorityQueue.insert(5);
console.log(priorityQueue.queue);
priorityQueue.insert(10);
console.log(priorityQueue.queue);
priorityQueue.insert(2);
console.log(priorityQueue.queue);
priorityQueue.insert(7);
console.log(priorityQueue.queue);
priorityQueue.insert(1);
console.log(priorityQueue.queue); // [10, 7, 3, 2, 5, 1]
console.log(priorityQueue.delete()); // 10
console.log(priorityQueue.queue); // [7, 5, 3, 2, 1]
console.log(priorityQueue.delete()); // 7
console.log(priorityQueue.queue); // [5, 2, 3, 1]
console.log(priorityQueue.delete()); // 5
console.log(priorityQueue.queue); // [3, 2, 1]
console.log(priorityQueue.delete()); // 3
console.log(priorityQueue.queue); // [2, 1]
console.log(priorityQueue.delete()); // 2
console.log(priorityQueue.queue); // [1]
console.log(priorityQueue.delete()); // 1
console.log(priorityQueue.queue); // []
