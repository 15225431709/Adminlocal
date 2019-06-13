<template>
	<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
	<li class="breadcrumb-item">当前路径：</li>	
	<li class="breadcrumb-item"><a href="#">Admin</a></li>   
	<li class="breadcrumb-item active" aria-current="page">{{menu}}</li>
	</ol>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
          menu: String,
          
        }
	}
</script>

<style>

</style>
