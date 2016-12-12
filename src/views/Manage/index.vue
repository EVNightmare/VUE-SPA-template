<template>
	<div class="index">
		Manage Index

		<accordion :one-at-atime="true" type="info">
		  <panel :header="item.title" v-for="item in list">
		    {{{ item.content}}}
		  </panel>
		</accordion>
		<router-view></router-view>
	</div>
</template>

<script>

import { getArticle } from '../../vuex/actions'
import {accordion,panel} from 'vue-strap'

require('../../assets/scss/article.css');

	export default{
		vuex:{
	    getters:{
	      list: ({article}) => article.list
	    },
	    actions:{
	    	getArticle
	    }
	  },
	  components: {
      accordion,panel
    },
	  created(){
	  	if(!this.list){
	  		this.getArticle()
	  	}
	  },
		ready(){
	    console.log('manage index')
	  }
	}
</script>
<style scoped>
	.index{
		color:#666;
		font-size: 20px;
	}

</style>