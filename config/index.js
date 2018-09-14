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
        }
    },
    jsoptions: {// js配置
        'index': { //首页的入口
            index: './src/View/index/javascripts/index.js',
            vendor: './src/View/index/javascripts/vendor.js'
        },
        'order': './src/View/order/javascripts/list.js'
    },
     pages: [ 'index', 'order', 'shop' ],
    
}
module.exports = config