// Promise를 사용하여 JSON 데이터 가져오는 함수
function fetchDataWithPromise() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 오류');
      }
      return response.json();
    });
}

// fetchDataWithPromise 함수 사용 예제
fetchDataWithPromise()
  .then(data => {
    console.log('Promise로 가져온 데이터:', data);
  })
  .catch(error => {
    console.error('에러:', error);
  });
