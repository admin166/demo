alert()
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
var count = 0;
function on(){
    count++;
    if( count == 4 ){
        count = 0;
    }
    list.eq(count).addClass("on").siblings().removeClass("on");
}
//var timer2 = setInterval(on,2000);

var dis = $(".m_wnews .m_box");
var a = 0;

function top(){
    
dis.animate({"top":-38*a},2000,function(){
    if( dis.offset().top == -180 ){
       
        dis.css("top",0)
    }
})
    
    
       
   
}
//var timer3 = setInterval(top,1500)
