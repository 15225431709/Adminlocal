<template>
	<div class="modal fade" id="inquiry" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	  <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="text-dark">消息提示</h5>       
	      </div>
		  <div class="modal-body inquiry-body"></div>
		  <div class="modal-footer inquiry-foot">
			  
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
