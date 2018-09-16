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
$(window).scroll(function(){
 var h = document.documentElement.scrollTop || document.body.scrollTop;
 console.log(h)
 if( h > 350 ){
     $(".footer").show()
 }else{
    $(".footer").hide()
 }
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


//滚回顶部
$(".top").click(function(){
    alert()
    $("html,body").animate({"scrollTop":0},1000);
})