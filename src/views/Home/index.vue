<template>
	<div class="index container">
		from vinceHuang
		<ul>
				<!-- <li class="list01"></li> -->
			</ul>	
			<a class="btn btn-primary btn-lg" href="/card">贺卡列表</a>
			<a class="btn btn-success btn-lg" href="/card/add">添加贺卡</a>
			<!-- <button class="btn btn-primary btn-lg" type="button" @click="testLean">点我测试</button> -->
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