const jsonp = ({ url, params, callbackName }) => {
  // 生成url
  const generateUrl = () => {
    let dataSrc = '';

    for (let [key, value] of Object.entries(params)) {
      dataSrc += `${key}=${value}&`;
    }

    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  };

  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script');
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);

    window[callbackName] = data => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
};

// 使用
jsonp({
  url: 'http://localhost:3000',
  params: { a: 1, b: 2 },
  callbackName: 'jsonp'
}).then(data => {
  console.log(data);
});
