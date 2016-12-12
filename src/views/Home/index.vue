<template>
	<div class="index container">
		from 
		Ywah 
		<ul>
				<li class="list01">123312</li>
			</ul>	
			<button class="btn btn-primary btn-lg" type="button" @click="testLean">点我测试</button>
	</div>
</template>
<script>
import { testLean } from '../../vuex/actions'
require('../../assets/scss/index.css');

export default{
	vuex:{
	    actions:{
	    	testLean 
	    }
	},
  ready(){
    console.log('index.vue')
  }
}
</script>
<style>
	*{
		-webkit-bottom: border-box;
		-moz-bottom: border-box;
		-ms-bottom: border-box;
		-o-bottom: border-box;
		bottom: border-box;
	}
</style>