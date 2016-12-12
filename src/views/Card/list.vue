<template>
	<cover-list :items="list"></cover-list>
</template>
<script>
import coverList from '../../components/cardlist.vue'
export default{
  vuex:{
    getters:{
      list: ({cardStore}) => cardStore.list
    }
  },
  data(){
  	return{
      items:[
      {cover:'http://s2.aghcdn.com/gift/cards/img/default_gq01.png'},
      {cover:'http://s2.aghcdn.com/gift/cards/img/default_gq02.png'},
      {}
      ]
  	}
  },
  computed:{
  },
  components:{
    coverList
  },
  created(){
  },
  destory(){
  },
  methods:{
  },
  ready(){
  }
}
</script>
<style>

</style>