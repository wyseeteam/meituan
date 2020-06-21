<template>
  <div class="maincontainer">
  	<div class="category">
  		<div class="title">全部分类</div>
  		<div class="categorylist">
  			<ul>
  				<li v-for="(categoryleftitem, index1) in appData.categorys">
					<span v-for="(tipitem,index2) in categoryleftitem.leftPcHomeCategoryList" v-show="index2!=categoryleftitem.leftPcHomeCategoryList.length-1">
						<a href="">{{tipitem.name}}</a>/
					</span>
					<span v-for="(tipitem,index2) in categoryleftitem.leftPcHomeCategoryList" v-show="index2==categoryleftitem.leftPcHomeCategoryList.length-1">
						<a href="">{{tipitem.name}}</a>
					</span>
				</li>
  			</ul>
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
		console.log(this.appData)
		console.log(this.appData.categorys)
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
.banner{
	width: 740px;
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