<template>
	<div class="searchwrapper">
		<div class="search">
			<img src="../../assets/logo.png">
			<div class="searchmodule">
				<div class="searchbtn">
					<input type="text" name="" placeholder="搜索商家或地点" @input="getTip" v-model="keyword">
					<button>搜索</button>
					<div class="searchlist" v-if="showSearchlist">
						<ul>
							<li v-for="(item, index) in searchlist">{{item.editorWord}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
 import {request_get} from '../../ajax/request.js';
import ax from 'axios'

export default {
 	data(){
 		return {
 			keyword: '',//搜索关键字
 			showSearchlist: false,//是否显示搜索列表
 			searchlist: [],//搜索列表
 		}
 	},
 	created() {
 		//this.getTip();
 	},
 	methods: {
 	    async getTip() {
 			this.showSearchlist = true;
 			let res = await request_get('/suggest?keyword='+this.keyword);
 			this.searchlist = res.data.data.suggestItems;
 			console.log(res)
 			
 		},
 		
 	}
 }
</script>
<style scoped>
.searchwrapper{
	background-color: #fff;
	padding-bottom: 100px;
}
.search{
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
	z-index: 1000;
}
.searchlist ul li{
	display: block;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	cursor: pointer;
}
.searchlist ul li:hover{
	color: #FE8C00;
}
</style>