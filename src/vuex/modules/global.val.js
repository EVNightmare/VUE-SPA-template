import {
  WAIT_SMSCHECK,
  TICK_SMSCHECK
} from '../types'

const state = {
  waitSecond: 0,
  waitSecond_v: 0,
}

const mutations = {
  [WAIT_SMSCHECK](state,index){
    let wait =60
    if(index==0){
      state.waitSecond = wait
    }else{
      state.waitSecond_v = wait
    }
  },
  [TICK_SMSCHECK](state,index){
    if(index==0){
      if(state.waitSecond==0){return}
      state.waitSecond--
    }else{
      if(state.waitSecond_v==0){return}
      state.waitSecond_v--
    }
  }
}

export default {
  state,
  mutations
}