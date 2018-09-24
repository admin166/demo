var goods = JSON.parse($.cookie("good"));
let str = '';
goods.forEach(element => {
    
    str +=` <div class="col col0">
              <input type="checkbox" class="u-chk" name="selectGood" style="outline:none;"></div>
            <div class="col col2"><a href="" id="3251" target="_blank" class="imgwrap">
                <img src="${element.img}" alt=""></a><div class="txtwrap"> <h3 class="goodtlt">
                    <a href="//item.ingping.com/3251.html" id="3251" target="_blank">${element.title}</a>
                    </h3>
            </div>
            </div>
            <div class="col col3"><span class="newprice" id="_goodsNPrice4056">${element.price}</span> </div><div class="col col4"><span class="u-setcount">
                <span id="_goodsNum1_min" class="minus z-dis" >-</span><input type="text" id="_goodsNum1" name="qty4056" value="1" maxlength="4"  class="ipt">
                    <span id="_goodsNum1_add" class="plus">+</span>
                </span>
            </div>
           <div class="col col5"><span id="_goodsRealAmount4056_false" class="sum" style="color:#f40">${element.price}</span></div>
          <div class="col col6"><span id="addToFavSpan4056_false" class="u-opt" >移入我的收藏</span><a class="u-opt deleteGoods" href="javascript:void(0)">删除</a>`
});
$(".clearfix").html(str)
