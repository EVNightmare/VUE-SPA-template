/*
* @Author: vinceHuang
* @Date:   2016-09-01 16:46:50
* @Last Modified by:   vinceHuang
* @Last Modified time: 2016-09-12 16:46:54
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

Vue.use(VueResource)
Vue.use(VueRouter)

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

routerMap(router);
sync(store, router)

router.start(Vue.extend(App), 'app')
window.router = router
console.log('main.js')
