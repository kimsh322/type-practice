// 로컬 스토리지 데이터 랭킹 등록

// 로컬 스토리지 데이터 score순으로 정렬한 배열 만들기
let localArr = [];
for (let i = 0; i < localStorage.length; i++) {
  localArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
localArr.sort((a, b) => b.score - a.score);
// 랭킹 보드에 li 태그 추가
const rankingBoard = document.querySelector("#ranking-board");

for (let i = 0; i < 10; i++) {
  if (!localArr[i]) break;
  const newLi = document.createElement("li");
  newLi.classList.add("ranking-each");
  const newSpan1 = document.createElement("span");
  newSpan1.textContent = `${i + 1}등!`;
  const newSpan2 = document.createElement("span");
  newSpan2.textContent = `${localArr[i].username}`;
  const newSpan3 = document.createElement("span");
  newSpan3.textContent = `${localArr[i].score}점`;
  newLi.appendChild(newSpan1);
  newLi.appendChild(newSpan2);
  newLi.appendChild(newSpan3);
  rankingBoard.appendChild(newLi);
}
