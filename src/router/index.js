import Vue from 'vue'
import Router from 'vue-router'

import New from '@/components/New'
import Index from '@/components/Index'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  //mode:'history',	
  
  routes: [
	  
    {
      path: '/Login',
      name: 'Login',
      component:Login,		
    },
		{
			path: '/404',
			name: '404',
			component:Error,		
		},
	{
	path: '/Register',
	name: 'Register',
	component:Register,		
	},

	{
		path:'/new',
		name:'New',
		component:New
	},
	{
		path:'/',
		name:'Admin',
		component:Admin,		
		
		children:[
			{path:'/Admin/Home',name:'Home',component:()=>import('@/page/admin/Home')},
			{path:'/Admin/Form',name:'Form',component:()=>import('@/page/admin/Form')},
			{path:'/Admin/Card',name:'Card',component:()=>import('@/page/admin/Card')},
			{path:'/Admin/Table',name:'Table',component:()=>import('@/page/admin/Table')},
			{path:'/Admin/Alert',name:'Alert',component:()=>import('@/page/admin/Alert')},
			{path:'/Admin/Button',name:'Button',component:()=>import('@/page/admin/Button')},
			{path:'/Admin/Modal',name:'Modal',component:()=>import('@/page/admin/Modal')},
			{path:'/Admin/Progress',name:'Progress',component:()=>import('@/page/admin/Progress')},
			{path:'/Admin/Tabs',name:'Tabs',component:()=>import('@/page/admin/Tabs')},
			{path:'/Admin/Widgets',name:'Widgets',component:()=>import('@/page/admin/Widgets')},
			{path:'/Admin/Site',name:'Site',component:()=>import('@/page/admin/Site')},
      {path:'/Admin/Auth',name:'Auth',component:()=>import('@/page/admin/Auth')},
			{path:'/Admin/Role',name:'Role',component:()=>import('@/page/admin/Role')},
			{path:'/Admin/Administer',name:'Administer',component:()=>import('@/page/admin/Administer')},
			{path:'/Admin/Carousel',name:'Carousel',component:()=>import('@/page/admin/Carousel')},
			{path:'/Admin/Category',name:'Category',component:()=>import('@/page/admin/Category')},
			{path:'/Admin/Article',name:'Article',component:()=>import('@/page/admin/Article')},
			{path:'/Admin/User',name:'User',component:()=>import('@/page/admin/User')},
			
		],
		redirect:'/Admin/Home',
		
	},
	 ],
  
 
 
})
