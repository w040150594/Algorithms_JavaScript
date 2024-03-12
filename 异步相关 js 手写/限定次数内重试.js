function retryPromise(func, retries = 5) {
  return new Promise((resolve, reject) => {
    const attempt = n => {
      func()
        .then(resolve)
        .catch(err => (n > 1 ? attempt(n - 1) : reject(err)));
    };

    attempt(retries);
  });
}
