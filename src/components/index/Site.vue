<template>
	<div class="row">
			
		<div class="col">
		    <div class="form-group">
		    <label for="normal-input" class="form-control-label">网站名称：</label>
		    <input id="normal-input" class="form-control" value="" placeholder="请输入网站名称">
		    </div>
			<div class="form-group">
				<label for="textarea">网站介绍：</label>
				<textarea id="textarea" class="form-control" rows="3">
					该网站......
				</textarea>
			</div>
			
			<div class="form-group log" >
				<div class="left">
				<label for="textarea">网站LOGO：</label>
				</br>
				<button type="button" class="btn btn-primary">选择图片</button>
				</div>
				<div class="right img">暂无图片</div>
			</div>
			
			<div class=" butt" >
				<button type="button" class="btn btn-block btn-success">提交</button>
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
.log{
		margin-top:25px ;margin-bottom: 25px;
	}
	.left{
		width:25%;float:left;height:80px;
	}
   .img{
	   width:80px;height:80px;border: #999 1px solid;background: #eee;float:left;text-align: center;line-height:80px;
   }
   .butt{
	   position: relative;top:20px
   }
</style>
