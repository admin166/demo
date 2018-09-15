
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
var timer2 = setInterval(on,2000);