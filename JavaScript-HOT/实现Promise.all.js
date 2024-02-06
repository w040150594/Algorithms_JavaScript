/**
 * 得到一个新的Promise，该Promise的状态取决于params的执行
 * params是一个迭代器，包含多个Promise
 * 全部Promise成功，返回的Promise才成功，数据为所有Primsise成功的数据，并且顺序时按照传入的顺序排列
 * 只要有一个Promise失败，则返回的Pormise失败，原因是第一个Promise失败的原因
 * @param {iterator} proms
 */

Promise._all = iterObj => {
  if (!typeof iterObj === 'object' && iterObj !== null && typeof iterObj[Symbol[iterator]] !== 'function') {
    throw new TypeError(`${iterObj} is not a iterable`)
  }

  return new Promise((resolve, reject) => {
    const promises = [...iterObj]
    if (!promises.length) resolve([])

    const res = new Array(promises.length)
    let count = 0

    promises.forEach(async (promise, index) => {
      try {
        const value = await promise
        res[index] = value
        if (++count === promises.length) resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  })
}

function test() {
  try {
    Promise._all(null).then(
      res => console.log(res),
      rej => console.log(rej)
    )
    // throw err: null is not iterable
  } catch (e) {
    console.log(e)
  }

  try {
    Promise._all({}).then(
      res => console.log(res),
      rej => console.log(rej)
    )
    // throw err: [object object] is not iterable
  } catch (e) {
    console.log(e)
  }

  Promise._all([]).then(
    res => console.log(res),
    rej => console.log(rej)
  )
  // []

  Promise._all(new Set()).then(
    res => console.log(res),
    rej => console.log(rej)
  )
  // []

  Promise._all(new Map()).then(
    res => console.log(res),
    rej => console.log(rej)
  )
  // []

  Promise._all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), 4]).then(
    res => console.log(res),
    rej => console.log(rej)
  )

  // [1, 2, 3, 4]

  Promise._all([Promise.reject(1), Promise.resolve(2), Promise.resolve(3), 4]).then(
    res => console.log(res),
    rej => console.log(rej)
  )
  // 1
}
test()
