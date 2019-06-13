<template>
	<div class="sidebar">
	            <nav class="sidebar-nav">
	                <ul class="nav">
	                    <li class="nav-title"><h5>菜单栏</h5></li>

				<li class="nav-item nav-dropdown" v-for="item in list" :class="item.open?'open':''"  @click="show(item)"> 
						<a href="#" class="nav-link nav-dropdown-toggle"  >
							<i :class="item.sp"></i> {{item.name}} <i class="fa fa-caret-left"></i>
						</a>
						
					<ul class="nav-dropdown-items" >
						
						<li v-for="v in item.subItems" @click="toLink(v.path,v.name)">
							<a href="#" class="nav-link second">
								{{v.name}}
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
				list:[{
                name:'系统管理',
				sp:'glyphicon glyphicon-cog',
                open:false,
                subItems:[
                    {name:'Home',path:'/Admin/Home'},
					{name:'网站设置',path:'/Admin/Site'}				   
                    ]
                },
				    {
				name:'管理员设置',
				sp:'glyphicon glyphicon-asterisk',
				open:false,
				subItems:[
					{name:'管理用户',path:'/Admin/Administer'},
					{name:'角色管理',path:'/Admin/Role'},
					{name:'权限管理',path:'/Admin/Auth'},
				    ]		
					},
                    {
                name:'功能菜单',
				sp:'glyphicon glyphicon-wrench',
                open:false,
                subItems:[
                    {name:'Card',path:'/Admin/Card'},
                    {name:'Alert',path:'/Admin/Alert'},
                    {name:'Button',path:'/Admin/Button'},
					{name:'Modals',path:'/Admin/Modal'},
					{name:'Tabs',path:'/Admin/Tabs'},
					{name:'Progress',path:'/Admin/Progress'},
					{name:'Widgets',path:'/Admin/Widgets'},
					{name:'Tables',path:'/Admin/Table'},
                    ]
                },
                    {
                name:'Chart图形',
				sp:'glyphicon glyphicon-signal',
                open:false,
                subItems:[
                    {name:'Chart',path:'/Admin/Chart'},                   
                    ]
                },
				{
				name:'表单',
				sp:'glyphicon glyphicon-list-alt',
				open:false,
				subItems:[
					{name:'Form',path:'/Admin/Form'},                   
					]	
				}
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
	background: #000;
}
.second{
	margin:0 30px;
}
.sidebar .nav-dropdown.open .nav-dropdown-items{
	background: #333
}
</style>