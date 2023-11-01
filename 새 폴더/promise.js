// 서버에 GET 요청을 보내고 응답을 처리하는 함수
function fetchDataFromServer(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const responseData = JSON.parse(xhr.responseText);
        resolve(responseData);
      } else {
        reject(new Error(`서버 응답 오류: ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error('네트워크 오류 발생'));
    };

    xhr.send();
  });
}

// 서버 요청 및 응답 처리
fetchDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    console.log('데이터 가져오기 성공:', data);
    // 여기에서 데이터를 가공하거나 추가 작업을 수행할 수 있습니다.
  })
  .catch(error => {
    console.error('데이터 가져오기 실패:', error);
  });