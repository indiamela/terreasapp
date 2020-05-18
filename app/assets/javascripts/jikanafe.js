$(function() {
  $(".tabmenu a").click(function() {  //tabmenuクラスのaタグのクリックイベント
    $(this).parent().addClass("active").siblings(".active").removeClass("active"); //親のliをとってactiveくラスを加え、同階層のactiveクラスを削除している
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
    h = Ms/3600000
    m = (Ms-h*3600000)/6000
    var jikan = h+m;

    // switch (difTime) {
    //   case '01:00':
    //     $('.adult-price').text('ああああ');
    //     break;
    //   default:
    //     $('.adult-price').text('いいいいい');
    //     break;
    // }
  });
});

// 学び
// next()→対象の要素の次の要素を取得できる
// nextAll()→対象の要素以降を全て取得
// siblings()→同階層の要素を全て取得できる
// 時間計算するには入力した時間を数値として切り出す必要がある