
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


