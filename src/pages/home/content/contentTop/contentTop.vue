<template>
  <div class="maincontainer">
  	<div class="category">
  		<div class="title">全部分类</div>
  		<div class="categorylist">
  			<ul>
  				<li v-for="(categoryleftitem, index1) in categorys" @mouseover="showTipitem(index1)">
					<span v-for="(tipitem,index2) in categoryleftitem.leftPcHomeCategoryList" v-show="index2!=categoryleftitem.leftPcHomeCategoryList.length-1">
						<a href="">{{tipitem.name}}</a>/
					</span>
					<span v-for="(tipitem,index2) in categoryleftitem.leftPcHomeCategoryList" v-show="index2==categoryleftitem.leftPcHomeCategoryList.length-1">
						<a href="">{{tipitem.name}}</a>
					</span>
				</li>
  			</ul>
  		</div>
		<div class="categorydetail">
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
  				<a href="" class="link-3">
  					<img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png">
  				</a>
  			</div>
  			<a href="" class="link-1">
  				<img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png">
  			</a>

  		</div>
  		<div class="bannerbottom">
  			<a href="" class="link-2">
  				<img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png">
  			</a>
			<a href="" class="link-2">
  				<img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png">
  			</a>
			  <a href="" class="link-1">
  				<img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png">
  			</a>
  			
  		</div>
  	</div>
  	<div class="userinfo"></div>
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
		  console.log(newData)
		  return newData;
	  }
  },
  created() {
	  this.getCategory();

  },
  methods: {
	   async getCategory() {
 		let res = await request_get('/');
		var txt = res.data.match(/AppData.*?<\/script>/g)[0].
		replace(/<\/script>/,'').
		replace(/AppData\s+\=/,'').
		replace(/(;$)/g,'');
		txt = JSON.parse(txt);
		this.appData = txt;
		this.categorys = txt.categorys;
		console.log(this.appData)
		console.log(this.categorys)
	  },
	  showTipitem(index) {
		  this.showNavIndex = index;
		  console.log(index)
		  this.istipitemshowed=true;
	  }
  }
};
</script>
<style scoped>
.maincontainer{
	display: flex;
	justify-content: space-between;
	width: 1200px;
	margin: 0 auto;
}
.category{
	width: 235px;
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
	height: 30px;
	line-height: 30px;
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
	margin: 10px;
	position: relative;
}
.hometype{
	position: absolute;
	top: -50px;
	font-size: 16px;
	font-weight: 700;
}
.hometype a{
	margin: 0 20px;
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
.link-3 img{
	width: 550px;
	height: 100%;
}
.bannerbottom{
	font-size: 0;
}
.bannerbottom .link-2{
	margin-right: 10px;
}
.userinfo{
	border: 1px solid #E5E5E5;
}
</style>