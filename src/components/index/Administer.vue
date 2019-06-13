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
										<th>密码</th>
										<th>角色</th>
	                                       <th>手机号码</th>
	                                       <th>添加时间</th>
										<th>状态</th>
	                                       <th>操作</th>
	                                   </tr>
	                                   </thead>
	                                   <tbody>
	                                    
	                                   <tr v-for="(item,index) in list">
										   <td>{{item.id}}</td>
										   <td>{{item.username}}</td>
										   <td><input type="password"  :value="item.password" readonly></td>
										   <td>{{item.gid}}</td>
										    <td>{{item.phone}}</td>
										    <td>{{item.addtime}}</td>
										    <td>
											 <div class="toggle-switch" data-ts-color="success">
											 	<label :for="item.id" class="ts-label"></label>
											 	<input :id="item.id" type="checkbox" hidden="hidden" checked>
											 	<label :for="item.id" class="ts-helper"></label>
											 </div>                                          
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
			<dev-confrim :msg="msg" :index="index"></dev-confrim>
			
	    </div>
</template>

<script>
	import Edit from './administer/Edit.vue'
	import Add from './administer/Add.vue'
	import Confrim from '../util/Confrim.vue'
	
	export default {
		data() {
			return {
				list:[
					{id:'1',gid:'1',username:'admin',password:'123456',phone:'18629523065',addtime:'2019/06/11 15:00:00',},
					{id:'2',gid:'2',username:'陈独秀',password:'123456',phone:'18666666666',addtime:'2019/06/11 15:00:00',},
				],
				
				child:{},
				msg:'',
				message:'',
				index:'',
				hidden:true
			};
		},
		components:{
			"administer-edit":Edit,
			"administer-add":Add,
			"dev-confrim":Confrim,
	
		},
		methods:{
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
				//console.log(this.list)
				this.msg='确定删除管理员 '+item.username+' ?';
				this.index=index;
				$('#confrim').modal('show');
				
				//this.list.splice(index,1);
				
			},
			//子组建回调方法
			callback:function(index){
		      this.list.splice(index,1);
			  
			  alert("删除成功");			  
			}
		}
	}
</script>

<style>
  .buttons{
	  margin:0 0 15px 0
  }
</style>
