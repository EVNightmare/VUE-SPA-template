<template>
  <div id="wrapper" class="wrapper" :class="routeClass">
    <router-view></router-view>
  </div>
  <!-- <Toaster></Toaster> -->
</template>
<script>
import store from '../vuex/store'
// import Toaster from './Toaster/index.vue'
export default {
  store,
  // components: { Toaster },
  computed:{
  	routeClass(){
  		return 'app-'+this.$route.name
  	}
  },
  ready(){
  }
}
</script>
