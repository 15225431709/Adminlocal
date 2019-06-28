<template>
	<div class="row">
		<div class="col">
		<div class="buttons row">
			<div class="col-md-2">
			<button class="btn btn-primary btn-sm">添加</button>
			<button class="btn btn-danger btn-sm">删除</button>
			</div>
			<user-search></user-search>
			<div class="col-md-1 text-right">
			
				<button title="刷新" class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-refresh"></i></button>
			
			</div>
		</div>	
							<div class="card">
								<div class="card-header bg-light">
									用户列表
									<a href="javascript:;" @click="outexcl()"  title="导出excl" class="float-right">
										<i class="glyphicon glyphicon-list-alt"></i>
									</a>
								</div>
		
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-bordered">
											<thead class="thead-dark">
											<tr>
												<th width="50">
													<a title="全选" class="text-dark"  @click="changeAll(all)">
													<input type="checkbox" id="checkall" v-model="allcheck" style="display:none"/>
													<i class="glyphicon text-light" :class="allcheck?'glyphicon-check':'glyphicon-unchecked'"></i>
													</a>
												</th>
												<th width="50">ID</th>
												<th width="80">昵称</th>
												<th width="50">性别</th>
												<th width="80">手机号码</th>
												<th width="90">用户编号</th>
												<th width="80">会员等级</th>
												<th width="50">头像</th>
												<th width="80">积分</th>
												<th width="60">状态</th>
												<th width="150">操作</th>
											</tr>
											</thead>
											<tbody>
											<tr v-for="(item,index) in user" :key="item.name">
												<td class="align-middle"><input v-model="item.check" name="choose"  type="checkbox" :value="item.id"/></td>
												<td class="align-middle">{{item.id}}</td>
												<td class="align-middle">{{item.name}}</td>
												<td class="align-middle">{{item.sex}}</td>
												<td class="align-middle">{{item.phone}}</td>
												<td class="align-middle">{{item.number}}</td>
												<td class="align-middle">{{item.level}}</td>
												<td class="text-center"><img :src="item.avatar" class="w-50 rounded-circle"/></td>
												<td class="align-middle">{{item.coin}}</td>
												<td class="align-middle">{{item.status==1?'正常':'冻结'}}</td>
												<td class="align-middle">
													<button class="btn btn-primary btn-sm">编辑</button>
													<button class="btn btn-danger btn-sm">删除</button>
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
	</div>
</template>

<script>
	import Search from './user/Search.vue'
	import Pagination from '../util/Pagination.vue'
	export default {
		name:'User',
		data() {
			return {
				user:[],
				allcheck:'',
				all:1,
			};
		},
		components:{
			"user-search":Search,
			"pag":Pagination,
		},
		mounted() {
			this.getUser();
		},
		methods:{
			getUser:function(){
				let user=[
				{id:'1',name:'狄仁杰',sex:'男',phone:'18611111111',number:'136133131',level:'1',avatar:'/static/images/direnjie.jpg',coin:'100',status:'1'},
				{id:'2',name:'韩信',sex:'男',phone:'18622222222',number:'45645546',level:'2',avatar:'/static/images/hanxin.jpg',coin:'100.00',status:'1'},
				{id:'3',name:'花木兰',sex:'女',phone:'18633333333',number:'864864',level:'4',avatar:'/static/images/huamulan.jpg',coin:'100.00',status:'1'},
				{id:'4',name:'兰陵王',sex:'男',phone:'15999966666',number:'136133131',level:'2',avatar:'/static/images/lanlingwang.jpg',coin:'100.00',status:'1'},
			    {id:'5',name:'李白',sex:'男',phone:'15999966666',number:'136133131',level:'2',avatar:'/static/images/libai.jpg',coin:'100',status:'1'},
			    {id:'6',name:'刘备',sex:'男',phone:'15999966666',number:'136133131',level:'2',avatar:'/static/images/liubei.jpg',coin:'100',status:'1'},
			    {id:'7',name:'露娜',sex:'女',phone:'15999966666',number:'136133131',level:'2',avatar:'/static/images/luna.jpg',coin:'100',status:'1'},
			    {id:'8',name:'孙尚香',sex:'女',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/sunshangxiang.jpg',coin:'100',status:'1'},
				{id:'9',name:'孙悟空',sex:'男',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/houzi.jpg',coin:'100',status:'1'},
			    {id:'10',name:'小乔',sex:'女',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/xiaoqiao.jpg',coin:'100',status:'1'},
			    {id:'11',name:'虞姬',sex:'女',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/yuji.jpg',coin:'100',status:'1'},
			    {id:'12',name:'赵云',sex:'男',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/zhaoyun.jpg',coin:'100',status:'1'},
			    {id:'13',name:'甄姬',sex:'女',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/zhenji.jpg',coin:'100',status:'1'},
			    {id:'14',name:'周瑜',sex:'男',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/zhouyu.jpg',coin:'100',status:'1'},
				{id:'15',name:'庄周',sex:'男',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/zhuangzhou.jpg',coin:'100',status:'1'},
				{id:'16',name:'诸葛亮',sex:'男',phone:'15999966666',number:'136133131',level:'1',avatar:'/static/images/zhugeliang.jpg',coin:'100',status:'1'},
				];
				
				for(let i=0;i<user.length;i++){
					if(user[i].level==1){
						user[i].level='注册会员';
					}
					if(user[i].level==2){
						user[i].level='初级Vip';
					}
					if(user[i].level==3){
						user[i].level='中级Vip';
					}
					if(user[i].level==4){
						user[i].level='高级Vip';
					}
					if(user[i].level==5){
						user[i].level='超级Vip';
					}
					user[i].check=false;
				}
				this.user=user;
			},
			outexcl:function(){
				const jsonData=this.user;
				let str=`ID,昵称,性别,手机号码,编号,等级,头像地址,积分余额,状态\n`;
				//console.log(jsonData);
				for(let i=0;i<jsonData.length;i++){
					for(let item in jsonData[i]){
						//增加 \t 不让表格显示科学记数法或者其他格式
						str+=`${jsonData[i][item]+'\t'},`
					}
					str+='\n';
				}
				 //encodeURIComponent解决中文乱码
                 let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
                  //通过创建a标签实现
                  let link = document.createElement("a");
                  link.href = uri;
                  //对下载的文件命名
                  link.download =  "user.csv";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);

			},
			//全选方法
			changeAll:function(all){
				console.log(all)
				if(all==1){
					this.allcheck=true;
					this.all=2;
				}else{
					this.allcheck=false;
					this.all=1;
				}
				console.log(this.allcheck)
				this.user.forEach(item =>{ 
					item.check = this.allcheck;
				});
				
			},
		}
	}
</script>

<style>

</style>
