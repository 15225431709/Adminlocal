<template>
	<div class="row">
	                	            
	               <div class="col">
					  <div class="buttons">
					  <button type="button" class="btn btn-primary" @click="add">添加管理员</button>
					  </div>
					   
	                   <div class="card">
	                       <div class="card-header bg-light">
	                           管理员列表
	                       </div>
	
	                       <div class="card-body">
	                           <div class="table-responsive">
	                               <table class="table table-hover table-bordered">
	                                   <thead class="thead-dark">
	                                   <tr>
	                                       <th>ID</th>
	                                       <th>用户名</th>
										
										<th>角色</th>
	                                       <th>手机号码</th>
	                                       
										<th>状态</th>
	                                       <th>操作</th>
	                                   </tr>
	                                   </thead>
	                                   <tbody>
	                                    
	                                   <tr v-for="(item,index) in list">
										   <td>{{item.id}}</td>
										   <td>{{item.username}}</td>
										   
										   <td>{{item.title}}</td>
										    <td>{{item.phone}}</td>
										    
										    <td>
											    <span :class="item.status==0?'text-success':'text-danger'">{{item.status==0?'启用中':'禁用中'}}</span>                                      
										    <td>
										   	<a @click="edit(item)" href="javascript:;" title="编辑">
										   		<i class="glyphicon glyphicon-pencil"></i>
										   	</a>
										   	<a @click="del(item,index)" href="javascript:;" title="删除">
										   		<i class="glyphicon glyphicon-remove"></i>
										   	</a>
										   </td>
									   </tr>
									   
	                                    </tbody>
	                                </table>
	                            </div>
	                        </div>
	                    </div>
	                </div>
			<administer-add></administer-add>		
			<administer-edit :data="child"></administer-edit>
			
			
	    </div>
</template>

<script>
	import Edit from './administer/Edit.vue'
	import Add from './administer/Add.vue'
	
	
	export default {
		data() {
			return {
				list:[],				
				child:{},
				msg:'',
				message:'555',
				index:'',
				hidden:true
			};
		},
		components:{
			"administer-edit":Edit,
			"administer-add":Add,
			
	
		},
		mounted() {
			this.create();
		},
		methods:{
			
			create:function(){
				let data={token:'administer'};
				this.$axios.post('/apis/api/admin/administer',data).then(res=>{
					
					let result=res.data;
					if(result.status==1){
						
						this.list=result.data;
					}else{
						this.message(result.msg);
						}
					console.log(res);
				})		
			},
			
			edit:function(item){
				
				this.child=item;
				console.log(this.child)
		    $('#modal').modal();
			},
			add:function(){
				$('#administer-add').modal();
			},
			//删除
			del:function(item,index){
				var index=index;
				var list=this.list;
				this.inquiry('确定删除管理员 '+item.username+' ？',function(){
					var newlist = list.splice(index,1); 
					
				    alert("删除成功");
				});
			    
					
			},
			
			
			
		}
	}
</script>

<style>
  
</style>

