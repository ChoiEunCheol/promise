// async/await를 사용하여 JSON 데이터 가져오는 함수
async function fetchDataWithAsyncAwait() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    // console.log(response.json());
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// fetchDataWithAsyncAwait 함수 사용 예제
(async () => {
  try {
    const data = await fetchDataWithAsyncAwait();
    console.log('Async/await로 가져온 데이터:', data);
  } catch (error) {
    console.error('에러:', error);
  }
})();
