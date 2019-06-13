<template>
<div class="page-wrapper index">
   <app-header></app-header>
   <div class="main-container">
        
				<app-menu @showMenu="getMenu"></app-menu>

        <div class="content">

			
			<admin-nav :menu="menu">{{menu}}</admin-nav>		  

            <router-view></router-view>
        </div>
    </div>
    
</div>	
</template>

<script>
	import Header from './public/Header';
	import Menu from './public/Menu'
	import Nav from './public/Nav'
	export default {
		name:'Index',
		data() {
			return {
				user:'',
				menu:'',
			};
		},
		created(){
			
		
		},
		mounted(){
			
		},
		components:{
			"app-header":Header,
			"app-menu":Menu,
			"admin-nav":Nav
		},
		methods:{
		
         getMenu(data){
			 console.log('1'+data)
			 this.menu=data.name;
			 
		 }
		},
		
		

	}
</script>

<style>

</style>
