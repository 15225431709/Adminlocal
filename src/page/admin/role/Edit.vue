<template>
 <div class="modal fade" id="role-edit" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">编辑</h4>       
      </div>
      <div class="modal-body">
        <form id="role-edit-form">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">角色名称:</label>
            <input type="text" class="form-control" name="rolename" :value="role.name">
			<input type="hidden" name="id" :value="role.id"/>
          </div>
          <div class="form-group">
			<label for="recipient-name" class="col-form-label">权限列表:</label>
			   
			   <div v-for="item in menus" class="custom-control custom-checkbox mr-sm-2">
               <input type="checkbox" class="custom-control-input" name="menu[]" :id="item.mid" :value="item.mid">
               <label class="custom-control-label" :for="item.mid">{{item.title}}</label>
			   <br/>
			     <div v-for="v in item.children" class="form-check form-check-inline">
                   <input class="form-check-input" type="checkbox" name="menu[]" :id="v.mid" :value="v.mid">
                   <label class="form-check-label" for="v.mid">{{v.title}}</label>
                 </div>
                 
               </div>  
		  </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" @click="submit">提交</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">取消</button>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
	export default {
		data() {
			return {
				menus:[]
			};
		},
		mounted() {
			this.getMenu();
		},
		methods:{
			getMenu:function(){
				let menus=[
					{
					mid:'1',title:'系统管理',
					children:[{mid:'2',title:'Home'},{mid:'3',title:'系统设置'}],
					},
					{
					mid:'4',title:'管理员设置',
					children:[{mid:'5',title:'管理员管理'},{mid:'6',title:'角色管理'},{mid:'7',title:'权限管理'}],
					},
					
					];
				this.menus=menus;
			},
			
			submit:function(){
				let forms=$('#role-edit-form').serialize();
				console.log(forms);
				$('#role-edit').modal('hide');
			},
			
		},
		props:['role'],
	}
</script>

<style>
.modal-title{
	color:#404040
}
.form-check-label{
	font-weight: normal;
	font-family: arial;
}
.custom-control{
	margin:0 10px
}
.form-check{
	margin:5px 15px
}
</style>
