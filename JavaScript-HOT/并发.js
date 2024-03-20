// 现在有一个页面需要在页面初始化前对一批资源进行预请求，请实现预请求函数 preload，要求并发请求数量不超过 5 个，请求失败需要重试，单个资源最多重试 3 次，超出限制时抛出异常，并停止后续请求。
// 方法定义：
// preload(urls: string[]) => Promise<void>;

// 示例：
// preload([url1, url2, ...])
//   .then(() => {
//     // 预请求完成，开始初始化页面
//   })
//   .catch((error) => {
//     // 预请求失败
//   });

async function preload(urls) {
  /** 最大并行请求数 */
  const MAX_REQUEST_COUNT = 5;
  /** 重试次数限制 */
  const MAX_TRY_TIME = 3;
  /** 标识当前请求的链接序号 */
  let nextReqIndex = 0;
  /** 标识请求是否失败 */
  let isFailed = false;

  async function request(index, retry) {
    // 请求已完成
    if (isFailed || index >= urls.length) return;

    try {
      const res = await fetch(urls[index]);
      if (res.status !== 200) throw res;
    } catch (error) {
      if (retry < MAX_TRY_TIME) {
        return request(index, retry + 1);
      }

      isFailed = true;
      throw error;
    }
    return request(nextReqIndex++, 0);
  }

  const tasks = [];
  for (; nextReqIndex < MAX_REQUEST_COUNT; nextReqIndex++) {
    tasks.push(request(nextReqIndex, 0));
  }

  await Promise.all(tasks);
}
