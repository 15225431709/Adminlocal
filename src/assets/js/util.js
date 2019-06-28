 
 export default{
	 
	 install(Vue){
		 Vue.prototype.message = function(msg){
			 var chat=msg?msg:'没有提示信息！';
			 let html='<div class="alert alert-dark"  role="alert"><p class="text-center">'+msg+'</p></div>';
			 $('.total').html(html); 								
			setTimeout(function(){
				$('.total').html("");
			},3000);			
		 },
		 
		 Vue.prototype.inquiry = function(msg,fun){
			 var chat=msg?msg:'确定执行此操作？';
			 $('.inquiry-body').html(chat);			 	 
			 if(!fun){			 			  		 				 
				 this.message("未定义回调，无法执行询问框！");	
				 	
			 }else{
				 let html=`<div class="w-50"><button type="button" class="btn btn-block btn-outline-danger" data-dismiss="modal">取消</button></div>
			               <div class="w-50"><button id="success" type="button" class="btn btn-block btn-outline-success">确定</button></div>`;
			  $('.inquiry-foot').html(html);
				 $('#inquiry').modal();
				 var success=fun;
					$('#success').click(function(){
						success();						
						$('#inquiry').modal('hide');						
						
					})	
			 }
			 
		 }
		 
	 
	 }
	
	
 }
 

  
 