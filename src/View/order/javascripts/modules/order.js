$("#head").load("../../public/public.html", function () {
    require('../../../index/javascripts/modules/nav');
    $(".all-hook ul").hide()

    $(".all-hook h2").mouseenter(function () {
        $(".all-hook ul").show()
    })
    $(".all-hook").mouseleave(function () {
        $(".all-hook ul").hide()
    })
    $(".all-hook ul li").hover(function () {
        $(this).find(".pop").show()
    }, function () {
        $(this).find(".pop").hide()
    })
    
    
    //  let type2 = ["meal1","meal2","meal3"]
   
    //  for( var i = 0; i < type2.length; i++){
    //      console.log(type2[i])
    //  }
    //  type2.map(index =>{
    //      console.log(index)
    //  })

})
var rid = location.href.split("?")[1].split("=")[1];
//console.log(rid)
 var str = '';
 var str3 = '';
$.ajax({
    type:"get",
    url: "http://localhost:8000/shoplist.json",
    success:function(msg){
   
        for( var shopid in msg ){
            if( shopid == rid ){
                for( var goodid in msg[shopid]  ){
                    let bimgs = "";
                  
                    let arr = ["meal1","meal2","meal3"]
                    let newarr = [];
                    let type = 'meal1';
                    let item = msg[shopid][goodid]
                    for( var i = 0; i < arr.length; i++){
                        type = arr[i]
                        
                         bimgs = item[type].bimg.map(item => { return `<a href="item.ingping.com/6210.html">
                        <img title="" alt="" class="goods-img" src="./img2/${item}">
                         </a>` }).join('')
                         if( item[type].simg ){
                            var simgs =  item[type].simg.map(item => { return ` <li>
                            <img src="./img2/${item}">
                        </li>`}).join('')
                         }
                         newarr.push(bimgs)
                       
                       
                     }
                     //console.log(newarr)
                //      bimgs   = item[type].bimg.map(item => { return `<a href="item.ingping.com/6210.html">
                //      <img title="" alt="" class="goods-img" src="./img2/${item}">
                //       </a>` }).join('')
                //       if( item[type].simg ){
                //          var simgs =  item[type].simg.map(item => { return ` <li class="active-slide">
                //          <img src="./img2/${item}">
                //      </li>`}).join('')
                //    //console.log(type)
                //    arr.map( index => {
                //        console.log(index)
                //    })
                     str +=`<div class="gl-i-wrap gl-option single" style="display: block;">
                        <div class="p-img">
                            ${newarr[0]} 
                        </div>
                        <div class="gl-swiper goods goods1">
                            <div class="thumbs">
                                <ul class="gl-List">
                                     ${simgs}                        
                                </ul>
                            </div>
                        </div>
                        <div class="p-price">
                            <strong class="price"><em>¥</em><i>${item.meal1.price}</i></strong>
                            <span class="price-label">赠</span>
                        </div>
                        <div class="p-name ">
                            <a href="" title="${item.meal1.title}" target="_blank">
                                <em>${item.meal1.title}</em>
                                <i class="promo-words"></i>
                            </a>
                        </div>
                        <div style="display:none;" class="p-subtitle sales"></div>
                        <div class="p-subtitle">高品质话放直接监听功能坚固耐用</div>
                        <a class="comment com-thumb">
                            <i class="iconfont icon-xiaoxi">${item.meal1.xnum}</i>
                            <span id="proCommAmount_6210" class="com-amount"></span>
                        </a>
                        <a class="thumbup com-thumb">
                            <i class="iconfont icon-dianzan">${item.meal1.Fabulous}</i>
                            <span id="proGoodPerAmount_6210" class="thumb-amount">%</span>
                        </a>
                        <div class="gl-buttons">
                            <div class="gl-amount fl">
                                 <div class="gl-amount-num" id="number_6210">1</div>
                                <div class="gl-amount-btns">
                                    <div class="gl-increment"><i class="iconfont icon-jiantou-copy-copy-copy"></i></div>
                                    <div class="gl-descrement listfont"><i class="iconfont icon-jiantouarrow483"></i></div>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="gl-cart">加入购物车</a>
                            <div class="gl-follow fr">
                                <img class="follow-icon follow-leave" style="display: inline;" src="https://static.ingping.com/yp/images/shoucang1-1.0.0.jpg">
                                <img style="display: none;" class="follow-icon follow-hover" src="https://static.ingping.com/yp/images/shoucang1-1.0.0.jpg">
                                <span class="follow-word">收藏</span>
                            </div>
                        </div>
                </div>
                <div class="gl-i-wrap gl-option single" style="display: none;">
                        <div class="p-img">
                            ${newarr[1]}  
                        </div>
                        <div class="gl-swiper goods goods1">
                            <div class="thumbs">
                                <ul class="gl-List">
                                                        
                                </ul>
                            </div>
                        </div>
                        <div class="p-price">
                            <strong class="price"><em>¥</em><i>${item.meal2.price}</i></strong>
                            <span class="price-label">赠</span>
                        </div>
                        <div class="p-name ">
                            <a href="" title="${item.meal2.title}" target="_blank">
                                <em>${item.meal2.title}</em>
                                <i class="promo-words"></i>
                            </a>
                        </div>
                        <div style="display:none;" class="p-subtitle sales"></div>
                        <div class="p-subtitle">高品质话放直接监听功能坚固耐用</div>
                        <a class="comment com-thumb">
                            <i class="iconfont icon-xiaoxi">${item.meal2.xnum}</i>
                            <span id="proCommAmount_6210" class="com-amount"></span>
                        </a>
                        <a class="thumbup com-thumb">
                            <i class="iconfont icon-dianzan">${item.meal2.Fabulous}</i>
                            <span id="proGoodPerAmount_6210" class="thumb-amount">%</span>
                        </a>
                        <div class="gl-buttons">
                            <div class="gl-amount fl">
                                 <div class="gl-amount-num" id="number_6210">1</div>
                                <div class="gl-amount-btns">
                                    <div class="gl-increment"><i class="iconfont icon-jiantou-copy-copy-copy"></i></div>
                                    <div class="gl-descrement listfont"><i class="iconfont icon-jiantouarrow483"></i></div>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="gl-cart">加入购物车</a>
                            <div class="gl-follow fr">
                                <img class="follow-icon follow-leave" style="display: inline;" src="https://static.ingping.com/yp/images/shoucang1-1.0.0.jpg">
                                <img style="display: none;" class="follow-icon follow-hover" src="https://static.ingping.com/yp/images/shoucang1-1.0.0.jpg">
                                <span class="follow-word">收藏</span>
                            </div>
                        </div>
                </div>
                <div class="gl-i-wrap gl-option single" style="display: none;">
                <div class="p-img">
                   ${newarr[2]}  
                </div>
                <div class="gl-swiper goods goods1">
                    <div class="thumbs">
                        <ul class="gl-List">
                                                  
                        </ul>
                    </div>
                </div>
                <div class="p-price">
                    <strong class="price"><em>¥</em><i>${item.meal3.price}</i></strong>
                    <span class="price-label">赠</span>
                </div>
                <div class="p-name ">
                    <a href="" title="${item.meal3.title}" target="_blank">
                        <em>${item.meal3.title}</em>
                        <i class="promo-words"></i>
                    </a>
                </div>
                <div style="display:none;" class="p-subtitle sales"></div>
                <div class="p-subtitle">高品质话放直接监听功能坚固耐用</div>
                <a class="comment com-thumb">
                    <i class="iconfont icon-xiaoxi">${item.meal3.xnum}</i>
                    <span id="proCommAmount_6210" class="com-amount"></span>
                </a>
                <a class="thumbup com-thumb">
                    <i class="iconfont icon-dianzan">${item.meal3.Fabulous}</i>
                    <span id="proGoodPerAmount_6210" class="thumb-amount">%</span>
                </a>
                <div class="gl-buttons">
                    <div class="gl-amount fl">
                         <div class="gl-amount-num" id="number_6210">1</div>
                        <div class="gl-amount-btns">
                            <div class="gl-increment"><i class="iconfont icon-jiantou-copy-copy-copy"></i></div>
                            <div class="gl-descrement listfont"><i class="iconfont icon-jiantouarrow483"></i></div>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="gl-cart">加入购物车</a>
                    <div class="gl-follow fr">
                        <img class="follow-icon follow-leave" style="display: inline;" src="https://static.ingping.com/yp/images/shoucang1-1.0.0.jpg">
                        <img style="display: none;" class="follow-icon follow-hover" src="https://static.ingping.com/yp/images/shoucang1-1.0.0.jpg">
                        <span class="follow-word">收藏</span>
                    </div>
                </div>
        </div>&&`                        
               
                          
                    //   for( var j = 0; j < arr.length; j++ ){
                    //     var type2 = arr[j]
                    //     console.log(item[type2].bimg)
                   
                    //   }
                      
                                                  
                                                 
                                                 
                   

                }
            }
        }
       
        // str3 = str3.split('&&');
        // console.log(str3);
        
        // $(".p-img").each(index => {
        //     $(".p-img").eq(index).html(str3[index])
        // })
        var str2 = str.split("&&");
        
       // console.log(str2)
        $(".option-card").each( index =>{
            $(".option-card").eq(index).html(str2[index])
        })
       
        $(".gl-List li").hover(function(){
          
            $(this).css("border","1px solid red").siblings().css("border",0)
            $(this).parent().parent().parent().prev().find("a").eq($(this).index()).css("z-index","20").siblings().css("z-index",5)
        })
        $(".gl-options li").hover(function(){
            $(this).parent().next().children().eq($(this).index()).show().siblings().hide()
            $(this).addClass("gl-num-cur").siblings().removeClass("gl-num-cur");
        })

        //点击改变商品数量
        let num = 1;
        $(".gl-descrement").on("click", "i",function(){
           
         $(this).parent().parent().siblings(".gl-amount-num").html(++num)
        })
        $(".gl-increment").on("click"," i",function(){
            if( num <= 1 ) return ;
            $(this).parent().parent().siblings(".gl-amount-num").html(--num)
        })
        let str4 = '';
        $(".gl-cart").bind("click",function(){
          
          let img = $(this).parent().siblings(".p-img").find("img").attr("src");
          let price = $(this).parent().siblings(".p-price").find("i").html();
          let title = $(this).parent().siblings(".p-name").find("em").html();
          var json = {
              "id":num++,
              "img":img,
              "price":price,
              "title":title,
              
          }
          let goods = JSON.parse($.cookie('good') || '[]');
          goods.push(json)// 应该判断有没有这个商品，有的话 数量+1
          $.cookie("good",JSON.stringify(goods),{ expires: 7,path: '/' })
          console.log(goods)
            if( goods.length ){
                $(".cart-good-list").show();
                $(".no-goods-list").hide()
                var str = '<ul>'
                    goods.forEach(good => {
                        str += `
                            <li>
                                <div class="goods-image">
                                    <a href=""><img src="${good.img}" alt=""></a>
                                </div>
                                <div class="goods-details">
                                    <h3>${good.title}</h3>
                                    <p>${good.price}<a href=""><span>${good.num}x</span></a></p>
                                </div>
                            </li>
                        `
                    });
                
                str  += '</ul>'
                console.log(str)
                $(".cart-good-list").html(str)
            }
                
               
        })
     }
 })
 //   $.ajax({
    //      type: "get",
    //      url: "http://localhost:8000/shoplist.json",
    //      success: function (msg) {
    //          console.log(msg)
    //           for (var shopid in msg) {
    //               if (shopid == rid) {
    //                   for (var goodid in msg[shopid]) {
    //                       let arr = ["meal1","meal2","meal3"]
    //                       let type = "meal1";
    //                         //要显示的类型
    //                      let good = msg[shopid][goodid][type]
    //                           console.log(type)
    //                         //循环出来的每一个相应类型的商品
    //                       for( var i = 0; i < arr.length; i++ ){
    //                            type = arr[i]
    //                       }
    //                       console.log(type)
    //  //                     //let bimgs = good.bimg.map(item => { return `"item.ingping.com/6210.html"
    // //                           <img title="" alt="" class="goods-img" src="./img2/${item}">
    // //                       </a>` })
    // //                       let simgs = good.simg.map(item => { return ` <li class="active-slide">
    // //                           <img src="./img2/${item}">
    // //                       </li>`})
                        
    // //                       str += `<div class="gl-i-wrap gl-option single" style="display: block;">
    // //                                   <div class="p-img">
    // //                                      ${ bimgs.join('') }
    // //                                   </div>
    // //                                   <div class="gl-swiper goods goods1">
    // //                                       <div class="thumbs">
    // //                                           <ul class="gl-List">
    //                                                ${simgs.join('')}                                   
    //                                           </ul>
    //                                       </div>
    //                                   </div>
    //                                   <div class="p-price">
    //                                       <strong class="price"><em>¥</em><i>${good.price}</i></strong>
    //                                       <span class="price-label">赠</span>
    //                                   </div>
    //                                   <div class="p-name ">
    //                                       <a href="" title="${good.title}" target="_blank">
    //                                           <em>${good.title}</em>
    //                                           <i class="promo-words"></i>
    //                                       </a>
    //                                   </div>
    //                                   <div style="display:none;" class="p-subtitle sales"></div>
    //                                   <div class="p-subtitle">高品质话放直接监听功能坚固耐用</div>
    //                                   <a class="comment com-thumb">
    //                                       <i class="iconfont icon-xiaoxi">${good.xnum}</i>
    //                                       <span id="proCommAmount_6210" class="com-amount"></span>
    //                                   </a>
    //                                   <a class="thumbup com-thumb">
    //                                       <i class="iconfont icon-dianzan">${good.Fabulous}</i>
    //                                       <span id="proGoodPerAmount_6210" class="thumb-amount">%</span>
    //                                   </a>
    //                                   <div class="gl-buttons">
    //                                       <div class="gl-amount fl">
    //                                            <div class="gl-amount-num" id="number_6210">1</div>
    //                                           <div class="gl-amount-btns">
    //                                               <div class="gl-increment"><i class="iconfont icon-jiantou-copy-copy-copy"></i></div>
    //                                               <div class="gl-descrement listfont"><i class="iconfont icon-jiantouarrow483"></i></div>
    //                                           </div>
    //                                       </div>
    //                                       <a href="javascript:void(0)" class="gl-cart">加入购物车</a>
    //                                       <div class="gl-follow fr">
    //                                           <img class="follow-icon follow-leave" style="display: inline;" src="static.ingping.com/yp/images/shoucang1-1.0.0.jpg">
    //                                           <img style="display: none;" class="follow-icon follow-hover" src="">
    //                                           <span class="follow-word">收藏</span>
    //                                       </div>
    //                                   </div>
    //                           </div>&&`
    
    
    //                   }
    //               }
    //           }
    //           console.log(str)
    //           var str2 = str.split("&&");
    
    //           $(".gl-item").each(index => {
    
    //               $(".gl-item").eq(index).find(".option-card").html(str2[index])
    //           })
    //      }
    //  })
