## Title

BLACK-JACK

### Currency_exchange

딜러에게 카드를 2장씩 받아 21에 가까운 수를 만드는 사람이 이기며 21을 초과하면 지는 게임을 개발해보았다.

<!-- Stack(기술) -->
### Stack

<p>
<!-- Code logo -->
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
</p>

<br>

### Result <a href="https://rlatldus.github.io/SVG_practice/1-SVG-Effect/">(<u>Link:Click</u>👆🏻)</a>

|                                                           Result                                                           | Description                                                                                                                                                                                                                                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|<div><img src="https://github.com/rlatldus/BLACK-JACK/assets/122216298/40d12059-351a-4c79-a46a-644e169a3b66" style="width: 400px;" alt="Blackjack"></div> | <h3 style="margin: 0;">A Simple SVG Walkthrough</h3> <h5>✨기능</h5> ▪️ 화면에 <b>커서모양</b>효과를 구현합니다. <br>▪️ 게임을 시작하거나 그만하거나, 다시시작 할 수 있습니다. <br>▪️기회는 세번 주어지고 21점을 넘으면 bust,21점이면 무, 21점을 안 넘으면 win을 출력합니다. |

<br>

<!-- 기간 -->
### Taken time

<b>period</b> : 14 May ~ 24 May (during 11 days)
<b>taken time</b> : 10 hours

<br>
<!-- 아키텍쳐 -->

### Function <br>

| Function       | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| changeCurrency | <b>✔️' .currency_li ' click시 실행되는 함수.</b> <br>1️⃣ className에 ' from_li '가 들어있다면, 상단의 ' .exchange_box '로, 아니면 하단으로 구분한다. <br>2️⃣ 클릭한 ' .currency_li '의 innerText를 해당하는 변수(fromCurrency / toCurrency)에 할당한다.<br>3️⃣ 함수 convert를 통해 환전한다. <br> 4️⃣ 함수 changeBtn을 통해 해당하는 변수(fromCurrency / toCurrency)의 값을 적용하여, '.currency_btn'과 unit의 UI를 변경한다. <br> |
| changeUI       | ✔️<b>함수 changeCurrency를 실행하면 실행되는 함수.</b> <br> 1️⃣ type을 전달받아(front/to) 해당하는 '.currency_btn'의 textContent에 currency의 값을 전달해 btn의 UI를 변경한다.<br>2️⃣ 단위를 표시하는 ' .input_box\_\_txt '의 UI를 변경한다.                                                                                                                                                                                     |
| convert        | 🌟<b>Main : exchanging currency</b> <br>✔️from-to, to-from에 필요한 수식을 각 변수에 할당하였다. <br>1️⃣ 전달받은 type에 따라 변수(fromToCurrency / toFromCurrency)를 활용하여 환전한다. <br>2️⃣ toLocaleString()을 통해 1000 단위마다 ,를 찍어준다. <br> &nbsp; &nbsp; &nbsp; - input의 value의 type이 number일 때, 사용할 수 있어, Number로 감싸주었다.                                                                        |

<br>

### 느낀점 : type의 중요성을 알았다

1️⃣ input을 입력할 때 바로 1000단위마다 콤마가 나타나게 하고 싶었는데, toLocaleString()함수를 적용하게 되면, 값에 콤마를 포함하게 되고 type이 num => string으로 바뀌게 되어, 값을 수정할 때, 오류가 생겼다.

<br>2️⃣ 그래서 input을 하나 더 만들어, 콤마를 찍어주고 수정이 불가하게 만들고 toLocaleString()을 사용하려 하였으나, 사용이 되지 않아 type을 확인해보니 string이었다.

<br>3️⃣ 그래서 Number()를 활용하여 type을 Number로 바꾸고 toLocaleString()을 사용하여 1000단위로 콤마를 찍을 수 있었다.
