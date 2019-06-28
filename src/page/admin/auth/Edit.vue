<template>
<div class="modal fade" id="auth-edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title text-dark" >添加菜单</h5>       
	      </div>
	      <div class="modal-body">
	        <form id="auth-edit-form">
			      <div class="form-group">
	                <label for="recipient-name" class="col-form-label">菜单名称:</label>
	                <input type="text" class="form-control" name="menuTitle" :value="edit.name">
	              </div>
			     
			      <div class="form-group">			 
			        <label for="recipient-name" class="col-form-label">路径:</label>
			        <input type="text" class="form-control" name="menuPath" :value="edit.path">
			      </div>
			      <div class="form-group">		 
			        <label for="recipient-name" class="col-form-label">图标:</label>		  
			        <input type="text" @change="ic_change"  class="form-control" name="menuClass" :value="edit.sp" placeholder="输入图标样式">	
			      <div class="hit"><button type="button" class="btn btn-sm btn-primary">展示图标</button> <i id="icone"></i> 			
				    </div>		
			      </div>
			  
			</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-success" @click="submit_auth_edit">提交</button>
	        <button type="button" class="btn btn-danger" data-dismiss="modal">关闭</button>
	      </div>
	    </div>
	  </div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['edit'],
		methods:{
			submit_auth_edit:function(){
				let form=$('#auth-edit-form').serialize();
				$('#auth-edit').modal('hide');
			},
			ic_change:function(){
				let Icon=$('input[name="menuClass"]').val();
				console.log(Icon)
				$('#icone').addClass(Icon);
			}
		}
	}
</script>

<style>

</style>
