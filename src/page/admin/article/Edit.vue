<template>
	<div class="modal fade" id="modal-article" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content" >
				<div class="modal-header">
					<h5 class="modal-title text-dark">{{type==1?'添加':'编辑'}}</h5>
					
				</div>
	
				<div class="modal-body">
					<form id="article">
                    <div class="form-group">
                      <label for="article-name" class="col-sm-2 col-form-label">资讯标题:</label>
					  <div class="col-sm-10">
                      <input type="text" class="form-control" id="article-name" :value="datas.title">
					  </div>
                    </div>
					
                    <div class="form-group">
                    <label for="article-cate" class="col-sm-2 col-form-label">资讯分类：</label>
					<div class="col-sm-10">
                       <select class="form-control" id="article-cate" style="height:35px">
					   <option value="">{{datas.cate?datas.cate:''}}</option>	
                       <option value="1">新闻</option>
                       <option value="2">财经</option>
                       <option value="3">活动通知</option>                  
                    </select>
					</div>
                    </div>
					<div class="form-group">
					<label for="article-cate" class="col-sm-2 col-form-label">选择封面：</label>
					<div class="col-sm-10">
					  <div v-if="!datas.img" class="border border-primary w-25 rounded fm float-left">
						  <div class="fm text-secondary  imgbg">暂无图片</div>
					  </div>
					  <div v-else class="w-25 rounded float-left">						  
						  	<img class="w-100" :src="datas.img"/>
					  </div>
					  <div class="w-10 m-1 text-center float-left align-middle" style="display: none;">
						  <span class="text-primary">替换为</span>
					  </div>
					  <div class="w-25 m-1 float-left newimg" style="display: none;"></div>
					  <div class="float-left m-1 w-15">
					  <button type="button" class="btn btn-primary btn-sm btn-block" @click="changeImg">选择图片</button>
					  <button type="button" class="btn btn-default disabled btn-sm btn-block">上传图片</button>
					  <input @change="setImg(datas.img?'1':'2')" type="file" name="img" style="display: none;" accept="image/jpeg,image/jpg,image/png" ref='selectfile'/>
					  </div>
					</div>
					</div>
					
					<div class="form-group position-relative" style="top:10px">
                      <label for="exampleFormControlTextarea1" class="col-sm-2">资讯内容：</label>
					  <div class="col-sm-10">
                      <textarea class="form-control " id="exampleFormControlTextarea1" name="content" rows="5">
						  {{datas.content?datas.content:''}}
					  </textarea>
					  </div>
                    </div>
                    </form>
				</div>
	
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">关闭弹窗</button>
					<button type="button" class="btn btn-primary">资讯发布</button>
					<button type="button" class="btn btn-warning">存为草稿</button>
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
		props:["type","datas"],
		methods:{
			changeImg:function(){
				$('input[name="img"]').trigger('click');
			},
			setImg:function(evs){
				var rd=new FileReader();
				var InDom=this.$refs.selectfile;
				var files=InDom.files[0];
				
				rd.readAsDataURL(files);
				rd.onloadend=function(e){
					//console.log(this.result)
					let src=this.result;	
									console.log(evs);
					if(src!=''){
						
						if(evs==1){
							$('.newimg').html('<img src='+src+' class="w-100" />');
							$('.newimg').css('display','block');
							$('.w-10').css('display','block');
						}
						if(evs==2){
							$('.imgbg').html('<img src='+src+' class="w-100" />');
							$('.newimg').css('display','none');
							$('.w-10').css('display','none');
						}
					}
				
				}
			}
		},
	}
</script>

<style>
select{
	height:34px
}
option{
	height:25px;line-height: 25px;
}
.form-group{
	padding: 15px 0;
}
.fm{
 text-align: center;
}
</style>
