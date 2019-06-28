// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import {store} from './vuex'
import $ from 'jquery' 
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {addCookie,getCookie,delCookie} from './assets/js/cookie.js'
import {getuser} from './assets/js/before'
import util from './assets/js/util'

Vue.use(util)
Vue.config.productionTip = false
Vue.prototype.$axios=axios


router.beforeEach((to,form,next)=>{
	console.log(to.name)
    
	let key=getCookie('token');
	if(to.name!='Login'){
	if(key.length==32){
		//console.log(key.length)
		getuser(key);
		
		next();
	}else{
		alert("未检测到登录信息，点击返回");
		this.$router.push({
			path:'/Login'
		});
	}
    }else{
		next();
	}
	
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
