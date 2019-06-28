<template>
	<form class="col-md-9">
		<input type="text" class="form-control w-15 float-left" placeholder="昵称">
		
		<div class="btn-group float-left" >
			<button class="btn btn-default  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					会员等级
			</button>
			<ul class="dropdown-menu">
				<li><a href="#">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
			</ul>
		</div>
		
		<input type="text" class="form-control w-15 float-left" placeholder="手机号码">
		
		<button title="搜索" type="button" class="btn btn-default"><i class="glyphicon glyphicon-search"></i> 搜索</button>
	</form>
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
  .form-control{
  	margin:0 5px
  }
</style>
