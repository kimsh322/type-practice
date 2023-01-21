const mainContainer = document.querySelector("#main-container");
const mainContainerRect = mainContainer.getBoundingClientRect();

// 화면의 랜덤한 위치에 문자열 넣는 함수
function randomRender(str) {
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
  newDiv.style.position = "absolute";
  newDiv.style.left = `${x}px`;
  newDiv.style.top = `${y}px`;
  newDiv.style.width = `${strLeng}px`;
  newDiv.style.height = `${strHeight}px`;
  newDiv.style.backgroundColor = "gray";
  newDiv.textContent = str;
  // 문자열 표시
  return mainContainer.appendChild(newDiv);
}
