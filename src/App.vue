<template>
  <div id="app">
		  
			
    <router-view/>
	<div class="total" style="z-index:2000"></div>
	<app-confrim></app-confrim>	 
  </div>
</template>

<script>
import Confrim from './utils/Confrim.vue'
export default {

components:{
	"app-confrim":Confrim
}
  
}
</script>

<style>
	
  //墨绿色	
  .bg-green{background-color:#009688!important}
  .btn-green{background-color:#009688;color:#fff}
  //赤橙色
  .bg-orange{background-color:#FF5722!important}
  .btn-orange{background-color:#FF5722;color:#fff}
  //雅黑色
  .bg-black{background-color: #393D49!important}
  .btn-black{background-color: #393D49;color:#fff}
  
 
</style>
