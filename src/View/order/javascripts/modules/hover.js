$(".gl-item").hover(function(){    
     $(this).css("border","1px solid #ccc")
 },function(){
    $(this).css("border",0)   
 })

 $(".active-slide").hover(function(){
    
     $(this).css("border","1px solid red")
     $(".p-img a").eq($(this).index()).css("z-index","20")
 })
 
  //alert($(".active-slide"))   