$("#head").load("../public/public2.html",function(){
    $("#canvas").html(yzm())
    function yzm(){
        var str="";
        for(var i=0;i<6;i++){
            var code=rund(48,122)
            if(code>=58&&code<=64||code>=91&&code<=96){
                i--
            }else{
                str+=String.fromCharCode(code)
            }
        }
        return str
    }
    
    function rund(min,max){
        return Math.round(Math.random()*(max-min)+min)
    }




$("#submit").click(function(){
   if( flaguser && flagpwd ){
       var user = $("input[name=user]").val();
       var pwd = $("input[name=password]").val();
      
       $.cookie('user',user,{ expires: 7 })
       $.cookie('pwd',pwd,{ expires: 7 })
       
       alert("注册成功")
       $(window).attr('location','../login/login.html');
       
   }
})
$("input[name=user]").focus(function(){
    $(this).attr('placeholder',"");
});
//判断用户名
var reg = /^\w{6,}$/;
var flaguser = null;
$("input[name=user]").blur(function(){
   var txt = $(this).val()
   if( $(this).val() != '' ){
     if( reg.test(txt) ){
         
          flaguser = true;
     }else{
         flaguser = false;
         $(".err_tip1").show()
         $("#authCodeError").html("格式不正确!")
     }
   }else{
    $(".err_tip1").show()
    $("#authCodeError").html("账号不能为空!")
   }
})

//密码

var flagpwd = null;
var reg2 = /^\w{6,20}$/;
$("input[name=password]").blur(function(){
   if( $(this).val() != '' ){
    if( reg2.test($(this).val()) ){
         
        flagpwd = true;
   }else{
        flagpwd = false;
       $(".err_tip").show()
       $("#authCodeError").html("格式不正确!")
   }
   }else{
      flagpwd = false;
     $(".err_tip").show()
     $("#authCodeError").html("密码不能为空!")
   }
})
 

//验证码
$("input[name=yzm]").blur(function(){
   var yzm = $("#canvas").html();
    if( $(this).val() != yzm ){
        alert("请输入正确的验证码")
    }
})

$("#change").click(function(){
    $("#canvas").html(yzm())
})

})
   

//判断密码
