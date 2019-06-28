import {store} from '../../vuex'


  export function getpath(){
	  console.log(666);
  }
  
  export function getuser(key){
	  
	  store.dispatch('rushToken',{token:key});
	  
  }
  
  