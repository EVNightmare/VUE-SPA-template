import {
  ARTICLE_LIST,
  REQUEST_ARTICLE_LIST
} from '../types'

const state = {
  list:null,
  isLoading:false
}

const mutations = {
  [ARTICLE_LIST](state , action){
    state.list = action.list
    state.isLoading = false
  },
  [REQUEST_ARTICLE_LIST](state , action){
    state.isLoading = true
  }
}

export default {
  state,
  mutations
}