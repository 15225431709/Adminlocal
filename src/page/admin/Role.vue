<template>
	<div class="row">
		
		<div class="col">
			<div class="buttons">
			<button type="button" class="btn btn-primary" @click="add">添加</button>
			<button type="button" class="btn btn-danger" @click="dels">删除</button>
			</div> 
			<div class="card">
				<div class="card-header bg-light">
					角色组管理
				</div>
				<div class="card-body">
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead class="thead-light">
							<tr>
								
								<th>ID</th>
								<th>角色</th>
								
								<th>操作</th>
								
							</tr>
							</thead>
							<tbody>
							<tr v-for="(role,index) in list" >
								
								<td>{{role.id}}</td>
								<td>{{role.name}}</td>
								
								<td>
									<button @click="edit(role)" class="btn btn-warning btn-sm">分配权限</button>
	                                <button class="btn btn-danger btn-sm">删除角色</button>
								</td>								
							</tr>
							
							
							</tbody>
						</table>
					</div>
				</div>
			</div>	
		</div>
		
		<Roleadd></Roleadd>
		<Roleedit :role="role"></Roleedit>
	</div>
</template>

<script>
	import Add from './role/Add.vue'
	import Edit from './role/Edit.vue'
	export default {
		data() {
			return {
				list:[
					{id:'1',name:'超级管理员',auths:''},
					{id:'2',name:'管理员',auths:''},
				],
				role:{}	,				
			};
		},
		components:{
			"Roleadd":Add,
			"Roleedit":Edit
		},
		mounted() {
			this.ceshi();
		},
		methods:{
			add:function(){
				$('#role-add').modal('show');
			},
			dels:function(){
				
			},
			edit:function(role){
				this.role=role;
				$('#role-edit').modal('show');
			},
			ceshi:function(){
				this.message('hiahiahia~');
			}
		}
	}
</script>

<style>

</style>
