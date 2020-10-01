<template>
  <div class="maincontainer">
  	<div class="category">
  		<div class="title">全部分类</div>
  		<div class="categorylist">
  			<ul>
  				<li v-for="(categoryleftitem, index1) in categorys" @mouseover="showTipitem(index1)" @mouseout="hideTipitem(index1)">
					<span v-for="(tipitem,index2) in categoryleftitem.leftPcHomeCategoryList" v-show="index2!=categoryleftitem.leftPcHomeCategoryList.length-1">
						<a href="">{{tipitem.name}}</a>/
					</span>
					<span v-for="(tipitem,index2) in categoryleftitem.leftPcHomeCategoryList" v-show="index2==categoryleftitem.leftPcHomeCategoryList.length-1">
						<a href="">{{tipitem.name}}</a>
					</span>
				</li>
  			</ul>
  		</div>
		<div class="categorydetail" v-show="istipitemshowed">
			<div class="categorydetaillist" v-for="(categoryrightitem, index1) in categoryRightList">
				<div v-for="(detailitem, index2) in categoryrightitem.rightPcHomeCategoryList">
					<div class="detailtitle">
						<h2><a href="" class="">{{detailitem[0].name}}</a></h2>
						<a href="">更多></a>
					</div>
					<div class="detailcontent">
						<a href="" class="" v-for="(detailtipitem ,index3) in detailitem">{{detailtipitem.name}}</a>
					</div>
				</div>
			</div>
		</div>
  	</div>
  	<div class="banner">
  		<div class="hometype">
  			<a href="">美团外卖</a>
  			<a href="">猫眼电影</a>
  			<a href="">美团酒店</a>
  			<a href="">民宿/公寓</a>
  			<a href="">商家入驻</a>
  			<a href="">美团公益</a>
  		</div>
  		<div class="bannertop">
  			<div class="bannerslide">
			  	<div class="slidecontent">
				  	<transition-group name="fadeIn">
					  	<div class="slidecontentli" v-for="(item, index) in bannerList" :key="item.url" v-show="index === currentBannerIndex">
					 		<router-link to="/hotel" class="link-3">
				  				<img v-bind:src="item.url">
							</router-link>
						</div>
					</transition-group>
				</div>
				<div class="iconLeft" @click="goLeft">
					<i><</i>
				</div>
				<div class="iconRight" @click="goRight">
					<i>></i>
				</div>
  			</div>
  			<a href="" class="link-1">
  				<img v-bind:src="bannerimg2">
  			</a>

  		</div>
  		<div class="bannerbottom">
  			<a href="" class="link-2">
  				<img v-bind:src="bannerimg3">
  			</a>
			<a href="" class="link-2">
  				<img v-bind:src="bannerimg4">
  			</a>
			<a href="" class="link-1">
  				<img v-bind:src="bannerimg5">
  			</a>
  			
  		</div>
  	</div>
  	<div class="userinfo">
	  	<div class="logincard">
		  	<div class="headimg">
			  	<img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg">
			</div>
			<p>Hi！你好</p>
			<a href="">注册</a>
			<a href="">立即登录</a>
		</div>
		<div class="downloadapp">
			<div class="appimg">
				<img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png">
			</div>
			<p style="font-size:16px;">美团APP手机版</p>
			<p>
				<span style="color:#EC5330;margin-right:5px;">1元起</span>
				<span>吃喝玩乐</span>
			</p>
		</div>
	</div>
  </div>
  
</template>
<script>
 import {request_get} from '../../../../ajax/request.js';
 import cheerio from 'cheerio';
