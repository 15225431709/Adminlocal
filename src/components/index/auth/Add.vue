<template>
	<div class="modal fade" id="auth-add" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" >添加菜单</h5>       
      </div>
      <div class="modal-body">
        <form id="auth-add-form">
		      <div class="form-group">
            <label for="recipient-name" class="col-form-label">菜单名称:</label>
            <input type="text" class="form-control" name="menuTitle">
          </div>
		      <div class="form-group">			 
		        <label for="recipient-name" class="col-form-label">父级菜单ID:</label>		  
		        <input type="text" class="form-control" name="menuPid"  :value="add" disabled>			  	
		      </div>
		      <div class="form-group">			 
		        <label for="recipient-name" class="col-form-label">路径:</label>
		        <input type="text" class="form-control" name="menuPath">
		      </div>
		      <div class="form-group" v-if="type==1">		 
		        <label for="recipient-name" class="col-form-label">图标:</label>		  
		        <input type="text" @change="ic_change"  class="form-control" name="menuClass" placeholder="输入图标样式">	
		      <div class="hit"><button type="button" class="btn btn-sm btn-primary">展示图标</button> <i id="icons"></i> 			
			    </div>		
		      </div>
		  
		</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" @click="submit_auth_add">提交</button>
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
		props:['add','type'],
		methods:{
			ic_change:function(){
				let Icon=$('input[name="menuClass"]').val();
				console.log(Icon)
				$('#icons').addClass(Icon);
			},
			
			submit_auth_add:function(){
				let form=$('#auth-add-form').serialize();
				alert('提交成功!');
				$('#auth-add').modal('hide');
			}
		}
	}
</script>

<style>
  .hit{
	  line-height: 35px;height:35px;
  }
</style>
