//header中方nav

// 引入nav

const nav = require('./nav')

nav()

var ul = $(".all-hook ul li");
ul.hover(function(){
    $(this).css({"background-color":"skyblue","opavity":0.7})
    $(this).find(".pop").show()
},function(){
    $(this).css({"background-color":"rgba(50,50,50,0.9)"})
    ul.find(".pop").hide()
})


var li = ul.find(".tx a");
li.hover(function(){
    $(this).css("color","#ff6600").siblings().css("color","#fff")
},function(){
    $(this).css("color","#fff")
})


var litwo = ul.find("dl a");
litwo.hover(function(){
    $(this).css("color","#ff6600").siblings().css("color","#999")
},function(){
    $(this).css("color","#999")
})

//鼠标滑过
var list = $(".bd li");
list.hover(function(){
  $(this).find("a").addClass("active").siblings().removeClass("active");
},function(){
    $(this).find("a").removeClass("active");
})


$(".hover  a").hover(function(){
    $(".hover .dist").show().animate({"left":-90},1000)
},function(){
    $(".hover .dist").hide().css("left",-121)
})

$(".hover2  a").hover(function(){
    $(".hover2 .dist").show().animate({"left":-90},1000)
},function(){
    $(".hover2 .dist").hide().css("left",-121)
})

//滚轮

var divs = $(".boxs");

$(window).scroll(function(){
 var h = $("body,html").scrollTop();
 if( h > 50 ){
     $(".l2").show()
 }else{
    $(".l2").hide()
 }   
 var index = divs.filter(function(){
    return  Math.abs($(this).offset().top - h) < $(this).height()/2;
   
 })
 //console.log(index.index())
 if( h > 1270 ){
    if( index.index() != -1 ){
        $(".footer li").eq(index.index()).find("a").addClass("active2").end().siblings().find("a").removeClass("active2");
     }
 }
 
 
 if( h > 350 ){
     $(".footer").show().css("opacity",0.5).stop().animate({"opacity":1},300);
 }else{
    $(".footer").hide().stop().animate({"opacity":0.5},600);
 }

 $(".footer li").click(function(){
    
     var stop = divs.eq($(this).index()-1).offset().top
    console.log(stop)
     $("body,html").stop().animate({"scrollTop":stop},1000)
 })
});

//我的信息
$(".user").hover(function(){
    $(this).addClass("active2")
    $(this).find("i").css("color","#fff")
    $(".r-top-h").show();
},function(){
    $(this).removeClass("active2")
    $(this).find("i").css("color","#ff6600")
    $(".r-top-h").hide();
})
$(".kf").hover(function(){
    $(this).addClass("active2")
    $(this).find("i").css("color","#fff")
    $(".kf-index").show(); 
},function(){
    $(this).removeClass("active2")
    $(this).find("i").css("color","#ff6600")
    $(".kf-index").hide();  
})


//购物车
$("#shopcart").hover(function(){
    $(this).find("i").css("color","#fff")
    $(this).addClass("active2");
},function(){
    $(this).find("i").css("color","#ff6600")
    $(this).removeClass("active2");
})
$("#shopcart").click(function(){
  $(".allbox").animate({"right":0},1000)
  $(".quick_links").show();
})


//关闭购物车
$(".header2 .img").click(function(){
    $(".allbox").animate({"right":-300},1000,function(){
        $(".quick_links").hide();
    });
    
})


//导航栏
$(".footer li").hover(function(){
    $(this).find("a").addClass("active2").siblings().removeClass("active2");
},function(){
    $(this).find("a").removeClass("active2");
})
$(".l1").hover(function(){
    
    $(".mp_qrcode").show()
},function(){
    $(".mp_qrcode").hide();
})

//滚回顶部
$(".top").click(function(){  
    $("html,body").stop().animate({"scrollTop":0},1000);
})

$(".l2").click(function(){
   
    $("html,body").stop().animate({"scrollTop":0},1000);
})
//图片抖动
$("#like-indexs li").hover(function(){
    $(this).find("img").css("position","relative").animate({"left":-5},300);
    $(this).find("p").css("color","#ff6600");
},function(){
    $(this).find("img").animate({"left":0},300);
    $(this).find("p").css("color","#333");
})

//
$(".left_f2 img").hover(function(){
   var b = parseInt($(this).css("right"));
  
    $(this).animate({"right":b+5},300)
},function(){
    var b = parseInt($(this).css("right"));
    $(this).animate({"right":b-5},300)
})
//

$(".rightbox img ").hover(function(){
    
    var b = parseInt($(this).css("right"));
   
     $(this).animate({"right":b+5},300)
 },function(){
    $(this).css("z-index",1)
     var b = parseInt($(this).css("right"));
     $(this).animate({"right":b-5},300)
 })