export default {
  data() {
	  return {
		  appData: {},
		  categorys: [],
		  istipitemshowed: false,
		  showNavIndex: 0,//左侧显示nav索引值
		  bannerimg2: '',
		  bannerimg3: '',
		  bannerimg4: '',
		  bannerimg5: '',
		  bannerList: [],
		  currentBannerIndex: 0,//当前banner显示第几张
	  }
  },
  computed: {
	  categoryRightList() {
		  let newData = [];
		  var that = this;
		  this.categorys.forEach((item, index) => {
			  if(index == that.showNavIndex){
				  newData.push(item);
			  }
		  })
		  return newData;
	  }
  },
  created() {
	  this.initData();
  },
  methods: {
	   async initData() {
 		let res = await request_get('/api');
		var txt = res.data.match(/AppData.*?<\/script>/g)[0].
		replace(/<\/script>/,'').
		replace(/AppData\s+\=/,'').
		replace(/(;$)/g,'');
		txt = JSON.parse(txt);
		this.appData = txt;
		this.categorys = txt.categorys;
		this.bannerList = txt.bannerList[0].content;
	
		this.bannerimg2 = txt.bannerList[1].content.url;
		this.bannerimg3 = txt.bannerList[2].content.url;
		this.bannerimg4 = txt.bannerList[3].content.url;
		this.bannerimg5 = txt.bannerList[4].content.url;
		this.setBannerAnimation();
	  },
	  showTipitem(index) {
		  this.showNavIndex = index;
		  this.istipitemshowed = true;
	  },
	  hideTipitem(index) {
		  this.istipitemshowed = false;
	  },
	  setBannerAnimation() {

	  },
	  getStyle(index) {
		  return 'left:-' + (index*550) +'px';
	  },
	  goLeft() {
		  if(this.currentBannerIndex==0){
			  this.currentBannerIndex = 5;
		  }
		  this.currentBannerIndex--;
	  },
	  goRight() {
		  if(this.currentBannerIndex==4){
			  this.currentBannerIndex = 0;
		  }
		  this.currentBannerIndex++;
	  }
	 
  }
};
</script>
<style scoped>
.fadeIn-enter-active,.fadeIn-leave-active {
transition: all 1s ease;
}
.fadeIn-enter-active,.fadeIn-leave{
opacity: 1;
}
.fadeIn-enter,.fadeIn-leave-active {
opacity: 0;
}

.maincontainer{
	display: flex;
	justify-content: space-between;
}
.category{
	width: 235px;
	height: 500px;
	border: 1px solid #E5E5E5;
	background-color: #fff;
	margin-top: -50px;
	box-sizing: border-box;
	position: relative;
}
.title{
	margin: 10px 0 0 10px;
	font-size: 16px;
	font-weight: 700;
	height: 40px;
}
.categorylist{
}
.category ul li{
	display: block;
	height: 28px;
	line-height: 28px;
	padding: 0 10px;
}
.category ul li:hover{
	background-color: #eee;
}
.categorydetail{
	position: absolute;
	left: 235px;
	bottom: 0;
	width: 400px;
	height: 500px;
	z-index: 1000;
	background-color: #fff;
	padding: 20px;
	box-sizing: border-box;
	color: #999;
}
.detailtitle{
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid #E5E5E5;
	display: flex;
	justify-content: space-between;
}
.detailtitle a{
	color: #999;
}
.detailtitle h2 a{
	color: #000;
}
.detailcontent a{
	display: inline-block;
	margin-top: 20px;
	margin-right: 20px;
	color: #999;
}
.banner{
	width: 710px;
	height: 438px;
	margin: 10px;
	margin-bottom: 0;
	position: relative;
}
.hometype{
	position: absolute;
	top: -50px;
	font-weight: 700;
}
.hometype a{
	margin: 0 20px;
	font-size: 16px;
}

.userinfo{
	width: 235px;
    box-sizing: border-box;
}
.bannertop{
	height: 260px;
}
.bannerslide{
	float: left;
	width: 550px;
	height: 100%;
	margin-right: 10px;
	overflow: hidden;
	position: relative;
}
.iconLeft,.iconRight{
	position: absolute;
	top: 50%;
	margin-top: -25px;
	width: 50px;
	height: 50px;
	background-color: #aaa;
	text-align: center;
	line-height: 50px;
	font-weight: 700;
	cursor: pointer;
	font-size: 30px;
	color: #fff;
	background-color: #000;
	border-radius: 50%;
}
.iconLeft{
	left: 0;
}
.iconRight{
	right: 0;
}
.slidecontent{
	width: 2750px;
	height: 100%;
	position: relative;
}
.slidecontentli{
	float: left;
	height: 100%;
	position: absolute;
}
.link-1{
}
.link-1 img{
	width: 150px;
	height: 100%;
}
.link-2 img{
	width: 270px;
}
.link-3{
	float: left;
	height: 100%;
}
.link-3 img{
	width: 550px;
	height: 100%;
}
.bannerbottom{
	font-size: 0;
	margin-top: 10px;
}
.bannerbottom .link-2{
	margin-right: 10px;
}
.userinfo{
	text-align: center;
}
.logincard,.downloadapp{
	border: 1px solid #E5E5E5;
	margin-top: 10px;
	box-sizing: border-box;
	background-color: #fff;
}
.logincard{
	height: 260px;
}
.logincard a{
	display: block;
	width: 100px;
	height: 40px;
	line-height: 40px;
	border: 1px solid #e5e5e5;
	border-radius: 20px;
	margin: 15px auto;
	font-size: 14px;
}
.headimg img{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-top: 30px;
}
.logincard p{
	font-size: 16px;
}
.downloadapp{
	height: 165px;
}
.appimg img{
	width: 100px;
	height: 100px;
	margin-top: 10px;
}
</style>