// 实现交通灯
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function blue() {
  console.log('blue');
}

function sleep(time) {
  return new Promise(resolve => {
    return setTimeout(resolve, time);
  });
}

// async function task() {
//   while (1) {
//     await sleep(1000);
//     red();
//     await sleep(2000);
//     blue();
//     await sleep(3000);
//     green();
//   }
// }
