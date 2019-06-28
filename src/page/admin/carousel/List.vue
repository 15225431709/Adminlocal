<template>
	<div class="card">
	    <div class="card-header bg-light">
	        <button title="添加" @click="edit(1,Object)" class="btn btn-primary btn-sm" type="button"><i class="glyphicon glyphicon-plus"></i></button>
			<span class="float-right">								
			<button title="刷新" class="btn btn-danger btn-sm" type="button"><i class="glyphicon glyphicon-refresh"></i></button>
			</span>	
	    </div>
	
	                 <div class="card-body">
	                     <div class="table-responsive">
	                         <table class="table table-bordered">
	                             <thead class="thead-light">
	                             <tr>
	                                 <th width="60">ID</th>
	                                 <th width="90">Title</th>
	                                 <th width="200">预览图</th>
	                                 <th width="90">状态</th>
	                                 <th width="60">排序</th>
				                     <th width="80">用途</th>
				                     <th width="140">操作</th>
	                             </tr>
	                             </thead>
	                             <tbody>
	                             <tr v-for="(item,index) in list" :key="item.title">
	                                 <td class="align-middle">{{item.id}}</td>
	                                 <td class="align-middle">{{item.title}}</td>
	                                 <td class="align-middle"><img class="images" :src="item.url"/></td>
	                                 <td class="align-middle">{{item.status==1?'启用中':'禁用中'}}</td>
	                                 <td class="align-middle">{{item.order}}</td>
				                     <td class="align-middle">{{item.use==1?'PC端':'移动端'}}</td>
				                     <td class="align-middle">
					                     <button title="编辑" @click="edit(2,item)" class="btn btn-primary btn-sm"><i class="glyphicon glyphicon-edit"></i></button>
					                     <button title="删除" class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-remove"></i></button>
				                     </td>
	                             </tr>
	                                    
	                             </tbody>
	                         </table>
	                     </div>
	                    </div>
						
			<carousel-edit :params="parmas" :type="type"></carousel-edit>			
	            </div>
</template>

<script>
	import Edit from './Edit.vue'
	export default {
		data() {
			return {
				list:[
					{id:'1',title:"图片一",url:'/static/imgs/banner1.png',use:'1',status:'1',order:'1',},
					{id:'2',title:"图片二",url:'/static/imgs/banner2.jpg',use:'1',status:'1',order:'2',},
					{id:'3',title:"图片三",url:'/static/imgs/banner2.jpg',use:'2',status:'1',order:'2',},
				],
				
				parmas:'',
				type:'',
			};
		},
		components:{
			"carousel-edit":Edit,
		},
		methods:{
			
			edit:function(type,data){
				if(data!=''){
					var datas=data;
				}else{
					var datas=Object;
				}
				console.log(datas);
				this.parmas=datas;
				this.type=type;
				$('#modal-carousel').modal();
			}
		}
	}
</script>

<style>
  .images{
	  width:90%;height:auto;text-align: center;
  }
</style>
