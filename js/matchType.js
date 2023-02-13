// 화면에 있는 글자를 입력하면 없어지는 기능 구현

// 총점수, 단어 한글자당 점수
let score = 0;
let oneLetterScore = 10;
const executed = [true, true, true, true]; // 속도 빨라질때 interval이 한 번만 바뀌도록하는 boolean 배열

// 인자로 받은 글자가 화면에 있으면 글자를 지우는 함수
function removeStr(str) {
  let idx = null;
  const scoreBox = document.querySelector("#score");
  // 지금 화면에 존재하는 단어를 배열로 받음
  const existingStr = Array.from(document.querySelectorAll(".random-str")); //querySelectorAll은 유사배열이라서 배열로 바꿔준다.
  // 배열을 돌면서 같은 글자가 있는지 확인
  for (let el of existingStr) {
    if (el.textContent === str) {
      idx = existingStr.indexOf(el); //글자가 있는 index값을 넣어준다.
      break;
    }
  }
  if (idx !== null) {
    // idx에 값이 있으면 지워준다.
    existingStr[idx].remove();
    // 단어 하나당 길이비례점수
    score += str.length * oneLetterScore;
    scoreBox.textContent = score;

    // 점수에 따라 단어생성 시간이 빨라지는 기능
    if (score > 200 && executed[0]) {
      clearInterval(intervalRender);
      intervalRender = setInterval(randomStrRender, 1600, strArr);
      executed[0] = false;
    }
    if (score > 500 && executed[1]) {
      clearInterval(intervalRender);
      intervalRender = setInterval(randomStrRender, 1200, strArr);
      executed[1] = false;
    }
    if (score > 1000 && executed[2]) {
      clearInterval(intervalRender);
      intervalRender = setInterval(randomStrRender, 1000, strArr);
      executed[2] = false;
    }
    if (score > 1500 && executed[3]) {
      clearInterval(intervalRender);
      intervalRender = setInterval(randomStrRender, 800, strArr);
      executed[3] = false;
    }
  }
  // 단어 카운터 구현
  const verbNum = document.querySelector("#verb-num");
  verbNum.textContent = existingStr.length;
  if (existingStr.length > 7) verbNum.classList.add("red");
  else verbNum.classList.remove("red");
}

// input에 문자열을 입력하고 엔터를 누르면 이벤트 발생
const inputBox = document.querySelector("#input-box");
inputBox.onkeydown = (e) => {
  if (e.key === "Enter") {
    removeStr(inputBox.value);
    // input 박스 초기화
    inputBox.value = "";
  }
};
