// 시작버튼 누르면 나오는 카운터와 랜덤 렌더링 시작 구현

// 시작버튼 누르면 나올 카운터와 start 글자
const startCounter = (counter) => {
  const mainContainer = document.querySelector("#main-container");
  const newDiv = document.createElement("div");
  newDiv.classList.add("start-counter");
  newDiv.textContent = counter;
  return mainContainer.appendChild(newDiv);
};
// setTimeOut으로 카운터 구현
const counter = (text, num = 0, boolean = true) => {
  setTimeout(
    () => {
      const counter = document.querySelector(".start-counter");
      counter.remove();
      if (boolean) startCounter(text);
    },
    num,
    text
  );
};
// 시작버튼
const startButton = document.querySelector("#start-button");
let intervalRender;
startButton.onclick = () => {
  startButton.style.display = "none"; //누르면 사라짐
  startCounter(3);
  counter(2, 1000);
  counter(1, 2000);
  counter("Start!", 3000);
  counter(null, 4000, false);
  setTimeout(() => {
    intervalRender = setInterval(randomStrRender, 2000, strArr);
  }, 4000);
};

// 인터발 중지
const stopInterval = document.querySelector("#stop-button");
stopInterval.onclick = () => {
  clearInterval(intervalRender);
};
