<template>
	<nav class="navbar page-header">
	        <a @click="ismob" class="btn btn-link sidebar-mobile-toggle d-md-none mr-auto">
	            <i class="fa fa-bars"></i>
	        </a>
	
	        <a class="navbar-brand" href="#">
	            <img src="/static/imgs/logo.png" alt="logo">
	        </a>
	
	        <a class="btn btn-link sidebar-toggle d-md-down-none" @click="ishide">
	            <i class="fa fa-bars"></i>
	        </a>
	
	        <ul class="navbar-nav ml-auto">
	            <li class="nav-item d-md-down-none">
	                <a href="#">
	                    <i class="fa fa-bell"></i>
	                    <span class="badge badge-pill badge-danger">5</span>
	                </a>
	            </li>
	
	            <li class="nav-item d-md-down-none">
	                <a href="#">
	                    <i class="fa fa-envelope-open"></i>
	                    <span class="badge badge-pill badge-danger">5</span>
	                </a>
	            </li>
	
	            <li class="nav-item dropdown">
	                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                    <img src="/static/imgs/avatar-1.png" class="avatar avatar-sm" alt="logo">
	                    <span class="small ml-1 d-md-down-none">John Smith</span>
	                </a>
	
	                <div class="dropdown-menu dropdown-menu-right">
	                    <div class="dropdown-header">Account</div>
	
	                    <a href="#" class="dropdown-item">
	                        <i class="fa fa-user"></i> Profile
	                    </a>
	
	                    <a href="#" class="dropdown-item">
	                        <i class="fa fa-envelope"></i> Messages
	                    </a>
	
	                    <div class="dropdown-header">Settings</div>
	
	                    <a href="#" class="dropdown-item">
	                        <i class="fa fa-bell"></i> Notifications 
	                    </a>
	
	                    <a href="#" class="dropdown-item">
	                        <i class="fa fa-wrench"></i> Settings
	                    </a>
	
	                    <a href="#" class="dropdown-item">
												<router-link to="/">
	                        <i class="fa fa-lock"></i> Logout
												</router-link>	
	                    </a>
	                </div>
	            </li>
	        </ul>
	    </nav>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		created(){
			
		},
		methods:{
			//侧边栏显示隐藏
			 ishide:function(){
				$('body').toggleClass('sidebar-hidden');
			},
			ismob:function(){
				$('body').toggleClass('sidebar-mobile-show');
			}
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
</style>
