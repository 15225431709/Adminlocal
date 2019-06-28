<template>
	<div class="page-wrapper flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card p-4">
									  <div class="text-left text-primary p-1"><a @click="back" href="#"><i class="glyphicon glyphicon-menu-left"></i> 返回登陆</a></div>
                    <div class="card-header text-center text-uppercase h4 font-weight-light">
                        Register											
                    </div>
                    
                    <div class="card-body py-5">
                        <div class="form-group">
                            <label class="form-control-label">Name</label>
                            <input type="name" class="form-control">
                        </div>

                        <div class="form-group">
                            <label class="form-control-label">Email</label>
                            <input type="email" class="form-control">
                        </div>

                        <div class="form-group">
                            <label class="form-control-label">Password</label>
                            <input type="password" class="form-control">
                        </div>

                        <div class="form-group">
                            <label class="form-control-label">Confirm Password</label>
                            <input type="password" class="form-control">
                        </div>
                    </div>

                    <div class="card-footer">
                        <button type="button" class="btn btn-success btn-block">Create Account</button>
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
		
		methods:{
		back:function(){
			this.$router.go(-1);
		}	
		},
			
	}
</script>

<style>

</style>
