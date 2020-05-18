$(function() {
  $(".tabmenu li").click(function() {  //tabmenuクラスのaタグのクリックイベント
    $(this).addClass("active").siblings(".active").removeClass("active"); //親のliをとってactiveくラスを加え、同階層のactiveクラスを削除している
    var tabContents = $(this).attr("href");　　//hrefのidを取得
    $(tabContents).addClass("show").siblings(".show").removeClass("show");
    return false;
  });
  $('button').click(function(e){
    //開始時間と終了時間の取得
    var startTime=$('input[name="start_time"]').val();
    var lastTime=$('input[name="last_time"]').val();
    //ymdを作る
    var Y = new Date().getFullYear()
    var M = new Date().getMonth()+1
    var D = new Date().getDate()
    var ymd = Y+"/"+M+"/"+D+"/"
    //年から時間まで作った後に時間部分を数値として切り出す
    var fromTime = new Date(ymd+" "+startTime).getTime()
    var toTime = new Date(ymd+' '+lastTime).getTime()
    //時間計算
    var Ms = toTime-fromTime
    var h = ''
    var m = ''
    h = Ms/60000
    m = (Ms-h*60000)/100
    var x = h+m;
    if(x<=0){
      $('.adult-price').text('0円');
      $('.student-price').text('0円');
    }
    else if (x<=30){
      $('.adult-price').text('330円');
      $('.student-price').text('330円');
    }
    else if(x<=40){
      $('.adult-price').text('430円');
      $('.student-price').text('430円');
    }
    else if(x<=50){
      $('.adult-price').text('530円');
      $('.student-price').text('530円');
    }
    else if(x<=60){
      $('.adult-price').text('630円');
      $('.student-price').text('550円');
    }
    else if(x<=70){
      $('.adult-price').text('730円');
      $('.student-price').text('550円');
    }
    else if(x<=80){
      $('.adult-price').text('830円');
      $('.student-price').text('550円');
    }
    else if(x<=90){
      $('.adult-price').text('930円');
      $('.student-price').text('550円');
    }
    else if(x<=100){
      $('.adult-price').text('1000円');
      $('.student-price').text('600円');
    }
    else if(x<=110){
      $('.adult-price').text('1000円');
      $('.student-price').text('650円');
    }
    else if(x<=120){
      $('.adult-price').text('1000円');
      $('.student-price').text('700円');
    }
    else if(x<=130){
      $('.adult-price').text('1100円');
      $('.student-price').text('750円');
    }
    else if(x<=140){
      $('.adult-price').text('1200円');
      $('.student-price').text('800円');
    }
    else if(x<=150){
      $('.adult-price').text('1300円');
      $('.student-price').text('850円');
    }
    else if(x<=160){
      $('.adult-price').text('1400円');
      $('.student-price').text('900円');
    }
    else if(x<=170){
      $('.adult-price').text('1500円');
      $('.student-price').text('950円');
    }
    else if(x<=180){
      $('.adult-price').text('1500円');
      $('.student-price').text('1000円');
    }
    else if(x<=190){
      $('.adult-price').text('1600円');
      $('.student-price').text('1100円');
    }
    else if(x<=200){
      $('.adult-price').text('1700円');
      $('.student-price').text('1200円');
    }
    else if(x<=210){
      $('.adult-price').text('1800円');
      $('.student-price').text('1300円');
    }
    else{
      $('.adult-price').text('1900円');
      $('.student-price').text('1400円');
    }
    return false;
  });
});

// 学び
// next()→対象の要素の次の要素を取得できる
// nextAll()→対象の要素以降を全て取得
// siblings()→同階層の要素を全て取得できる
// 時間計算するには入力した時間を数値として切り出す必要がある