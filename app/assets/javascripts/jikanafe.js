$(function() {
  function toDoubleDigits(i) {
    if (i < 10) {
    i = "0" + i;
    }
    return i;
    }
  var hh = new Date().getHours();
  var mm = new Date().getMinutes();
  var H = toDoubleDigits(hh);
  var M = toDoubleDigits(mm);
  $('.nowtime-start').click(function(e){
    e.preventDefault();
    var $form = $(e.currentTarget).parents('form');
    $form.find('input[name="start_time"]').val(H+':'+M);
  })
  $('.nowtime-end').click(function(e){
    e.preventDefault();
    var $form = $(e.currentTarget).parents('form');
    $form.find('input[name="last_time"]').val(H+':'+M);
  })
  $('.calcbutton').click(function(e){
    e.preventDefault();
    var $form = $(e.currentTarget).parents('form');  //現在いるフォームだけに適用する
    var adultPrice = $form.find('.adult-price');
    var studentPrice = $form.find('.student-price');
    //開始時間と終了時間の取得
    var startTime=$form.find('input[name="start_time"]').val();
    var lastTime=$form.find('input[name="last_time"]').val();
    //年から時間まで作った後に時間部分を数値として切り出す
    var fromTime = new Date("2020/5/25"+' '+startTime);
    var toTime = new Date("2020/5/25"+' '+lastTime);
    //時間計算
    var Ms = toTime-fromTime
    var h = ''
    var m = ''
    h = Ms/60000
    m = (Ms-h*60000)/100
    var x = h+m;
    alert (startTime);
    alert (fromTime);
    alert (x);
    if (x<=0){
      adultPrice.text('大人料金：0円');
      studentPrice.text('学生料金：0円');
    }
    else if (x<=30){
      adultPrice.text('大人料金：330円');
      studentPrice.text('学生料金：330円');
    }
    else if(x<=40){
      adultPrice.text('大人料金：430円');
      studentPrice.text('学生料金：430円');
    }
    else if(x<=50){
      adultPrice.text('大人料金：530円');
      studentPrice.text('学生料金：530円');
    }
    else if(x<=60){
      adultPrice.text('大人料金：630円');
      studentPrice.text('学生料金：550円');
    }
    else if(x<=70){
      adultPrice.text('大人料金：730円');
      studentPrice.text('学生料金：550円');
    }
    else if(x<=80){
      adultPrice.text('大人料金：830円');
      studentPrice.text('学生料金：550円');
    }
    else if(x<=90){
      adultPrice.text('大人料金：930円');
      studentPrice.text('学生料金：550円');
    }
    else if(x<=100){
      adultPrice.text('大人料金：1000円');
      studentPrice.text('学生料金：600円');
    }
    else if(x<=110){
      adultPrice.text('大人料金：1000円');
      studentPrice.text('学生料金：650円');
    }
    else if(x<=120){
      adultPrice.text('大人料金：1000円');
      studentPrice.text('学生料金：700円');
    }
    else if(x<=130){
      adultPrice.text('大人料金：1100円');
      studentPrice.text('学生料金：750円');
    }
    else if(x<=140){
      adultPrice.text('大人料金：1200円');
      studentPrice.text('学生料金：800円');
    }
    else if(x<=150){
      adultPrice.text('大人料金：1300円');
      studentPrice.text('学生料金：850円');
    }
    else if(x<=160){
      adultPrice.text('大人料金：1400円');
      studentPrice.text('学生料金：900円');
    }
    else if(x<=170){
      adultPrice.text('大人料金：1500円');
      studentPrice.text('学生料金：950円');
    }
    else if(x<=180){
      adultPrice.text('大人料金：1500円');
      studentPrice.text('学生料金：1000円');
    }
    else if(x<=190){
      adultPrice.text('大人料金：1600円');
      studentPrice.text('学生料金：1100円');
    }
    else if(x<=200){
      adultPrice.text('大人料金：1700円');
      studentPrice.text('学生料金：1200円');
    }
    else if(x<=210){
      adultPrice.text('大人料金：1800円');
      studentPrice.text('学生料金：1300円');
    }
    else{
      adultPrice.text('大人料金：1900円');
      studentPrice.text('学生料金：1400円');
    }
    return false;
  });
  $(".tabmenu a").click(function() {  //tabmenuクラスのクリックイベント
    $(this).parent(".tab-btn").addClass("active").siblings(".active").removeClass("active"); //activeくラスを加え、同階層のactiveクラスを削除している
    var tabContents = $(this).attr("href");//hrefのidを取得
    $(tabContents).addClass("show").siblings(".show").removeClass("show");
    return false;
  });
});

// 学び
// next()→対象の要素の次の要素を取得できる
// nextAll()→対象の要素以降を全て取得
// siblings()→同階層の要素を全て取得できる
// 時間計算するには入力した時間を数値として切り出す必要がある
// 