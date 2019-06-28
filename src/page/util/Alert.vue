<template>
	    <div>
		<div class="col-md-3"></div>	
		 <div class="alert alert-dismissible  util-alert col-md-6" id="alert" >
			 
			 <p>{{msg}}</p>
			<button>close</button>	 
		 </div>		
		</div>
		
</template>

<script>
	export default {
		data() {
			return {
				msg:'暂无消息',
			};
		}
	}
</script>

<style>
   .util-alert{
	   position:absolute;top:20%;left:25%;z-index: 9;
   }
</style>
