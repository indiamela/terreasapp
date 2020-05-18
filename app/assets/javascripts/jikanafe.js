$(function() {
  $(".tabmenu a").click(function() {  //tabmenuクラスのaタグのクリックイベント
    $(this).parent().addClass("active").siblings(".active").removeClass("active"); //親のliをとってactiveくラスを加え、同階層のactiveクラスを削除している
    var tabContents = $(this).attr("href");　　//hrefのidを取得
    $(tabContents).addClass("show").siblings(".show").removeClass("show");
    return false;
  });
  $('button').click(function(){
    var startTime=$('input[name="start_time"]').val();
    var lastTime=$('input[name="last_time"]').val();
    var difTime = lastTime-startTime
    alert(difTime);
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