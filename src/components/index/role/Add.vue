<template>
	<div class="modal" tabindex="-1" role="dialog" id="role-add">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">添加角色</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
			<div class="col">
				<div class="form-group">
					<label for="normal-input" class="form-control-label">角色名称：</label>
					<input name="rolename" class="form-control" value="" placeholder="输入角色名称">
				</div>
			</div>
		</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success">提交</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">取消</button>
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
		}
	}
</script>

<style>

</style>
