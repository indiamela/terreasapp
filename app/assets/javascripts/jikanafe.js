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
  $(".tabmenu a").click(function() {
    $(this).parent().addClass("active").siblings(".active").removeClass("active");
    var tabContents = $(this).attr("href");
    $(tabContents).addClass("active").siblings(".active").removeClass("active");
    return false;
  });
});