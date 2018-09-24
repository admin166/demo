

console.log($.cookie("user"))
var flaguser = null;
$(".user").change(function(){
    $("#s1").html("")
    if( $(".user").val() != $.cookie("user") ){
        $("#s1").html("用户名不存在")
    }
    flaguser = true;
})
var flagpwd = null;
$(".pwd").change(function(){
    $("#s2").html("")
    if( $(".pwd").val() != $.cookie("pwd") ){
        $("#s2").html("密码错误")
    }
    flagpwd = true;
})

    $("#btn").click(function(){
       
       if( flaguser && flagpwd ){
        alert("登录成功");
        $(window).attr('location','../index/index.html');
       }
      
    })
