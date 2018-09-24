//header中方nav

// 引入nav
$("img").lazyload({
    threshold : 200,
    effect : "fadeIn"
});
const nav = require('./nav')



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

$(".b li").hover(function(){
    $(this).find("a").addClass("active")
},function(){
    $(this).find("a").removeClass("active")
})


//滚轮

var divs = $(".boxs");

 
 
 //console.log(index.index())
 $(window).scroll(function(){
    var h = $("body,html").scrollTop();
    var index = divs.filter(function(){
        return  Math.abs($(this).offset().top - h) < $(this).height()/2;
       
     })
    if( h > 50 ){
        $(".l2").show()
    }else{
       $(".l2").hide()
    }  

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
})
 

 $(".footer li").click(function(){
    
     var stop = divs.eq($(this).index()-1).offset().top
    console.log(stop)
     $("body,html").stop().animate({"scrollTop":stop},1000)
 })




//导航栏
$(".footer li").hover(function(){
    $(this).find("a").addClass("active2").siblings().removeClass("active2");
},function(){
    $(this).find("a").removeClass("active2");
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