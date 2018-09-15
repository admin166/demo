

// index中要放banner和header

// 引入banner 因为banner并没有暴露一些东西给index用，所以就用下面的方法引入进来就可以了
require('./modules/banner')
require('./modules/header')

var ul = $(".center ul li");

var index = 0;
function move(){
    index++;
    ul.eq(index).show()
}
setInterval(move,1000)