const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일을 제공할 디렉토리 설정
app.use(express.static(path.join(__dirname, 'public')));

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
