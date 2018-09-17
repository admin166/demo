 
var dis = $(".m_wnews .m_box");
var a = 0;

function top(){
  
  a++; 
  if( a == 5 ){
    //alert()
   
    a = 1;
    dis.css("top",-35)
   //dis.animate({"top":0},1500)
  } 
   
dis.stop().animate({"top":-35*a},1500)
  
}
 var timer3 = setInterval(top,1500);



 $(".l2").click(function(){
   
    $("html,body").stop().animate({"scrollTop":0},1000);
})

//我的信息

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
$(".l1").hover(function(){
    
    $(".mp_qrcode").show()
},function(){
    $(".mp_qrcode").hide();
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
$(window).scroll(function(){
    var h = $("body,html").scrollTop();
    if( h > 50 ){
        $(".l2").show()
    }else{
       $(".l2").hide()
    }  
})

//关闭购物车
$(".header2 .img").click(function(){
    $(".allbox").animate({"right":-300},1000,function(){
        $(".quick_links").hide();
    });
    
})

$(".l2").click(function(){
   
    $("html,body").stop().animate({"scrollTop":0},1000);
})

const nav =  () => {
  
}

module.exports = nav