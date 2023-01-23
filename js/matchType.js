// 화면에 있는 글자를 입력하면 없어지는 기능 구현

// 인자로 받은 글자가 화면에 있으면 글자를 지우는 함수
function removeStr(str) {
  let idx = null;
  // 지금 화면에 존재하는 단어를 배열로 받음
  const leavingStr = Array.from(document.querySelectorAll(".random-str")); //querySelectorAll은 유사배열이라서 배열로 바꿔준다.
  console.log(leavingStr);
  // 배열을 돌면서 같은 글자가 있는지 확인
  for (let el of leavingStr) {
    if (el.textContent === str) {
      idx = leavingStr.indexOf(el);
      break;
    }
  }
  if (idx !== null) {
    leavingStr[idx].remove();
  }
}

// input에 문자열을 입력하고 엔터를 누르면 이벤트 발생
const inputBox = document.querySelector("#input-box");
inputBox.onkeypress = (e) => {
  if (e.keyCode === 13) {
    // 엔터키 코드가 13이다
    removeStr(inputBox.value);
  }
};
