<template>
	<div class="row">
		<div class="col">
			<div class="buttons">
			<button type="button" class="btn btn-primary" @click="addMenu(0,1)">添加</button>
			
			</div> 
			<div class="card">
				<div class="card-header bg-light">
					菜单列表
				</div>
				<div class="card-body">
					<ul class="list-group">
                    <li class="list-group-item disabled active">
						<div class="row">
							<div class="col-md-1"></div>
							<div class="col-md-1">ID</div>
							<div class="col-md-2">菜单名称</div>
							<div class="col-md-2">图标</div>
							<div class="col-md-3">路径</div>
							<div class="col-md-3">操作</div>
						</div>
					</li>
                    <li v-for="(item,index) in list" :key="item.name" class="list-group-item">
						<div class="row">
							<div class="col-md-1 col-xs-1"><i class="glyphicon glyphicon-tree-conifer text-dark"></i></div>
							<div class="col-md-1 col-xs-1">{{item.mid}}</div>
							<div class="col-md-2 col-xs-2">{{item.name}}</div>
							<div class="col-md-2 col-xs-1"><i :class="item.sp"></i></div>
							<div class="col-md-3 col-xs-3">{{item.path?item.path:'*'}}</div>
							<div class="col-md-3 col-xs-4">
								<button title="编辑菜单" type="button" class="btn btn-warning btn-sm" @click="editMenu(item)">
									<i class="glyphicon glyphicon-pencil"></i>
								</button>
								<button title="添加子菜单" type="button" class="btn btn-info btn-sm" @click="addMenu(item.mid,2)">
									<i class="glyphicon glyphicon-plus-sign"></i>
								</button>
								<button title="删除菜单" type="button" class="btn btn-danger btn-sm" @click="del(item.mid)">
									<i class="glyphicon glyphicon-remove-sign"></i>
								</button>
							</div>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item" v-for="v in item.subItems" :key="v.name">
								<div class="row">
									<div class="col-md-1 col-xs-1"><i class="glyphicon glyphicon-grain text-dark" ></i></div>
									<div class="col-md-1 col-xs-1">{{v.mid}}</div>
									<div class="col-md-2 col-xs-2">{{v.name}}</div>
									<div class="col-md-2 col-xs-1"></div>
									<div class="col-md-3 col-xs-3">{{v.path?v.path:'*'}}</div>
									<div class="col-md-3 col-xs-4">
										<button title="编辑菜单" type="button" class="btn btn-warning btn-sm" @click="editMenu(v)">
											<i class="glyphicon glyphicon-pencil"></i>
										</button>
										<button title="添加子菜单" type="button" class="btn btn-info btn-sm" @click="addMenu(v.mid,2)">
											<i class="glyphicon glyphicon-plus-sign"></i>
										</button>
										<button title="删除菜单" type="button" class="btn btn-danger btn-sm" @click="del(v.mid)">
											<i class="glyphicon glyphicon-remove-sign"></i>
										</button>
									</div>
								</div>
								<ul class="list-group list-group-flush">
									<li class="list-group-item" v-for="child in v.child" :key="child.name">
										<div class="row">
											<div class="col-md-1"><i class="glyphicon glyphicon-leaf text-dark"></i></div>
											<div class="col-md-2">{{child.mid}}</div>
											<div class="col-md-3">{{child.name}}</div>
											<div class="col-md-6">
												<button title="编辑菜单" type="button" class="btn btn-warning btn-sm" @click="editMenu(child)">
													<i class="glyphicon glyphicon-pencil"></i>
												</button>												
												<button title="删除菜单" type="button" class="btn btn-danger btn-sm" @click="del(child.mid)">
													<i class="glyphicon glyphicon-remove-sign"></i>
												</button>
											</div>
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</li>                   
                    </ul>
				</div>
			</div>	
		</div>
		<auth-add :add="add" :type="type"></auth-add>
		<auth-edit :edit="edit"></auth-edit>
		<auth-confrim :msg="msg"></auth-confrim>
	</div>
</template>

<script>
	import Add from './auth/Add.vue'
	import Edit from './auth/Edit.vue'
	import Confrim from '../util/Confrim.vue' 
	export default {
		data() {
			return {
				edit:'',
				msg:'',
				add:'',
				type:'',
				list:[{
				mid:'1',	
                name:'系统管理',
				sp:'glyphicon glyphicon-cog',
                open:false,
                subItems:[
                    {mid:'2',name:'Home',path:'/Admin/Home',child:[
						{mid:'21',name:'添加'},
						{mid:'22',name:'编辑'},
						{mid:'23',name:'删除'},
					]
					},
					{mid:'3',name:'网站设置',path:'/Admin/Site'}				   
                    ]
                },
				    {
				mid:'4',		
				name:'管理员设置',
				sp:'glyphicon glyphicon-asterisk',
				open:false,
				subItems:[
					{mid:'5',name:'管理用户',path:'/Admin/Administer'},
					{mid:'6',name:'角色管理',path:'/Admin/Role'},
					{mid:'7',name:'权限管理',path:'/Admin/Auth'},
				    ]		
					},
                    {
				mid:'8',		
                name:'功能菜单',
				sp:'glyphicon glyphicon-wrench',
                open:false,
                subItems:[
                    {mid:'9',name:'Card',path:'/Admin/Card'},
                    {mid:'10',name:'Alert',path:'/Admin/Alert'},
                    {mid:'11',name:'Button',path:'/Admin/Button'},
					{mid:'12',name:'Modals',path:'/Admin/Modal'},
					{mid:'13',name:'Tabs',path:'/Admin/Tabs'},
					{mid:'14',name:'Progress',path:'/Admin/Progress'},
					{mid:'15',name:'Widgets',path:'/Admin/Widgets'},
					{mid:'16',name:'Tables',path:'/Admin/Table'},
                    ]
                },
                    {
				mid:'17',		
                name:'Chart图形',
				sp:'glyphicon glyphicon-signal',
                open:false,
                subItems:[
                    {mid:'18',name:'Chart',path:'/Admin/Chart'},                   
                    ]
                },
				{
				mid:'19',	
				name:'表单',
				sp:'glyphicon glyphicon-list-alt',
				open:false,
				subItems:[
					{mid:'20',name:'Form',path:'/Admin/Form'},                   
					]	
				}
				]
			};
		},
        components:{
			"auth-add":Add,"auth-edit":Edit,"auth-confrim":Confrim,
		},
		mounted() {
			
		},
		methods:{
			addMenu:function(mid,type){
				
				this.add=mid;
				this.type=type;
				console.log(this.add)
				$('#auth-add').modal();
			},
			editMenu:function(item){
				this.edit=item;
				console.log(this.edit);
				$('#auth-edit').modal();
			},
			del:function(mid){
				this.msg="确定删除该菜单？";
				$('#confrim').modal();
			},
			
			callback:function(){
				alert("删除成功！");
			}
		}
	}
</script>

<style>
 
</style>
