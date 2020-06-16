<template>
	<div class="searchwrapper">
		<img src="../../assets/logo.png">
		<div class="searchmodule">
			<div class="searchbtn">
				<input type="text" name="" placeholder="搜索商家或地点" @input="getTip" v-model="keyword">
				<button>搜索</button>
			</div>
			
		</div>
	</div>
</template>
<script>
import {request_get} from '../../ajax/request.js';

export default {
 	data(){
 		return {
 			keyword: '',//搜索关键字
 		}
 	},
  	methods:{
  		getTip(){
			console.log(this.keyword)
      		 request_get('/suggest?keyword='+this.keyword);

  		}
  	}
 }
</script>
<style>
.searchwrapper{
	width: 1200px;
	margin: 0 auto;
	position: relative;
	text-align: center;
}
.searchwrapper img{
	position: absolute;
	left: 0;
}
.searchmodule{
	text-align: center;
}
.searchbtn{
	display: inline-block;
	width: 550px;
	height: 40px;
	font-size: 0;
}
.searchbtn>*{
	height: 100%;
	vertical-align: top;
}
.searchbtn input{
	width: 80%;
	padding: 10px;
}
.searchbtn button{
	width: 20%;
	background-color: #FFC300;
}
</style>