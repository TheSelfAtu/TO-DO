$(document).ready(function() {
    hsize = $(window).height();
    wsize = $(window).width();
     $("#first_view").css("height", hsize + "px");
     $("#first_view").css("width", wsize + "px");
     
});

$(window).resize(function() {
    hsize = $(window).height();
    wsize = $(window).width();
     $("#first_view").css("height", hsize + "px");
     $("#first_view").css("width", wsize + "px");
    
       
});


  /* 画像フェードインアニメーション */

$(window).on('load scroll', function (){

    var box = $('.fadeIn, .fadeIn-text');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
        $("img").css("max-height", hsize + "px");
      }
    });
  
  });