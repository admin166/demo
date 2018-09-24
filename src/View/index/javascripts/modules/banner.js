


    var ul = $(".center .u li");
    $(".lili li").eq(0).css("opacity",1)
    //轮播图
    var index = 0;
    function move(){
        index++;
        if(index == 7){
            index = 0;
        }
        ul.eq(index).stop().fadeIn(800).siblings().fadeOut(1000)
        
        $(".lili li").eq(index).css("opacity",1).siblings().css("opacity",0.4)
    }
    
    
    var timer = setInterval(move,1500);
    
    var list = $(".hd ul li");
    var olist = $(".bd ul");
    var count = 0;
    function on(){
        count++;
        if( count == 4 ){
            count = 0;
        }
        list.eq(count).addClass("on").siblings().removeClass("on");
      
        olist.eq(count).show().siblings().hide();
    }
    var timer2 = setInterval(on,2000);
    list.hover(function(){
        count = $(this).index() -1;
        on()
    },function(){
        timer2 = setInterval(on,2000);
    })
  $(".lili li").hover(function(){
      clearInterval(timer)
      index = $(this).index() -1
      move()
  },function(){
     timer = setInterval(move,1000);
  }).click(function(){
      index = $(this).index() -1;
      move()
  })
   
    
    
    
    



console.log('banner');

   

