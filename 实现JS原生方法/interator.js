let arr = ['213', 'asd', 2, 3, 14];

Array.prototype._interator = function () {
  let i = 0;
  return {
    next: () => {
      return {
        value: this[i++],
        done: i < this.length ? false : true
      };
    }
  };
};

let b = arr._interator();
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
