<template>
	<div class="page-wrapper flex-row align-items-center">
	<div class="container">
	<div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">404</span>
                <div class="mb-4">The page you are looking for was not found.</div>
				<div class="mb-4">页面不存在.</div>
                <a href="#"  @click="back" class="btn btn-link">返回首页</a>
            </div>
    </div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>

</style>
