// 서버에 GET 요청을 보내고 응답을 처리하는 함수
function fetchDataFromServer(url, successCallback, errorCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
  
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const responseData = JSON.parse(xhr.responseText);
        successCallback(responseData);
      } else {
        errorCallback(new Error(`서버 응답 오류: ${xhr.status}`));
      }
    };
  
    xhr.onerror = function () {
      errorCallback(new Error('네트워크 오류 발생'));
    };
  
    xhr.send();
  }
  
  // 성공 콜백 함수
  function successHandler(data) {
    console.log('데이터 가져오기 성공:', data);
    // 여기에서 데이터를 가공하거나 추가 작업을 수행할 수 있습니다.
  }
  
  // 실패 콜백 함수
  function errorHandler(error) {
    console.error('데이터 가져오기 실패:', error.message);
  }
  
  // 서버 요청 및 응답 처리
  fetchDataFromServer(
    'https://jsonplaceholder.typicode.com/posts/1',
    successHandler,
    errorHandler
  );