// XHR을 사용하여 JSON 데이터 가져오는 함수
function fetchDataWithCallback(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        callback(null, data); // 에러가 없을 경우 데이터 전달
      } else {
        callback(xhr.statusText, null); // 에러 발생 시 에러 메시지 전달
      }
    };
  
    xhr.onerror = function () {
      callback('네트워크 오류', null); // 네트워크 오류 발생 시 에러 메시지 전달
    };
  
    xhr.send();
  }
  
  // fetchDataWithCallback 함수 사용 예제
  fetchDataWithCallback(function (error, data) {
    if (error) {
      console.error('에러:', error);
    } else {
      console.log('XHR로 가져온 데이터:', data);
    }
  });