$("#headwrap").load("../../public/public.html")
console.log('banner');
var ul = $(".center .u li");
//轮播图
var index = 0;
function move(){
    index++;
    if(index == 7){
        index = 0;
    }
    ul.eq(index).show().siblings().hide()
}


var timer = setInterval(move,1000);

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
    clearInterval(timer2);
    count = $(this).index() - 1;
    on();
},function(){
    timer = setInterval(on,2000);
})





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
   

