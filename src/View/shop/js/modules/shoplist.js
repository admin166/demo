$("#headwrap").load("../../public/public.html",function(){
   
    require('../../../index/javascripts/modules/nav');
    $(".all-hook ul").hide()

    $(".all-hook h2").mouseenter(function(){
        $(".all-hook ul").show()
    })
    $(".all-hook").mouseleave(function(){
        $(".all-hook ul").hide()
    })

   
});


