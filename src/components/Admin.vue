<template>
<div class="page-wrapper index">
   <app-header></app-header>
   <div class="main-container">
        
				<app-menu @showMenu="getMenu"></app-menu>

        <div class="content" id="content">		
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
	import {getpath} from '../assets/js/before.js'
	import {addCookie,getCookie,delCookie} from '../assets/js/cookie.js'	
	export default {
		name:'Index',
		data() {
			return {
				user:'',
				menu:'',
				name:'',
			};
		},		
		created(){
			
		
		},
		mounted(){
			this.dd();
		},
		components:{
			"app-header":Header,
			"app-menu":Menu,
			"admin-nav":Nav
		},
		methods:{
		
     getMenu(data){			 		 
			 this.menu=data.name;			 
		 },
		 
		 dd:function(){
			
			 this.menu=this.$route.name;			 
			 getpath();
			
		 }
		},
		
		

	}
</script>

<style>
.buttons{
	  margin:0 0 15px 0
  }

.total{
	position:absolute;top:40%;z-index:999;width:20%;left:40%;
}	
</style>
