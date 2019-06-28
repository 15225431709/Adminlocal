<template>
	<div class="swiper-container" data-space-between='10'>
	<div class="swiper-wrapper">
						
	<div v-for="item in list" :key="item.title" class="swiper-slide">
	<img class="images d-block w-100" :src="item.url"/>
	</div>
						
	</div>
	<div class="swiper-pagination"></div>
					
	<!-- 如果需要导航按钮 -->   
	</div> 
</template>

<script>
	import Swiper from "swiper"
	export default {
		data() {
			return {
				
			};
		},
		props:['list'],
		mounted() {
			this.useswiper();
		},
		
		methods:{
			useswiper:function(){
							var mySwiper= new Swiper('.swiper-container',{
								//自动播放
								autoplay: true,
								//循环
								loop: true,        
								// 如果需要分页器       
								pagination: {
								el: '.swiper-pagination',
								},       
								// 如果需要前进后退按钮       
								nextButton: '.swiper-button-next',
								prevButton: '.swiper-button-prev',
								prevButton: '.swiper-button-prev', 
								//如果需要滚动条
								scrollbar: {
								el: '.swiper-scrollbar',
								},
								//切换效果   effect : 'fade'更改效果  'cube' 魔方旋转, 'coverflow' 展示多块  'filp'翻转					                   
			
							});
							mySwiper.scrollbar.$dragEl.css('background','#ff6600');
							
						}
		}
	}
</script>

<style>

</style>
