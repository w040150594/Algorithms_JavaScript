const sleep = (time = 0) => new Promise(resolve => setTimeout(resolve, time));

//  test
(async () => {
  console.log('start');
  await sleep(2000);
  console.log('end');
})();
