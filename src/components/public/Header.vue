<template>
	
	<nav class="navbar page-header" :class="color" id="page-header">
		
	        <a @click="ismob" class="btn btn-link sidebar-mobile-toggle d-md-none mr-auto">
	            <i class="glyphicon glyphicon-align-justify"></i>
	        </a>
	
	        <a class="navbar-brand" href="#">
	            <img src="/static/imgs/logo.png" alt="logo">
							
	        </a>
	
	        <a title="隐藏侧边栏" class="btn btn-link sidebar-toggle d-md-down-none" @click="ishide">
	            <i class="glyphicon glyphicon-align-justify"></i>
	        </a>
				
           
			<ul class="navbar-nav  ml-auto">
                <li class="nav-item d-md-down-none">
      	        <a href="#" id="dropdown" @click="colors" data-toggle="dropdown" title="换肤">
      			<i class="glyphicon glyphicon-ice-lolly"></i>										
      	        </a>
      	        <header-change></header-change>							
                </li>
                <li class="nav-item d-md-down-none">
      	          <a href="#" title="通知">
      		          <i class="glyphicon glyphicon-bell"></i>
      		          <span class="badge badge-pill badge-danger">5</span>
      	          </a>
                </li>
                <li class="nav-item d-md-down-none">
      	          <a href="#" title="消息">
      		          <i class="glyphicon glyphicon-envelope"></i>
      		          <span class="badge badge-pill badge-danger">5</span>
      	          </a>
                </li>
                <li class="nav-item d-md-down-none dropdown">
                <a href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          	  <div class="text-center  float-left" >
	          		  <img src="/static/imgs/avatar-1.png" class="rounded-circle" style="width:3rem"/>			  
	          	  </div>
	          	<div class="float-left" style="line-height:3rem"><span class="small ml-1 d-md-down-none ">{{name?name:'未登录'}}</span></div>                	
                </a>
	  
	  			<div class="dropdown-menu dropdown-menu-right float-left">
	  				<a href="#" class="dropdown-item" @click="logout">  					
	  					<i class="glyphicon glyphicon-off"></i> 退出登录	  						 
	  				</a>
	  			</div>
      </li>			
    </ul>
			
	    </nav>
		
		
</template>

<script>
	import Change from './header/ChangeColor.vue'
	import {addCookie,getCookie,delCookie} from '../../assets/js/cookie.js'
	export default {
		data() {
			return {
				color:'',
			};
		},
		computed:{
			name(){
				
				return this.$store.state.userinfo.username;
			}
		},
		methods:{
			//侧边栏显示隐藏
			 ishide:function(){
				$('body').toggleClass('sidebar-hidden');
			},
			ismob:function(){
				$('body').toggleClass('sidebar-mobile-show');
			},
			//换肤
			colors:function(){
				$('#dropdown').dropdown();
				
			},
			
			changecolor:function(color){			
				this.color=color;
							
				if(color!="bg-white" && color!='bg-light'){
				$('.page-header a i').css("color","#fff");
				$('.page-header .ml-1').css("color","#fff");
				}else{
				$('.page-header a i').css("color","#337ab7");
				$('.page-header .ml-1').css("color","#337ab7");
				}
			},
			logout:function(){
				delCookie('username');
				this.message('注销登录成功');
				this.$router.push({
					path:'/Login'
				})
			}
		},
		components:{
			"header-change":Change,
		}
	}
	
	 
</script>

<style>
  .navbar{
	  margin-top:0
  }
  .navbar-brand{
	  padding:5px 15px
  }
	.pd-5{
		padding:0 10px 0 0
	}
	
</style>
