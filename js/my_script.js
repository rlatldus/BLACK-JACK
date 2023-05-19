$(function () {

  $('#btnRestart').click(function(){
    $('#my_hand').css('display','block')
    $('#btnRestart').attr('src','images/deck_small.jpg')
  })


  //생성자 함수
  function card(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }

  const D = "Diamonds";
  const C = "Clubs";
  const H = "Hearts";
  const S = "Spades";

  function Cards(x) {
    return [
      new card("Ace", x, 1), // 카드객체(인스턴스)
      new card("Two", x, 2),
      new card("Three", x, 3),
      new card("Four", x, 4),
      new card("Five", x, 5),
      new card("Six", x, 6),
      new card("Seven", x, 7),
      new card("Eight", x, 8),
      new card("Nine", x, 9),
      new card("Ten", x, 10),
      new card("King", x, 11),
      new card("Queen", x, 12),
      new card("Jack", x, 13),
    ];
  }

  const deck = [...Cards(D), ...Cards(C), ...Cards(H), ...Cards(S)];

  // ...Diamonds(D)는 "spread" 문법으로, Diamonds(D) 배열의 요소를 개별적인 인자로 풀어서 전달하는 역할을 합니다. 이를 사용하면 배열을 개별적인 값들로 편리하게 전달할 수 있습니다.
  // 예를 들어, Diamonds(D) 배열에 13개의 카드 객체가 들어있고, ...Diamonds(D)를 사용하면 13개의 카드 객체를 전부 개별적인 인자로 펼쳐서 전달할 수 있습니다.
  // 다시 원래 코드로 돌아와서 const deck 배열에서 Diamonds(D)를 3번 반복하는데, ...Diamonds(D)를 사용하면 Diamonds(D) 배열의 요소를 개별적인 인자로 풀어서 3번 반복되는 카드 객체들을 각각 개별적인 인자로 전달할 수 있습니다. 이를 통해 deck 배열의 요소를 줄일 수 있습니다.

  function Random(num) {
    return Math.floor(Math.random() * num);
  }

  const usercards = []; // 6. 유저가 사용한 카드
  const hand = {
    //내가받은카드의 배열, 그때 그때 받은 카드의 합, 카드의 총합계
    cardss: [],
    current_total: 0,
    sumCardTotal: function () {
      //FIXME - 총합계산 
      this.current_total = 0;
      for(let i=0; i<this.cardss.length; i++ ){
        const c = hand.cardss[i]; //c 카드의 value값을넣어서 담는다.
        this.current_total +=  c.value
      }

      $('#hdrTotal').html(`합계: ${hand.current_total}`);
      
      const end = () =>{
        $('#btnHit').hide();
        $('#btnDeal').hide();
        $('#btnStick').hide();
        // $('#btnRestart').hide();
      }

      if(this.current_total>21){
        alert("패");
        $("#imgResult").attr('src','images/x.png');
        $('#hdrResult').html('BUST').attr('class','red');
        end();

      }else if(this.current_total === 21){
        alert("무");
        $("#imgResult").attr('src','images/check.png');
        $('#hdrResult').html('BLACK JACK!').attr('class','blue');
        end();

      }else if(this.current_total <= 21 && this.cardss.length ==5){
        end();
      }
    }
  };

  function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total; //6. 21인지 비교
  }

  function hit() {
    //5.카드펼쳐서 계산하는 동작
    do{ 
    const index = Random(52); //FIXME - 뽑았던거 다시 뽑게 해줘야 함
    
    if ($.inArray(index, usercards) !== -1) { // 배열에 없다면 -1 이  반환
      continue; //배열에 있다면, 다시 실행
    }

    usercards[usercards.length] = index;
    // alert(`현재 플리이어가 사용한 카드 갯수 : ${usercards.length}`);
    console.log(`${deck[Random(52)].value}`);
    const c = deck[index]; //모든 카드가 담긴 인덱스 자리에 랜덤숫자를 넣어 카드하나 담음
    hand.cardss[hand.cardss.length] = c;
    // alert(`현재 플리이어가 가지고 있는 카드 갯수 : ${hand.cardss.length}`);
    
    console.log(`${usercards.length}`);
    
    const $d = $("<div id='imgWrap'>");

    $('<img class="img">')
    .appendTo($d)
    .attr("src", `images/cards/${c.suit}/${c.name}.jpg`)
    .fadeOut()
    .fadeIn();
    $d.appendTo($("#my_hand"));
    }
    while(0);
    hand.sumCardTotal();
  }


  function deal() {
    for (var i = 0; i < 2; i++) {
      hit();
      alert(
        `${deck[Random(52)].name} ${deck[Random(52)].suit} ${
          deck[Random(52)].value
        }`
      );
    }
  }

  $("#btnHit").click(function () {
    // 모든 카드가 뒤집어진이미지를 클릭하면 카드게임시작
    //1. 카드를 분배(deal)해서 게임 시작
    deal(); //hit함수로 연결
  });
});
