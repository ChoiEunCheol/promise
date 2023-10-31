function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "데이터가 도착했습니다.";
        // resolve(data); // 데이터를 성공적으로 가져왔을 때
        reject("데이터 가져오기 실패"); // 데이터 가져오기를 실패했을 때
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
