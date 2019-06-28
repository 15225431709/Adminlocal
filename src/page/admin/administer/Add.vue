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
						<form class="col" id="administer-add-form">
							
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
							
							<div class="form-group">							
							<div class="toggle-switch" data-ts-color="success">
							<label for="ts2" class="ts-label">状态：</label>
							<input id="ts2" type="checkbox" hidden="hidden" name="status" checked="0">
							<label for="ts2" class="ts-helper"></label>
							</div>
							</div>
						</form>
					</div>
					</div>
	
					<div class="modal-footer">
						
					<button type="button" class="btn btn-success" @click="submit">提交</button>
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
		methods:{
			submit:function(){				
				
			let username=$('input[name="username"]').val();
		    let password=$('input[name="password"]').val();
			let phone=$('input[name="phone"]').val();
			let gid=$('select[name="gid"]').val();
			console.log(gid);
			
			if(username==''||password==''||gid==''){
				this.message("请输入完整信息!");
				return;
			}
			
			if(phone!=''){				
				let myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				let reg=new RegExp(myreg);
				if(!reg.test(phone))
				{
				alert('请输入有效的手机号码！');
				return;
				}				
			}else{
				this.message("请输入手机号码!");
				return;
			}
			
			
			$('#administer-add').modal('hide');
			let form={
				username:username,
				password:password,
				phone:phone,
				gid:gid,
				
			}
		
		this.$axios.post('/apis/api/admin/add',form).then(res=>{
			let result=res.data;
			if(result.status==1){
				this.message(result.msg);
				this.$parent.create();
			}else{
			this.message(result.msg);
				return;
			}
		}); 
		
		
		}
	},
	}
</script>

<style>
select{
	.height:36px
}
</style>


