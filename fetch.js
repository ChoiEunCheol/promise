fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
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