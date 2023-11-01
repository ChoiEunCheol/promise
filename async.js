function asyncFunction(callback) {
    console.log('시작');
    setTimeout(function () {
      console.log('비동기 작업 완료');
      callback();
    }, 2000);
  }
  
  console.log('첫 번째');
  asyncFunction(function () {
    console.log('두 번째');
  });
  