$("#headwrap").load("../../public/public.html",function(){
   
    require('../../../index/javascripts/modules/nav');
    $(".all-hook ul").hide()

    $(".all-hook h2").mouseenter(function(){
        $(".all-hook ul").show()
    })
   
    
   
  
$(".addcartBtn").css("position","relative");


$("#btn").click(function(){
var shopCart = $("#shopcart").find("span");
var startPoint = {
    x : $(".addcartBtn").offset().left + $(".addcartBtn").width()/2,
    y : $(".addcartBtn").offset().top
}
var endPoint = {
    x : shopCart.offset().left +  $(".addcartBtn").width()/2,
    y : shopCart.offset().top +  $(".addcartBtn").height()/2
 }
 var topPoint = {
     x : endPoint.x - 120,
     y : endPoint.y - 80
 }
 var a = ((startPoint.y - endPoint.y) * (startPoint.x - topPoint.x) - (startPoint.y - topPoint.y) * (startPoint.x - endPoint.x)) / ((startPoint.x * startPoint.x - endPoint.x * endPoint.x) * (startPoint.x - topPoint.x)-(startPoint.x * startPoint.x - topPoint.x * topPoint.x) * (startPoint.x - endPoint.x));  
                  
  var b = ((endPoint.y - startPoint.y) - a * (endPoint.x * endPoint.x - startPoint.x * startPoint.x)) / (endPoint.x - startPoint.x);  
                  
 var c = startPoint.y - a * startPoint.x * startPoint.x - b * startPoint.x;
   $("body").append( $("<div class='cart' style='width:20px;height:20px;background:red;position:absolute;'></div>"));
   //div.css({"})
  $(".cart").css({"left":startPoint.x,"top":startPoint.y})
  var x = startPoint.x;
  var timer = setInterval(function(){
      x += 10;
     var y = a*x*x + b*x + c;
      if( x > endPoint.x ){
          clearInterval(timer);
          $(".cart").remove()
      }else{
          $(".cart").css({"left":x,"top":y})
      }
  },20)

})          















});
var rid = location.href.split("?")[1].split("=")[1];

$.ajax({
    type:'get',
    url:'http://localhost:8000/data.json?',
    success:function(msg){
        
        var str = '';
        var str2 = '';
        var arr = [];
        for( var i in msg ){
            //console.log(i)
            if( rid == i ){
               // console.log(i,msg[i].img)
                for( var j = 0; j < msg[i].simg.length; j++ ){
                    var item = msg[i].simg;
                   // console.log(msg[i].simg[j])
                    str += ` <li><img src="./img/${item[j]}" alt=""></li>`
                           
                }
                for( var k = 0; k < msg[i].bimg.length; k++ ){
                    str2 += `<img src="./img/${msg[i].bimg[k]}" alt="">
                                <div class="mask"></div>`  
                     arr.push(msg[i].bimg[k])            
                  
                }
                $("#name h1").html(msg[i].title)
                $(".dd").find("strong").html("<span id='ing-price'>¥</span>" + msg[i].price);
                $(".big-img img").attr("src","img/"+arr[0])
                $(".img-box").html(str2)
                $(".a_content ul").html(str);
                $(".a_content ul li").eq(0).css("border","2px solid #ff6600");
            }
        }
        
        $(".img-box").hover(function(){
            $(".mask").show();
            $(".big-img").show();                      
        },function(){
          $(".mask").hide();
          $(".big-img").hide();
        })
        var index = 0;
        $(".prev").click(function(){
            index--;
            if( index >= 0){
                $(".img-box img").attr("src","img/"+ arr[index])
                $(".big-img img").attr("src","img/"+arr[index])
               
                $(".a_content ul li").eq(index).css("border","2px solid #ff6600").siblings().css("border",0)
            }
         
        })
        $(".next").click(function(){
            index++;
            if( index == $(".a_content ul li").length){
                index = 0;
            }
            $(".img-box img").attr("src","img/"+ arr[index])
            $(".big-img img").attr("src","img/"+arr[index])
            $(".a_content ul li").eq(index).css("border","2px solid #ff6600").siblings().css("border",0);
        })
        $(".a_content ul li").hover(function(){
            index = $(this).index()
            $(this).css("border","2px solid #ff6600").siblings().css("border",0);
            $(".img-box img").attr("src","img/"+ arr[index])
            $(".big-img img").attr("src","img/"+arr[index])
        },function(){
            $(".a_content ul li").css("border",0)
        })
        
        $(".all-hook").mouseleave(function(){
            $(".all-hook ul").hide()
        })
        $(".all-hook ul li").hover(function(){
            $(this).find(".pop").show()
        },function(){
            $(this).find(".pop").hide()
        })
    
    }
})

