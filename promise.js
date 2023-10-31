// 데이터를 가져올 URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// fetch 함수를 사용하여 GET 요청 보내기
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 오류: ' + response.status);
    }
    console.log(response);
    return response.json(); // JSON 형식의 응답을 파싱
    
  })
  .then(data => {
    console.log('데이터 가져오기 성공:', data);
    console.log(data.title);
})
  .catch(error => {
    console.error('데이터 가져오기 실패:', error);
  });
