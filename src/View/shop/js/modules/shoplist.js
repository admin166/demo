$("#headwrap").load("../../public/public2.html");
console.log(1)
$.ajax({
    type:'get',
    url:"https://api.growingio.com/v2/bf374a33787a75bb/web/action?stm=1537152578614",
    success:function(msg){
        console.log(msg)
    }
})