import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from '../router'
import {addCookie,getCookie,delCookie} from '../assets/js/cookie'

 Vue.use(Vuex)
 
 export const store = new Vuex.Store({
	 
	 state:{
		 count:0,
		 userinfo:[]	 
	 },
	 mutations:{
		 changeData (state,obj) {  // store中的数据只能通过commit mutation来改变
            state.count++;
        },
		
		savelog (state,obj){
			state.userinfo=obj;
		}
	 },
	 actions:{
		 //登录
		 loginform ({commit},data) {
			 console.log(data);
			 axios.post('/apis/api/login/admin_login',data).then(function(response){
				 let res=response.data;
				 console.log(res)
				 if(res.status==1){
					 
					 let userinfo=res.data.info;
					 console.log(userinfo);
					 
					 let token=res.data.admin_token;
					 console.log(token)
					     commit('savelog',userinfo);
					  addCookie('token',token);
					  
					  
					  
				 }else{
					 alert(res.msg);
					 return false;
				 }
			 })
			 
            commit('changeData');
          },
			  
		//监测token
		rushToken({commit},data){
			axios.post('/apis/api/login/getuser',data).then(function(response){
				let res=response.data;
				//console.log(res);
				if(res.status==1){
					let userinfo=res.data;
					commit('savelog',userinfo);
					
				}else{
					alert(res.msg);
					this.$router.push({
						path:'/Login'
					})
				}
			})
		},
	 }	 
 })
 
 
 