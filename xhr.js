// XHR을 사용하여 JSON 데이터 가져오기
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log('XHR로 가져온 데이터:', data);
  } else {
    console.error('에러:', xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error('네트워크 오류');
};

xhr.send();
