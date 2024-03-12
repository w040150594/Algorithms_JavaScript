function repeat(fn, count, wait) {
  return function cb(...args) {
    const timer = setTimeout(() => {
      fn(...args);
      count--;

      if (count > 0) cb(...args);
    }, wait);
  };
}

const test = repeat(console.log, 5, 1000);
console.log(test('1'));
