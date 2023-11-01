const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.json());

app.post('/upload', (req, res) => {
  const jsonData = req.body;
  fs.writeFileSync('server-data.json', JSON.stringify(jsonData));
  res.send('JSON 파일이 서버에 업로드되었습니다.');
});

app.get('/download', (req, res) => {
  const data = JSON.parse(fs.readFileSync('server-data.json'));
  res.json(data);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
