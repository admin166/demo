var index = 0;

function move(){
  index++;
  if( index == 4 ){
      index = 1;
      $(".lunbo ul").css("left",0)
  }
  $(".lunbo ul").animate({"left":-150*index},1000);
  $(".controlbutton a").eq(index == 3 ? 0 : index).addClass("active2").siblings().removeClass("active2");
}
setInterval(move,1500)