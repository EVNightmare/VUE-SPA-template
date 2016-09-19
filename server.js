/*
* @Author: vinceHuang
* @Date:   2016-09-01 16:35:50
* @Last Modified by:   vinceHuang
* @Last Modified time: 2016-09-19 14:23:10
*/

'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8090', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// 这里配置：请求http://localhost:9090/api，
// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var rewriteUrl = function(replacePath) {
    return function(req, opt) {  // gets called with request and proxy object
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };
};

var proxy = [
{
    path: "/api/*",
    target: "https://cnodejs.org",
    host: "cnodejs.org"
},
{
    path: new RegExp('/backend(.*)'),
    rewrite: rewriteUrl("$1"),
    target: "http://s6.care001.cn:5083/cas-app",
    host: "care001.cn",
    changeOrigin: true
 }
]
//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy:proxy
});
app.listen(8090);