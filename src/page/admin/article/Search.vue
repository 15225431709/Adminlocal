<template>
	<form class="col-md-9" id="search">
		
		<input type="text" class="form-control w-15 float-left" placeholder="标题">
		
		<input type="text" class="form-control w-15 float-left" placeholder="作者">
		
		<div class="btn-group float-left" >
										<button class="btn btn-default  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												分类
										</button>
										<ul class="dropdown-menu">
											<li><a href="#">新闻</a></li>
											<li><a href="#">财经</a></li>
											<li><a href="#">活动通知</a></li>
										</ul>
									</div>
		
		<input type="text" class="form-control w-25 float-left" placeholder="时间">
		
		<button title="刷新" type="button" class="btn btn-default"><i class="glyphicon glyphicon-search"></i> 搜索</button>
		
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

</style>
