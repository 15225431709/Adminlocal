<template>
	<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
	                <div class="modal-content">
	                <div class="modal-header">
	                <h4 class="modal-title">管理员编辑</h4>
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                    <span aria-hidden="true">&times;</span>
	                </button>
	                </div>
	
	                <div class="modal-body">
	                <div class="row">
						<div class="col">
							<input type="hidden" name="id" :value="data.id" />
							<div class="form-group">
							<label for="normal-input" class="form-control-label">用户名：</label>
							<input name="username" class="form-control" :value="data.username"  readonly>
							</div>
							
							<div class="form-group">
							<label for="normal-input" class="form-control-label">密码：</label>
							<input type="password" name="password" class="form-control" :value="data.password">
							</div>
							
							<div class="form-group">
							<label for="normal-input" class="form-control-label">手机号码：</label>
							<input type="number" name="phone" class="form-control" :value="data.phone">
							</div>
							
							<div class="form-group">
							<label for="exampleFormControlSelect1" class="form-control-label">角色：</label>
							<select class="form-control select" name="gid" style="height:36px">
							<option :value="data.gid">当前角色：
								<span v-if="data.gid==1">超级管理员</span>
								<span v-if="data.gid==2">管理员</span> 
							</option>
							<option value="1">超级管理员</option>
							<option value="2">管理员</option>
							
							</select>
							</div>
						</div>
					</div>
	                </div>
	
	                <div class="modal-footer">
						<!--
	                <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
	                <button type="button" class="btn btn-primary">Save changes</button>
					    -->
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
		props:['data']
	}
</script>

<style>
.modal-title{
	color:#1c1c1c;font-family: '宋体';font-weight: bolder;
}
</style>
