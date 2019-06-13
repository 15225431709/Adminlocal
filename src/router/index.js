import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import New from '@/components/New'
import Index from '@/components/Index'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
//二级路由（展示模块）
import Home from '@/components/index/Home'
import Form from '@/components/index/Form'
import Card from '@/components/index/Card'
import Table from '@/components/index/Table'
import Alert from '@/components/index/Alert'
import Button from '@/components/index/Button'
import Modal from '@/components/index/Modal'
import Progress from '@/components/index/Progress'
import Widgets from '@/components/index/Widgets'
import Tabs from '@/components/index/Tabs'
//功能模块
import Site from '@/components/index/Site'
import Role from '@/components/index/Role'
import Auth from '@/components/index/Auth'
import Administer from '@/components/index/Administer'


Vue.use(Router)

export default new Router({
  //mode:'history',	
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login,		
    },
	{
	path: '/Register',
	name: 'Register',
	component:Register,		
	},
	{
		path:'/About',
		name:'About',
		component:About
	},
	
	{
		path:'/new',
		name:'New',
		component:New
	},
	{
		path:'/Admin',
		name:'Admin',
		component:Admin,
		children:[
			{path:'/Admin/Home',name:'Home',component:Home},
			{path:'/Admin/Form',name:'Form',component:Form},
			{path:'/Admin/Card',name:'Card',component:Card},
			{path:'/Admin/Table',name:'Table',component:Table},
			{path:'/Admin/Alert',name:'Alert',component:Alert},
			{path:'/Admin/Button',name:'Button',component:Button},
			{path:'/Admin/Modal',name:'Modal',component:Modal},
			{path:'/Admin/Progress',name:'Progress',component:Progress},
			{path:'/Admin/Tabs',name:'Tabs',component:Tabs},
			{path:'/Admin/Widgets',name:'Widgets',component:Widgets},
			{path:'/Admin/Site',name:'Site',component:Site},
      {path:'/Admin/Auth',name:'Auth',component:Auth},
			{path:'/Admin/Role',name:'Role',component:Role},
			{path:'/Admin/Administer',name:'Administer',component:Administer},
		],
		redirect:'/Admin/Home',
	},
	
  ]
})
