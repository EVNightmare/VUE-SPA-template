import Vue from 'vue'
import Vuex from 'vuex'
import showtoast from './modules/showtoast'
import globalVal from './modules/global.val'
import article from './modules/article'



const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false


export default new Vuex.Store({
  modules:{
    showtoast,
    globalVal,
    article
  },
  strict:  debug
})