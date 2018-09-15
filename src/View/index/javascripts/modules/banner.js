
console.log('banner');
var ul = $(".center ul li");

var index = 0;
function move(){
    index++;
    ul.eq(index).show()
}
$(".box").click(function(){
    alert()
})
setInterval(move,1000)