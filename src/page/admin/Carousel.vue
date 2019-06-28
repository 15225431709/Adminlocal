<template>
	<div class="row">
	<div class="col-md">
		
        <ul  class="nav nav-tabs" role="tablist">
	        <li class="nav-item" v-for="(item,index) in tabs" :key="item.title">
	            <a class="nav-link"  role="tab"  @click="tab(index,item.view)" :class="{active:active==index}">{{item.title}}</a>
	        </li>		                        
	    </ul>
    
		<div class="tab-content">
			<component :is="currentView"></component>
		</div>
	</div>
	</div>
</template>

<script>
	
	import Alert from '../util/Alert.vue'
	import List from './Carousel/List.vue'
	import Show from './Carousel/Show.vue'
	export default {
		data() {
			return {
				tabs:[
					{title:'轮播图列表',view:'List'},
					{title:'轮播图预览',view:'Show'},
				],
				currentView:'List',
				active:0,
			};
		},
		methods:{
			tab:function(i,view){
				this.active=i;
				this.currentView=view;
			}
		},
		components:{
			"carousel-alert":Alert,
			List,
			Show,
		}
	}
</script>

<style>

</style>
