var goods = JSON.parse($.cookie("good"));
let str = '';
if( goods.length ){
    goods.forEach(element => {
    
        str +=`  <li   class="gooditm" style="background-color:#ffffff">
        <div class="clearfix">
             <div data-id=${element.id} class="col col1">
                <input type="checkbox" id="qx" checked class="u-chk " name="selectGood" style="outline:none;"></div>
             <div class="col col2"><a href="" id="3251" target="_blank" class="imgwrap">
                 <img src="${element.img}" alt=""></a><div class="txtwrap"> <h3 class="goodtlt">
                     <a href="//item.ingping.com/3251.html" id="3251" target="_blank">${element.title}</a>
                    </h3>
             </div>
        </div>
             <div class="col col3">  <span class="newprice" id="_goodsNPrice4056">${element.price}</span> </div><div class="col col4"><span class="u-setcount">
                 <span id="_goodsNum1_min" class="minus z-dis" >-</span><input type="text" id="_goodsNum1" name="qty4056" value="1" maxlength="4"  class="ipt">
                     <span id="_goodsNum1_add" class="plus">+</span>
                </span>
             </div>
             <div class="col col5"> <span id="_goodsRealAmount4056_false" class="sum" style="color:#f40">¥<P>${element.price}</p></span>
             </div><div class="col col6"><span id="addToFavSpan4056_false" class="u-opt" >移入我的收藏</span><a class="u-opt deleteGoods" href="javascript:void(0)">删除</a>    
    </div> 
    </div>
    </li>`
    })
}
;
$(".m-goods").html(str);
$(".qx").change(function(){
    if( $(this).prop("checked") ){
        $(".u-chk").css({"background-position-x":0,"background-position-y":0})
    }else{
        $(".u-chk").css({"background-position-x":0,"background-position-y":-24})
    }
 })

 $(".gooditm").change(function(){
    //$(this)
    if( $(this).find(".u-chk").prop("checked") ){
        $(this).find(".u-chk").css({"background-position-x":0,"background-position-y":0})
    }else{
        $(this).find(".u-chk").css({"background-position-x":0,"background-position-y":-24})
    }
 })


 
 var num = 1;
 var price = $(".col5").find(".sum p").html()
 $(".plus").click(function(){    
     ++num
     $(this).siblings(".ipt").val(num);
   
     $(this).parent().parent().siblings(".col5").find(".sum p").html(price * num)
    //alert(parseInt(_price))
 })
 $(".z-dis").click(function(){
     $(this).siblings(".ipt").val(--num)
 })
//  $(".gooditm").click(function(){
//     alert($(this).index())
//  })
 //删除
 console.log($.cookie("good"))
 $(".u-opt").click(function(){
    let shop_id = $(this).parent().siblings(".col1").attr("data-id");
    var arr = JSON.parse($.cookie("good"));
    for( var i = 0; i < arr.length; i++){
        if( arr[i].id == shop_id ){            
            arr.splice(i,1);          
            $.cookie("good",JSON.stringify(arr),{ expires: 7,path: '/' });
            $(this).parent().parent().remove()
        }
    }
 })  
