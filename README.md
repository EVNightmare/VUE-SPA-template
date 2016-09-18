# Vue 单页应用模板(纯前端)


使用 vue, vuex, vue-resource, vue-router, vue-strap 等   
##### 此为纯模板


## 开发

```
$ git clone git@github.com:EVNightmare/VUE-SPA-template.git
$ cd VUE-SPA-template
$ npm install
$ node server
```
在浏览器中打开 http://localhost:8090

## 调试
- 默认开启 vue-devtools [chrome浏览器扩展](https://github.com/vuejs/vue-devtools)
 手动开启方式:

```
添加 Vue.config.devtools = true
```

### 目录结构

```
<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── src                      // 生产目录
│   ├── api                  // API 请求
│   ├── assets               // css 和图片资源
│   ├── components           // 组件
│   ├── utils                // 工具函数
│   ├── vuex            		 // vuex相关文件, store,action
│   └── views            		 // vue-router相关页面组件
│   └── routes.js            // 路由配置
│   └── main.js              // 入口文件
├── index.html               // 主页html
├── package.json             // 项目配置文件
├── server.js                // 开发环境启动server
├── webpack.config.js        // Webpack 配置文件
.
</pre>
```

发布代码
```
npm run dist
```

## License
MIT
