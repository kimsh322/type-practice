// 화면의 랜덤한 위치에 문자열 넣는 함수
function randomRender(str) {
  const mainContainer = document.querySelector("#main-container");
  const mainContainerRect = mainContainer.getBoundingClientRect();
  const newDiv = document.createElement("div");
  const strLeng = 80; // 문자열 길이
  const strHeight = 20; // 문자열 높이
  let x, y;
  do {
    // 랜덤 위치 지정
    x = Math.random() * mainContainerRect.width;
    y = Math.random() * mainContainerRect.height;
  } while ( // 화면을 벗어나면 다시 위치지정
    x + strLeng >= mainContainerRect.width ||
    y + strHeight >= mainContainerRect.height
  );
  // 문자열 속성 정의
  newDiv.classList.add("random-str");
  newDiv.style.left = `${x}px`;
  newDiv.style.top = `${y}px`;
  newDiv.style.width = `${strLeng}px`;
  newDiv.style.height = `${strHeight}px`;
  newDiv.textContent = str;
  // 문자열 표시
  return mainContainer.appendChild(newDiv);
}

// 배열의 랜덤 요소를 인자로 전달하여 randomRender함수 실행하는 함수
let randomStrRender = (arr) => {
  const idx = Math.round(Math.random() * arr.length);
  randomRender(arr[idx]);

  // 단어 카운터 구현
  const verbNum = document.querySelector("#verb-num");
  const existingStr = Array.from(document.querySelectorAll(".random-str"));
  verbNum.textContent = existingStr.length;
  if (existingStr.length > 7) verbNum.classList.add("red");
  else verbNum.classList.remove("red");

  // 단어 카운터 10이상이면 Game over
  if (existingStr.length >= 10) {
    clearInterval(intervalRender); // interval 중지
    for (let el of existingStr) {
      el.remove(); // 화면에 단어 모두 제거
    }
    setCounter("Game Over");
  }
};
