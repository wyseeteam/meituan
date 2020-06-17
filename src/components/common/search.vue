<template>
	<div class="searchwrapper">
		<img src="../../assets/logo.png">
		<div class="searchmodule">
			<div class="searchbtn">
				<input type="text" name="" placeholder="搜索商家或地点" @input="getTip" v-model="keyword">
				<button>搜索</button>
				<div class="searchlist" v-show="showSearchlist">
					<ul>
						<li>55</li>
						<li>ee</li>
						<li>ee</li>
						<li>ee</li>
						<li>ee</li>
						<li>ee</li>
						<li>ee</li>
					</ul>
				</div>
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
 			showSearchlist: false,//是否显示搜索列表
 		}
 	},
 	created() {
 	console.log(9999)
 	    console.log(this.a());
 	},
 	methods: {
 		getTip() {
 			
 		},
 		async a() {
 		 return Promise.resolve("hello async");
 		}
 	}
 }
</script>
<style>
.searchwrapper{
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
}
.searchwrapper img{
	float: left;
}
.searchmodule{
	float: left;
	position: absolute;
	left: 50%;
	margin-left: -270px;
}
.searchbtn{
	display: inline-block;
	width: 550px;
	height: 40px;
	font-size: 0;
}
.searchbtn input,.searchbtn button{
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
.searchlist{
	position: absolute;
	width: 80%;
	border: 1px solid #E5E5E5;
	box-sizing: border-box;
	background-color: #fff;
}
.searchlist ul li{
	display: block;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
}
</style>