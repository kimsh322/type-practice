const strArr = [
  "메이플",
  "스토리",
  "데미안",
  "스우",
  "루시드",
  "주황버섯",
  "윌",
  "더스크",
  "듄켈",
  "검은마법사",
  "메이플여신",
  "달팽이",
  "썬콜",
  "카인",
  "가엔슬",
  "카트라이더",
];

// 배열의 랜덤 요소를 인자로 전달하여 randomRender함수 실행
let randomStrRender = (arr) => {
  const idx = parseInt(Math.random() * arr.length);
  return randomRender(arr[idx]);
};
setInterval(randomStrRender, 2000, strArr);
