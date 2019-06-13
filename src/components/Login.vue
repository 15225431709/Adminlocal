<template>
	<div class="page-wrapper flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card p-4" >
                    <div class="card-header text-center text-uppercase h4 font-weight-light">
                        Login
                    </div>

                    <div class="card-body py-5">
                        <div class="form-group">
                            <label class="form-control-label">Username</label>
                            <input type="text" id="username" class="form-control">
                        </div>

                        <div class="form-group">
                            <label class="form-control-label">Password</label>
                            <input type="password" id="password" class="form-control">
                        </div>

                        <div class="custom-control custom-checkbox mt-4">
                            <input type="checkbox" class="custom-control-input" id="login">
                            <label class="custom-control-label" for="login">保持登陆状态</label>
							<a class="reg"  @click="register"><span>用户注册</span></a>
                        </div>
                    </div>

                    <div class="card-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-primary px-5" @click="login">Login</button>
                            </div>

                            <div class="col-6">
                                <a href="#" class="btn btn-link">Forgot password?</a>
                            </div>
                        </div>
                    </div>
                </div>
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
		mounted() {
			
		},
		methods:{
			register:function(){
				this.$router.push({
					path:'/Register'
				})
			},
			
			login:function(){
				let username=$('#username').val();
				let password=$('#password').val();
				
				if(username==''||password==''){
					alert("用户名和密码不能为空！");
					return;
				}else{
					alert("登陆成功！");
					this.$router.push({
						path: '/Admin',
						query: {
						username:username
						}
					})
				}
				
				
			}
		}
	}
</script>

<style>
 .reg{float:right}
</style>
