// 서버에 GET 요청을 보내고 응답을 처리하는 async 함수
async function fetchDataFromServer(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`서버 응답 오류: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error(`데이터 가져오기 실패: ${error.message}`);
    }
  }
  
  // 서버 요청 및 응답 처리
  (async () => {
    try {
      const data = await fetchDataFromServer('https://jsonplaceholder.typicode.com/posts/1');
      console.log('데이터 가져오기 성공:', data);
      // 여기에서 데이터를 가공하거나 추가 작업을 수행할 수 있습니다.
    } catch (error) {
      console.error(error.message);
    }
  })();

  // function 앞에 async를 붙이면 항상 promise를 반환함.
  // await 는 콜백함수가 실행되기를 기다렸다가 실행됨.