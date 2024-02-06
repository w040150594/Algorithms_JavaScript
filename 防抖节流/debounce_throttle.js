// 防抖节流的结合体: 在 delay 时间内，重新生成定时器(防抖)；但只要delay的时间到了，我必须要给用户一个响应(节流)

const debounceThrottle = (fn, delay) => {
  let timer = null
  let last = 0

  return (...args) => {
    const now = Date.now()
    // 节流
    if (now - last >= delay) {
      last = now
      fn(...args)
    } else {
      // 防抖
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }
}

// 测试node环境
const test = debounceThrottle(() => console.log('防抖节流'), 2000)
setInterval(() => {
  test()
}, 1000)
