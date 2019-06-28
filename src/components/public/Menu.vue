<template>
	<div class="sidebar">
	            <nav class="sidebar-nav">
	                <ul class="nav">
	                    <li class="nav-title"><h5 class="text-light">菜单栏</h5></li>

				<li class="nav-item nav-dropdown"  v-for="item in list" :key="item.title" :class="item.open?'open':''"  @click="show(item)"> 
						<a href="#" class="nav-link nav-dropdown-toggle"  >
							<i :class="item.sp"></i> {{item.title}} <i class="fa fa-caret-left"></i>
						</a>
						
					<ul class="nav-dropdown-items" >
						
						<li v-for="v in item.subItems" :key="v.title" @click="toLink(v.path,v.name)">
							<a href="#" class="nav-link second">
								{{v.title}}
							</a>
						</li>											
					</ul>
				</li>
	                </ul>
	            </nav>
	        </div>
</template>

<script>
	export default {
		data() {
			return {
				isshow:false,
				list:[
					{
        name:'System',
				title:'系统管理',
				sp:'glyphicon glyphicon-cog',
        open:false,
        subItems:[
          {name:'Home',path:'/Admin/Home',title:'系统展示'},
					{name:'Site',path:'/Admin/Site',title:'系统设置'}				   
          ]
          },
				    {
				name:'AdminUser',
				title:'管理员管理',
				sp:'glyphicon glyphicon-asterisk',
				open:false,
				subItems:[
					{name:'Administer',path:'/Admin/Administer',title:'管理员管理'},
					{name:'Role',path:'/Admin/Role',title:'角色管理'},
					{name:'Auth',path:'/Admin/Auth',title:'权限管理'},
				    ]		
					},
					{
					name:'Images',
					title:'图片管理',
					sp:'glyphicon glyphicon-picture',
					open:false,
					subItems:[						
						{name:'Carousel',path:'/Admin/Carousel',title:'轮播图管理'},						
					]
					},
					
					{
					name:'News',
					title:'资讯管理',
					sp:'glyphicon glyphicon-fire',
					open:false,
					subItems:[						
						{name:'Category',path:'/Admin/Category',title:'标题管理'},
						{name:'Article',path:'/Admin/Article',title:'文章管理'},						
					]
					},
					
					{
					name:'Users',	
					title:'用户管理',
					sp:'glyphicon glyphicon-user',
					open:false,
					subItems:[						
						{name:'User',path:'/Admin/User',title:'用户列表'},											
					]
					},
					
                    {
                name:'Function',
								title:'功能菜单',
				        sp:'glyphicon glyphicon-wrench',
                open:false,
                subItems:[
                    {name:'Card',path:'/Admin/Card',title:'卡片'},
                    {name:'Alert',path:'/Admin/Alert',title:'警告框'},
                    {name:'Button',path:'/Admin/Button',title:'按钮组'},
					          {name:'Modals',path:'/Admin/Modal',title:'模态层'},
					          {name:'Tabs',path:'/Admin/Tabs',title:'选项卡'},
					          {name:'Progress',path:'/Admin/Progress',title:'进度条'},
					          {name:'Widgets',path:'/Admin/Widgets',title:'展示'},
					          {name:'Tables',path:'/Admin/Table',title:'表格'},
                    ]
                },
                    {
                name:'Charts',
								title:'Chart图形',
				sp:'glyphicon glyphicon-signal',
                open:false,
                subItems:[
                    {name:'Chart',path:'/Admin/Chart',title:'图形展示'},                   
                    ]
                },
				{
				name:'Forms',
				title:'表单',
				sp:'glyphicon glyphicon-list-alt',
				open:false,
				subItems:[
					{name:'Form',path:'/Admin/Form',title:'表单列表'},                   
					]	
				},
				]
			};
		},
		created(){},
		mounted(){
			
		},
		methods:{
			show:function(item){
				//控制选中的菜单展示与隐藏
				//item.open ? item.open = false : item.open = true;
			//console.log(item)
				//控制只展示选中的菜单
				this.list.forEach(function(v,i){
                    v.open = false;
                })
                item.open = true;
			},
			toLink:function(link,name){
				let data={
					name:name
				};
				this.$emit('showMenu',data);
				
				this.$router.push({
					path:link
				})
				
				/*
				路由携带参数传递
				this.$router.push({
                  path: '/describe',
                  query: {
                  id: id
                  }
                })
				//获取方式：this.Router.query.id
                */
			}
		}
	}
	
	
</script>

<style>
h5{
	color:#fff
}
.sidebar{
	
}
.second{
	margin:0 30px;
}
.sidebar .nav-dropdown.open .nav-dropdown-items{
	background: #393D49;
}
</style>