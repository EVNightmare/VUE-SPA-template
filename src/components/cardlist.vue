<template>
	<ul>
		<li v-for="it in items">
			<a v-link="{name:'card-detail',params:{cid:it.id||123}}">
				<img :src="it.cover" class="img-responsive" />
			</a>
		</li>
	</ul>
</template>
<script>
export default{
  props: {
      items: Array
  },
  data(){
  	return{}
  },
  computed:{
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
<style scoped>
	ul{
		margin: 0;
		padding: 0;
	}
	ul li{
		display: inline-block;
		width: 100px;
		height: 100px;
		background: #ddd;
	}
</style>