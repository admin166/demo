$(".img-box").hover(function(){
    $(".mask").show();
    $(".big-img").show();
},function(){
  $(".mask").hide();
  $(".big-img").hide();
})


$(".img-box").mousemove(function(event){
    var x = event.pageX - $(".img-box").offset().left - $(".mask").width()/2;
    var y = event.pageY - $(".img-box").offset().top - $(".mask").height()/2;
    x = Math.min( $(".img-box").width() - $(".mask").width(), Math.max( 0, x ) );
    y = Math.min( $(".img-box").height() - $(".mask").height(), Math.max( 0, y ) );
    $(".mask").css({"left":x,"top":y});
    //大图宽度/小图宽度 = 大图偏移 / mask的偏移
			var bigImageX = -x * $(".big-img img").width() / 400;
			var bigImageY = -y * $(".big-img img").height() /400;
    $(".big-img img").css({"left":bigImageX,"top":bigImageY});
})

var arr = ["2","3","4","5","6","7"]
$(".a_content ul li").hover(function(){
    $(this).css("border","2px solid #ff6600");
    $(".img-box img").attr("src","img/"+ arr[$(this).index()] +".jpg")
    $(".big-img img").attr("src","img/"+arr[$(this).index()]+".jpg")
},function(){
    $(this).css("border",0)
})