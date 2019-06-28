<template>
<div class="row">
	
                <div class="col">

					<div class="buttons row">											
						<div class="col-md-2">
							<button class="btn btn-primary" @click="edit(1,'')">添加</button>
							<button class="btn btn-danger" @click="delAll">删除</button>
						</div>
					
						<article-search></article-search>
						
						<div class="col-md-1">
							<button @click="rush" title="刷新" class="btn btn-danger float-right">
								<i class="glyphicon glyphicon-refresh"></i>
							</button>
						</div>
             </div>	
					
                    <div class="card">
                        <div class="card-header bg-light">
                            文章列表
                        </div>

                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                    <tr>
										                <th width="50">
											                <a title="全选" class="text-dark"  @click="changeAll(all)">
												                <input type="checkbox" id="checkall" v-model="allcheck" style="display:none">												
												                <i class="glyphicon text-primary" :class="allcheck?'glyphicon-check':'glyphicon-unchecked'"></i>
											                </a>
										                </th>
                                        <th width="50">ID</th>
                                        <th width="100">标题</th>
                                        <th width="80">分类</th>
                                        <th width="80">作者</th>
                                        <th width="80">封面</th>
										                    <th width="140">发布时间</th>
										                    <th width="80">状态</th>
										                    <th width="150">操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in article" :key="item.title"> 
										                    <td class="align-middle">
											                    <input v-model="item.check" name="choose" type="checkbox" :value="item.id"/>
										                    </td>
                                        <td class="align-middle">{{item.id}}</td>
                                        <td class="align-middle">{{item.title}}</td>
                                        <td class="align-middle">{{item.cate}}</td>
                                        <td class="align-middle">{{item.writer}}</td>
                                        <td class="align-middle">
											<div class="images w-50">
											<img :src="item.img"/>
											</div>
										</td>
										<td class="align-middle">{{item.addtime}}</td>
										<td class="align-middle">
											<span class="text-warning" v-if="item.status==0">草稿</span>
											<span class="text-success" v-else-if="item.status==1">已发布</span>
											<span class="text-secondary" v-else>已下架</span>
										</td>
										<td class="align-middle">

											<button title="编辑" class="btn btn-sm btn-primary" @click="edit(2,item)">
												<i class="glyphicon glyphicon-edit"></i>
											</button>
											<button :title="item.status==1?'下架':'发布'" class="btn btn-sm" :class="item.status==1?'btn-secondary':'btn-success'">
												<i class="glyphicon" :class="item.status==1?'glyphicon-circle-arrow-down':'glyphicon-send'"></i>
											</button>

											<button title="删除" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove-sign"></i></button>
										</td>
                                    </tr>
                                    
                                    </tbody>
									
                                </table>
								
                            </div>
							
                        </div>
						<div class="card-footer bg-light">
						<pag></pag>
						</div>
                    </div>	
                </div>
				<articleEdit :datas="datas" :type="type"></articleEdit>
				<articleDetail></articleDetail>
</div>					
</template>

<script>
	import Pagination from '../util/Pagination.vue'
	import Edit from './article/Edit.vue'
	import Detail from './article/Detail.vue'
	import Search from './article/Search.vue' 
	export default {		
		name:'Article',
		data() {
			return {
				article:[],
				allcheck:'',
				all:1,

				datas:'',
				type:'',

			};
		},
		mounted(){
			this.getArticle();
		},
		methods:{
			edit:function(type,data){
				this.datas=data;
				this.type=type;
				$('#modal-article').modal();
			},
			
			getArticle:function(){
				var data='';
				var list=[{id:'1',title:'笑傲江湖','cate':'小说','writer':'金庸',addtime:'2019-06-17 13:00:00',status:'0',img:'/static/imgs/top1.jpg'},
					{id:'2',title:'浅谈金融','cate':'财经','writer':'Ronder',addtime:'2019-06-17 13:00:00',status:'1',img:'/static/imgs/top2.jpg'},
					{id:'3',title:'每日头条','cate':'新闻','writer':'Wipper',addtime:'2019-06-17 13:00:00',status:'2',img:'/static/imgs/b4.jpg'},];
					for(let i=0;i<list.length;i++){
						list[i].check=false;
						
					}
					this.article=list;
					
			},
			//全选方法
			changeAll:function(all){				
				if(all==1){
					this.allcheck=true;
					this.all=2;
				}else{
					this.allcheck=false;
					this.all=1;
				}
				console.log(this.allcheck)
				this.article.forEach(item =>{ 
                    item.check = this.allcheck;
        });
				
			},
			
			delAll:function(){
				let val=[];
				var type=$('input[name="choose"]:checked').val([]);
				console.log(type.length);
				if(type.length==0){
					alert("当前没有选中任何数据");
					return;
				}
				for(var i=0;i<type.length;i++){ 
                name= type[i].value;
				 val.push(''+name);
                } 
				console.log(val[0]);
				alert("删除成功！");
				this.allcheck=false;
				
					
				
			},
			rush:function(){
				let r=this.$route.path;
				console.log(r)
				this.$router.push({
					path:r
				});
				console.log(this.article);
				this.message("刷新成功！");
			}
		},
		components:{
			"pag":Pagination,
			"articleEdit":Edit,
			"articleDetail":Detail,
			"articleSearch":Search,
		}
		
	}
</script>

<style>

 .images img{
	 width:100%;height:auto
 }
  .form-control{
	  margin:0 5px
  }
</style>
