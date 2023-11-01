// Fetch 및 콜백 함수로 JSON 데이터 가져오는 함수
function fetchDataWithCallback(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 오류');
      }
      return response.json();
    })
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
}

// fetchDataWithCallback 함수 사용 예제
fetchDataWithCallback(function (error, data) {
  if (error) {
    console.error('에러:', error);
  } else {
    console.log('Fetch로 가져온 데이터:', data);
  }
});
