class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  // 添加和取时候如果存在,都要删除后重新插入
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);

    if (this.cache.size >= this.capacity) {
      let oldKey = this.cache.keys().next().value;
      this.cache.delete(oldKey);
    }

    this.cache.set(key, value);
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const cacheValue = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, cacheValue);
  }
  toString() {
    console.log('capacity', this.capacity);
    console.table(this.cache);
  }
}

const lruCache6 = new LRUCache(2);
lruCache6.put(1, 'first');
lruCache6.put(2, 'second');
lruCache6.get(1);
lruCache6.toString();
lruCache6.put(3, 'third');
lruCache6.toString();
