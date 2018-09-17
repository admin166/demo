const config = {
    htmloptions: { //html压缩的配置
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    },
    serveroptions: {// 热更新服务
        root: './dist',
        port: 8000,
        livereload: true
    },
    pages: [ 'index', 'order', 'shop' ,'public' ,'register','login'],
    cssoptions: {// css配置
        'index': { // index页面的css
            'common': [ // index页面处理之后的common.min.css需要合并的文件
                './src/Css/resert.scss',
                './src/View/index/Css/common/*.scss'
            ],
             // index页面处理之后的index.min.css需要合并的文件
            'index': './src/View/index/Css/Index/*.scss'
        },
        'order': {
            'order': [
                './src/Css/resert.scss',
                './src/View/order/*/*.scss'
            ]
        },
        'shop': {
            'common': [
                './src/Css/resert.scss',
                './src/View/shop/Css/common/*.scss'
            ],
            'shop': './src/View/shop/Css/shop/*.scss'
        },
        'register': {
            'common': [
                './src/Css/resert.scss',
                './src/View/register/css/common/*.scss'
            ],
            'register': './src/View/register/css/register/*.scss'
        }
    },
    jsoptions: {// js配置
        'index': { //首页的入口
            index: './src/view/index/javascripts/index.js',
            vendor: './src/view/index/javascripts/vendor.js'
        },
        'order': './src/view/order/javascripts/list.js',
        'shop':{ //首页的入口
            shop: './src/view/shop/js/shop.js',
           
        },
        'register':{ //首页的入口
            register: './src/view/register/js/register.js',
           
        },
        'login':{ //首页的入口
            login: './src/view/login/js/login.js',
           
        },
    },
    
    
}
module.exports = config