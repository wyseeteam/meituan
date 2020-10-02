<template>
  <div class="header">
    <div class="headerwrapper">
      <div class="headerbarposition" v-on:click="dd">
        <span>合肥</span>
        <a href>切换城市</a>
        <div>
          【
          <a href>肥东县</a>
          <a href>肥西县</a>
          <a href>巢湖</a>】
        </div>
        <div class="userinfo">
          <a href>登录</a>
          <a href>注册</a>
        </div>
      </div>
      <div class="sortlist">
        <ul>
          <li
            class="menu"
            v-if="showsubmenu[0]"
            data-index="0"
            @mouseover="showSubmenu(0)"
            @mouseout="hideSubmenu(0)"
            :style="getStyle(0)"
          >
            <a href class="menutitle">我的美团</a>
            <ul class="submenu" v-show="showsubmenu[0].show">
              <li>
                <a href>我的订单</a>
              </li>
              <li>
                <a href>我的收藏</a>
              </li>
              <li>
                <a href>抵用券</a>
              </li>
              <li>
                <a href>账户设置</a>
              </li>
            </ul>
          </li>
          <li>
            <a href class="menutitle">手机APP</a>
          </li>
          <li
            class="menu noclick"
            v-if="showsubmenu[1]"
            data-index="1"
            @mouseover="showSubmenu(1)"
            @mouseout="hideSubmenu(1)"
            :style="getStyle(1)"
          >
            商家中心
            <ul class="submenu submenubig" v-show="showsubmenu[1].show">
              <li>
                <a href>美团餐饮商户中心</a>
              </li>
              <li>
                <a href>登录商家中心</a>
              </li>
              <li>
                <a href>美团智能收银</a>
              </li>
              <li>
                <a href>我想合作</a>
              </li>
              <li>
                <a href>手机免费开店</a>
              </li>
              <li>
                <a href>餐饮代理商招募</a>
              </li>
              <li>
                <a href>商家申请开票</a>
              </li>
              <li>
                <a href>免费合作美团排队</a>
              </li>
            </ul>
          </li>
          {{ss}}
          <li
            class="menu noclick"
            v-if="showsubmenu[2]"
            data-index="2"
            @mouseover="showSubmenu(2)"
            @mouseout="hideSubmenu(2)"
            :style="getStyle(2)"
          >
            美团规则
            <ul class="submenu" v-show="showsubmenu[2].show">
              <li>
                <a href>规则中心</a>
              </li>
              <li>
                <a href>规则目录</a>
              </li>
              <li>
                <a href>规则评议院</a>
              </li>
            </ul>
          </li>
          <li class="noclick" data-index="3">
            网站导航
            <ul></ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data() {
	  return {
		 showsubmenu: [
			 {show: false},
			 {show: false},
			 {show: false},
		 ],
		 a: 2

	  }
  },
  props: {
	  ss: {
		  type: Number,
		  default: 0
	  }
  },
  created(){
  },
  mounted(){
  },
  updated(){
	  alert(999)
      this.$emit('func',this.ss);

  },
  watch: {
	  ss() {
		  alert()
	  }
  },
  created() {
    console.log(this);
  },
  methods: {
    showSubmenu(index) {
      this.showsubmenu[index].show = true;
    },
    hideSubmenu(index) {
      this.showsubmenu[index].show = false;
    },
    getStyle(index) {
      if (this.showsubmenu[index].show) {
        return "background-color: #fff;border-color: #e5e5e5";
      } else {
        return "background-color: transparent;border-color: transparent";
      }
    },
    dd(){

    }
  }
};
</script>
<style scoped>
a {
  color: #999;
}
.header {
  height: 35px;
  line-height: 35px;
  color: #999;
}
.headerwrapper {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.headerbarposition {
  display: flex;
}
.sortlist li {
}
.menu {
  padding: 0 10px;
  position: relative;
  border: 1px solid transparent;
  border-width: 0 1px;
}
.menutitle:hover,
.noclick:hover {
  color: #fe8c00;
}
.submenu {
  position: absolute;
  width: 100%;
  right: -1px;
  top: 95%;
  border: 1px solid #e5e5e5;
  border-top: none;
  background-color: #fff;
}
.submenu li {
  width: 100%;
  text-align: center;
}
.submenu li a {
  display: block;
}
.submenu li a:hover {
  color: #fe8c00;
}
.submenubig {
  width: 160%;
}
</style>