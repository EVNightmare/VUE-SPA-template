/*
* @Author: vinceHuang
* @Date:   2016-09-01 16:46:50
* @Last Modified by:   vinceHuang
* @Last Modified time: 2016-09-20 14:04:11
*/

'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import App from './views/App.vue'
import routerMap from './routes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/common.css'
import AV from 'leancloud-storage'
import VueClipboard from 'vue-clipboard'



// 初始化
AV.init({
  appId: 'LF72A7uP2vp2PYPEzWa3GxvX-gzGzoHsz',
  appKey: 'csWpTKH9RysY0hVabeqy3yXc'
});

window.AV = AV

Vue.use(VueClipboard)
Vue.use(VueResource)
Vue.use(VueRouter)

//实例化VueRouter
let router = new VueRouter({
    // hashbang: true,
    history: true,
    saveScrollPosition: true,
    transitionOnLoad: true
});

routerMap(router);
sync(store, router)

router.start(Vue.extend(App), 'app')
window.router = router
