<template>
	
	<div class="card">
	    <div class="card-header bg-light">
	        轮播图展示	                            
	    </div>
	
	    <div class="card-body bg-light">
	        <show-swiper :list="list"></show-swiper>   
	    </div>
	</div>
			
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	
	import Swiperutil from '../../util/Swiperutil.vue'
	export default {
		data() {
			return {
				list:[
					{id:'1',title:"图片一",url:'/static/imgs/banner1.png',use:'1',status:'1',order:'1',},
					{id:'2',title:"图片二",url:'/static/imgs/banner2.jpg',use:'1',status:'1',order:'2',},
				],
			};
		},
		mounted() {
			
		},
		components:{
			"show-swiper":Swiperutil,
		},
		methods:{
			
		}
	}
</script>

<style>
.swiper-container{
	width:100%;
}
.images{
	width:100%;height:auto
}
</style>
