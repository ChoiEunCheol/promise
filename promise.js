// Promise를 사용하여 JSON 데이터 가져오는 함수
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          reject('네트워크 오류');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// fetchData 함수 사용 예제
fetchData()
  .then(data => {
    console.log('Promise로 가져온 데이터:', data);
  })
  .catch(error => {
    console.error('에러:', error);
  });
