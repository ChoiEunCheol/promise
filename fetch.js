const { response } = require("express");

// fetch를 사용하여 JSON 데이터 가져오기
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // console.log(response.status);
    // Response {Symbol(realm): null, Symbol(state): Proxy, Symbol(headers): Headers}
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetch로 가져온 데이터:', data);
  })
  .catch(error => {
    console.error('에러:', error);
  });
