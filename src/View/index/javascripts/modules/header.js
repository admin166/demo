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
    $(".r-top-h").show();
},function(){
    $(".r-top-h").hide();
})


