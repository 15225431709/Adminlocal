<template>
	
	<div class="alert alert-warning" role="alert" id="msg" :class="{hide:hidden}">
       {{message}}
	   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
       <span aria-hidden="true">&times;</span>
       </button>
    </div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['message','hidden'],		
	}
</script>

<style>
  
</style>
