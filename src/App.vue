<template>
  <div id="app">
		  
			
    <router-view/>
			 
  </div>
</template>

<script>

import Header from './components/Header';

export default {
  components:{
		"app-header":Header,
		
	}
}
</script>

<style>

</style>
