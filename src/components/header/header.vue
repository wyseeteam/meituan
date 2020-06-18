<template>
  <div class='header'>
  	<div class="headerwrapper">
  		<div class="headerbarposition">
  			<span>合肥</span>
  			<a href="">切换城市</a>
  			<div>【
  				<a href="">肥东县</a>
  				<a href="">肥西县</a>
  				<a href="">巢湖</a>】
  			</div>
  			<div class="userinfo">
  				<a href="">登录</a>
  				<a href="">注册</a>
  			</div>
  		</div>
  		<div class="sortlist">
  			<ul>
  				<li>我的美团</li>
  				<li>手机APP</li>
  				<li>商家中心</li>
  				<li>美团规则</li>
  				<li>网站导航</li>
  			</ul>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {}
};
</script>
<style>
.header{
	height: 35px;
	line-height: 35px;
	color: #999;
}
.headerwrapper{
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.headerbarposition{
	display: flex;
}
.sortlist li{
	padding: 0 10px;
}
</style>