function SingleDog() {
  this.name = 'SingleDog';
}
SingleDog.getInstance = (function () {
  let instance = null;

  return function () {
    if (!instance) {
      instance = new SingleDog();
    }
    return instance;
  };
})();
const t1 = SingleDog.getInstance();
const t2 = SingleDog.getInstance();
console.log(t1 === t2); // true;

class SingleDog1 {
  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog1();
    }
    return SingleDog.instance;
  }
}
const s1 = SingleDog1.getInstance();
const s2 = SingleDog1.getInstance();
console.log(s1 === s2); // true;
