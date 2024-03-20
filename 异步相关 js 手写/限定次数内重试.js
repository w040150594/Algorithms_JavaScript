function retryPromise(func, retries = 5) {
  // return new Promise((resolve, reject) => {
  //   const attempt = n => {
  //     func()
  //       .then(resolve)
  //       .catch(err => (n > 1 ? attempt(n - 1) : reject(err)));
  //   };
  //   attempt(retries);
  // });

  // 改成 async await

  async function attempt(n) {
    try {
      return await func();
    } catch (err) {
      n > 1 ? await attempt(n - 1) : Promise.reject(err);
    }
  }

  return attempt(retries);
}
