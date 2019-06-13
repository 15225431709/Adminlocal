<template>
  <div class="modal fade" id="confrim" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5>消息提示</h5>       
      </div>
	  <div class="modal-body">{{msg}}</div>
	  <div class="modal-footer">
		  <div class="w-50"><button type="button" class="btn btn-block btn-outline-danger" data-dismiss="modal">取消</button></div>
		  <div class="w-50"><button @click="success(index)" type="button" class="btn btn-block btn-outline-success">确定</button></div>
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
		props:['msg','index'],
		methods:{
			success:function(index){
				//return true;
				this.$parent.callback(index);
				//alert('删除成功');
				$('#confrim').modal('hide');
			},
		}
	}
</script>

<style>
  h5{
	  color:#000;
  }
 .modal-header{
	 padding:5px 15px;
 }	 
 .modal-footer{
  	padding:5px 15px;
  }
 .w-50{
	 width:50%;text-align: center;float: left;
 }
</style>
