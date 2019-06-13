<template>
	<div class="modal fade" id="administer-add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
					<div class="modal-content">
					<div class="modal-header">
					<h4 class="modal-title">管理员添加</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
	
					<div class="modal-body">
					<div class="row">
						<div class="col">
							
							<div class="form-group">
							<label for="normal-input" class="form-control-label">用户名：</label>
							<input name="username" class="form-control">
							</div>
							
							<div class="form-group">
							<label for="normal-input" class="form-control-label">密码：</label>
							<input type="password" name="password" class="form-control">
							</div>
							
							<div class="form-group">
							<label for="exampleFormControlSelect1" class="form-control-label">角色：</label>
							<select class="form-control select" name="gid" style="height:36px">
							<option value="">选择角色</option>
							<option value="1">超级管理员</option>
							<option value="2">管理员</option>
							
							</select>
							</div>
							
							<div class="form-group">
							<label for="normal-input" class="form-control-label">手机号码：</label>
							<input type="number" name="phone" class="form-control" >
							</div>
							
							
						</div>
					</div>
					</div>
	
					<div class="modal-footer">
						
					<button type="button" class="btn btn-success">提交</button>
					<button type="button" class="btn btn-light" data-dismiss="modal">取消</button>
					
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
		
	}
</script>

<style>
select{
	.height:36px
}
</style>
