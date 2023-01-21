const mainContainer = document.querySelector("#main-container");
const mainContainerRect = mainContainer.getBoundingClientRect();

// 화면의 랜덤한 위치에 문자열 넣기
const newDiv = document.createElement("div");

const x = Math.random() * mainContainerRect.width;
const y = Math.random() * mainContainerRect.height;
console.log(x, y);
newDiv.style.position = "absolute";
newDiv.style.left = `${x}px`;
newDiv.style.top = `${y}px`;

newDiv.style.width = `${80}px`;
newDiv.style.height = `${30}px`;
newDiv.style.backgroundColor = "blue";
mainContainer.appendChild(newDiv);
