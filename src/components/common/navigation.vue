<template>
  <div style="width:94%; margin: 0 auto;">
    <h1>美团导航</h1>
    <div class="nav">
      <div class="hottitle">热门城市</div>
      <div class="cityBack">
        <ul>
          <li v-for="city in hotcitys" v-bind:key='city.ref'>
            <a href="city.ref">{{city.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data(){
    return {
      hotcitys: [
        {
          name: '哈尔滨',
          ref: 'https://hrb.meituan.com',
        },
        {
          name: '佛山',
          ref: 'https://fs.meituan.com',
        },
        {
          name: '贵阳',
          ref: 'https://gy.meituan.com',
        },
        {
          name: '上海',
          ref: 'https://sh.meituan.com',
        },
        {
          name: '杭州',
          ref: 'https://hz.meituan.com',
        },
        {
          name: '济南',
          ref: 'https://jn.meituan.com',
        },
        {
          name: '无锡',
          ref: 'https://wx.meituan.com',
        },
        {
          name: '成都',
          ref: 'https://cd.meituan.com',
        },
        {
          name: '北京',
          ref: 'https://bj.meituan.com',
        },
        {
          name: '武汉',
          ref: 'https://wh.meituan.com',
        },
        {
          name: '昆明',
          ref: 'https://km.meituan.com',
        },
        {
          name: '南京',
          ref: 'https://nj.meituan.com',
        },
        {
          name: '东莞',
          ref: 'https://dg.meituan.com',
        },
        {
          name: '太原',
          ref: 'https://ty.meituan.com',
        },
        {
          name: '大连',
          ref: 'https://dl.meituan.com',
        },
        {
          name: '福州',
          ref: 'https://fz.meituan.com',
        },
        {
          name: '天津',
          ref: 'https://tj.meituan.com',
        },
        {
          name: '南宁',
          ref: 'https://nn.meituan.com',
        },
        {
          name: '西安',
          ref: 'https://xa.meituan.com',
        },
        {
          name: '深圳',
          ref: 'https://sz.meituan.com',
        }
      ]
    }
  }
};
</script>
<style>
h1 {
  font-size: 20px;
  font-weight: 500;
}

.nav
{
  font-size: 0;
  margin-top: 15px;
}

.cityBack
{
  max-width: 1090px;
  display: inline-block;
}

.cityBack ul li
{
  width: 100px;
  height: 17px;
  line-height: 17px;
  text-align: left;
}

.hottitle
{
  width: 100px;
  /* display: inline-block; */
  float: left;
}


</style>