function print(i) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 1000);
  });
}

(async function time() {
  for (let i = 1; i < 6; i++) {
    await print(i);
  }
})();
