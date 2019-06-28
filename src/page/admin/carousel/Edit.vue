<template>
	<div class="modal fade" id="modal-carousel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" >
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<span class="modal-title align-middle">{{type==1?'添加':'编辑'}}</span>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
	
				<div class="modal-body">
				 <form id="carousel">
					 <input name="id" type="hidden" />
                   <div class="form-group">
                     <label for="recipient-name" class="col-form-label">Title:</label>
                     <input type="text" class="form-control" name="title" :value="params.title?params.title:''">
                   </div>
				   <div class="form-group" v-if="params.url!=''">
				   <label for="recipient-name" class="col-form-label">图片:</label>
				   <div class="yl"><img :src="params.url"/></div>
				   </div>
				   
				   <div class="form-group">
				   <label for="recipient-name" class="col-form-label">排序:</label>
				   <input type="text" class="form-control" name="order" :value="params.order?params.order:''">
				   </div>
				   
				   <div class="form-group">
				   
				   <div class="toggle-switch" data-ts-color="primary">
				   	<label for="ts2" class="ts-label">启用状态:</label>
				   	<input name="status" id="ts2" type="checkbox" hidden="hidden" v-if="params.status==1" checked>
				   	<label for="ts2" class="ts-helper"></label>
				   </div>
				   </div>
                   
				   <div class="form-group">
				   
				   <div class="toggle-switch" data-ts-color="primary">
				   <label class="ts-label col-form-label">用途:</label>
				   <button v-for="(btns,index) in btns" :key="btns.title" class="btn btn-sm m-l-5" type="button" @click="check(index,btns.value)" :class="{checkin:active==index}">
				   {{btns.title}}
				   </button>
				   <input name="use" type="hidden"/>
				   </div>
				   </div>
				   
				   <div class="form-group">
				   <div class="row">
					  <div class="col-md-3 col-sm-6">
						  <label class="ts-label col-form-label">上传图片: </label>
						  <input type="file" @change="setImg"  accept="image/jpeg,image/jpg,image/png" ref='selectfile' name="url" style="display: none;"/>
						  <button type="button" @click="change" class="btn btn-green"><i class="glyphicon glyphicon-picture"></i> 选择图片</button>
					  </div>
					  <div class="col-md-3 col-sm-6">
						  <div class="bg-light imgbg"></div>
					  </div>
				   </div>
				   
				   </div>
				   
                 </form>	
				</div>
	
				<div class="modal-footer">
					
					<button type="button" class="btn btn-success">保存</button>
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
				btns:[
					{title:'PC端',value:'1'},
					{title:'移动端',value:'2'},
				],				
				active:'',
				
			};
		},
		props:["params","type"],
		methods:{
			check:function(i,v){
				this.active=i;				
				$('input[name="use"]').val(v);
				//console.log($('input[name="use"]').val());				
			},
			change:function(){
				$('input[name="url"]').trigger("click");
			},
			setImg:function(e){
				
				var rd=new FileReader();
				var InDom=this.$refs.selectfile;
				var files=InDom.files[0];
				rd.readAsDataURL(files);
				rd.onloadend=function(e){
					//console.log(this.result)
					var src=this.result;
					if(src!=''){
					$('.imgbg').html('<img src='+src+'><button type="button" class="btn btn-success btn-block">上传</button>');					
					}
				}
			},
		}
	}
</script>

<style>
  .checkin{
	  background:#5FB878;color:#fff
  }
  .m-l-5{
	  margin: 0 5px;
  }
  .imgbg{
	  width:100%;
  }
  .imgbg img{
	  width:100%;height:auto''
  }
  .yl{
	  width:50%
  }
  .yl img{
	  width:100%;height:auto
  }
</style>
