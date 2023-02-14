# 준비중입니다...

# 타자 연습 게임

vanilla javascript를 이용한 간단한 타자 연습 게임 입니다.

일정 시간 간격으로 랜덤한 위치에 랜덤한 단어가 생성됩니다.

하단의 input박스에 단어를 입력하고 엔터를 누릅니다. 일치하는 단어가 있으면 그 단어가 화면에서 지워집니다.

단어를 지우는 데 성공하면 점수가 올라갑니다.

화면에 단어가 10개가 넘어가면 Game Over입니다.

Game Over시 점수에 따라 랭킹에 등록됩니다.(로컬 스토리지 사용)

---

## 완성된 기능 설명

### 입장 페이지 구현

<br/>
<img src="./public/entrance_page.gif" width="450px" height="300px"  alt="entrance_page"></img>

<br/>
웹페이지를 열면 입장 페이지가 있습니다. username을 입력하고 엔터를 누르면 메인페이지의 display가 flex가 되고, 입장페이지의 display가 none이 되면서 페이지가 이동하는 것처럼 만들어 보았습니다.

---

### 랜덤 단어 생성, 입력시 단어 제거

<br/>
<img src="./public/match_type.gif" width="450px" height="300px"  alt="entrance_page"></img>

<br/>
5500개 단어 배열에서 랜덤한 단어를 받아서 div박스에 담아 메인 화면에 출력합니다.

document.getBoundingClientRect 메서드의 width, height 프로퍼티를 활용했습니다.

do ~ while문으로 화면을 벗어나는 div박스가 없도록 처리했습니다.

단어 입력시 현재 화면에 존재하는 div박스의 textcontent를 받아 배열로 만들어 검사하여 일치하는 단어가 있는 경우 해당 div박스를 제거하도록 코드를 작성했습니다.

<br/>

### Game Over

작성중

---

## 문제 발생과 에러해결

### loader.js(입장페이지로더)

입장 페이지는 display를 변경할 때 transition이 발생하는 클래스를 바로 넣어버리면 애니매이션이 동작하지 않았습니다.

    찾아보니 transition의 경우 변화가 발생했을 때 작동을 하게 되는데 display를 변경하면서 바로 class를 적용시켜버려서 transition이 발생하지 않고 곧바로 최종 style로 변경이 되는 것이었습니다.
    그래서 setTimeout 함수에 delay 0을 주고 사용하여 약간의 term을 두고 클래스를 추가하니 정상적으로 transition이 동작하게 되었습니다.

---

### startButton.js(시작버튼,시작카운터)

시작 카운터에 transition을 적용시켜 놓았는데 transition이 적용 될 때도 있고 안될 때도 있는 현상이 발생하였습니다.

    setTimeout 함수를 많이 등록해놓아서 지연시간을 0으로 주었을 때 실제로는 0이 아니라 좀 더 많은 시간을 기다리거나 혹은 다른 setTimeout 함수와 순서가 바뀌어 실행이 되어서 동작이 되었다가 안되었다가 한다는 것으로 결론을 내렸습니다.
    그래서 시작 카운터의 경우 50ms의 지연시간을 주고 class를 동적으로 추가하도록 하니 해결이 되었습니다.
