/*
* @Author: vinceHuang
* @Date:   2016-09-21 10:28:21
* @Last Modified by:   vinceHuang
* @Last Modified time: 2016-09-21 10:29:12
*/

import {
  CARD_LIST,
  REQUEST_CARD_LIST
} from '../types'

const state = {
  list:null,
  isLoading:false
}

const mutations = {
  [CARD_LIST](state , action){
    state.list = action.list
    state.isLoading = false
  },
  [REQUEST_CARD_LIST](state , action){
    state.isLoading = true
  }
}

export default {
  state,
  mutations
}