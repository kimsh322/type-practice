// const strArr = [
//   "오렌지",
//   "파인애플",
//   "사과",
//   "배",
//   "수박",
//   "체리",
//   "포도",
//   "딸기",
//   "복숭아",
//   "바나나",
//   "감",
//   "아보카도",
//   "멜론",
//   "블루베리",
//   "무화과",
//   "마카다미아",
// ];

// 배열의 랜덤 요소를 인자로 전달하여 randomRender함수 실행
let randomStrRender = (arr) => {
  const idx = Math.round(Math.random() * arr.length);
  return randomRender(arr[idx]);
};
const intervalRender = setInterval(randomStrRender, 2000, strArr);

// 인터발 중지
const stopInterval = document.querySelector("#stop");
stopInterval.onclick = () => {
  clearInterval(intervalRender);
};
