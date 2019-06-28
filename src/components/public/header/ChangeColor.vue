<template>
	<div class="dropdown-menu" >
		<h5 class="text-dark text-center">选择主题</h5>
		<a class="dropdown-item" href="#" @click="changeBg('bg-primary')">										
			<span class="pd-5">优雅蓝</span>
			<button class="btn btn-sm btn-primary"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-success')">
			<span class="pd-5">清新绿</span>
			<button class="btn btn-sm btn-success"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-warning')">
			<span class="pd-5">淡雅黄</span>
			<button class="btn btn-sm btn-warning"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-dark')">
			<span class="pd-5">酷炫黑</span>
			<button class="btn btn-sm btn-dark"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-danger')">
			<span class="pd-5">醒目红</span>
			<button class="btn btn-sm btn-danger"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-info')">
			<span class="pd-5">天空蓝</span>
			<button class="btn btn-sm btn-info"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-secondary')">
			<span class="pd-5">暗淡灰</span>
			<button class="btn btn-sm btn-secondary"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-light')">
			<span class="pd-5">浅度灰</span>
			<button class="btn btn-sm btn-light"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-green')">
			<span class="pd-5">经典绿</span>
			<button class="btn btn-sm btn-green"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-orange')">
			<span class="pd-5">赤橙色</span>
			<button class="btn btn-sm btn-orange"> </button>
		</a>
		<a class="dropdown-item" href="#" @click="changeBg('bg-black')">
			<span class="pd-5">深度黑</span>
			<button class="btn btn-sm btn-black"> </button>
		</a>	
		<a class="dropdown-item" href="#" @click="changeBg('bg-white')">
			<span class="pd-5">默认白</span>
			<button class="btn btn-sm btn-white"> </button>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				color:'',
			};
		},
		methods:{
			
			changeBg:function(color){
				
				let bg=color;
				console.log("您选择了"+bg);
				this.$parent.changecolor(bg);
				
			}
		}
	}
</script>

<style>

</style>
