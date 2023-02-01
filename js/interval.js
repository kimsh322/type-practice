// 배열의 랜덤 요소를 인자로 전달하여 randomRender함수 실행
let randomStrRender = (arr) => {
  const idx = Math.round(Math.random() * arr.length);
  return randomRender(arr[idx]);
};
// 시작버튼 누르면 단어 나오기
const startButton = document.querySelector("#start-button");
let intervalRender;
startButton.onclick = () => {
  intervalRender = setInterval(randomStrRender, 2000, strArr);
};

// 인터발 중지
const stopInterval = document.querySelector("#stop-button");
stopInterval.onclick = () => {
  clearInterval(intervalRender);
};
