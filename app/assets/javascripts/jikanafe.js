// $(function(){
//   let tabs = $('.menu_item');

//   function tabSwitch(){
//     $('.active').removeClass('active'); //activeクラスの削除
//     $(this).addClass('active');
//     const index = tabs.index(this);
//     $('.content').removeClass('show').eq(index).addClass('show');
//   }

//   tabs.click(tabSwitch);
// });


$(function() {
  $(".tabmenu a").click(function() {  //tabmenuクラスのaタグのクリックイベント
    $(this).parent().addClass("active").siblings(".active").removeClass("active"); //親のliをとってactiveくラスを加え、同階層のactiveクラスを削除している
    var tabContents = $(this).attr("href");　　//hrefのidを取得
    $(tabContents).addClass("show").siblings(".show").removeClass("show");
    return false;
  });
});

// 学び
// next()→対象の要素の次の要素を取得できる
// nextAll()→対象の要素以降を全て取得
// siblings()→同階層の要素を全て取得できる