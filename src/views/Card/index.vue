<template>
<div class="cardWrap">
  <router-view></router-view>
</div>
</template>
<script>
import { getCards } from '../../vuex/actions'
require('../../assets/scss/card_common.css')
export default{
  vuex:{
    getters:{
      list: ({cardStore}) => cardStore.list
    },
    actions:{
      getCards
    }
  },
  data(){
  	return{
  	}
  },
  computed:{
  },
  created(){
    if(!this.list){
      this.getCards()
    }
  },
  methods:{
  },
  ready(){
  }
}
</script>
