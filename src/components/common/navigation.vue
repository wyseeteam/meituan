<template>
  <div style="width:1200px; margin: 0 auto;">
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

      <div class="hottitle">热门分类</div>
      <div class="cityBack">
        <ul>
          <li v-for="hot in hotkinds" v-bind:key='hot.ref'>
            <a href="hot.ref">{{hot.name}}</a>
          </li>
        </ul>
      </div>

      <div class="hottitle">周边热门</div>
      <div class="cityBack" style="border: none;">
        <ul>
          <li v-for="near in hotnear" v-bind:key='near.ref'>
            <a href="near.ref">{{near.name}}</a>
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
      ],
      hotkinds: [
        {
          name: '酒店',
          ref: 'https://hrb.meituan.com',
        },
        {
          name: '美食',
          ref: 'https://fs.meituan.com',
        },
        {
          name: '休闲娱乐',
          ref: 'https://gy.meituan.com',
        },
        {
          name: '运动健身',
          ref: 'https://sh.meituan.com',
        },
        {
          name: '生活服务',
          ref: 'https://hz.meituan.com',
        },
        {
          name: '上门服务',
          ref: 'https://jn.meituan.com',
        },
        {
          name: '购物',
          ref: 'https://wx.meituan.com',
        },
        {
          name: '时尚购',
          ref: 'https://cd.meituan.com',
        },
        {
          name: '本地购物',
          ref: 'https://bj.meituan.com',
        },
        {
          name: '结婚',
          ref: 'https://wh.meituan.com',
        },
        {
          name: '摄影写真',
          ref: 'https://km.meituan.com',
        },
        {
          name: '宴会',
          ref: 'https://nj.meituan.com',
        },
        {
          name: '丽人',
          ref: 'https://dg.meituan.com',
        },
        {
          name: '母婴亲子',
          ref: 'https://ty.meituan.com',
        },
        {
          name: '学习培训',
          ref: 'https://dl.meituan.com',
        },
        {
          name: '家装',
          ref: 'https://fz.meituan.com',
        },
        {
          name: '汽车服务',
          ref: 'https://tj.meituan.com',
        },
        {
          name: '医疗',
          ref: 'https://nn.meituan.com',
        },
        {
          name: '宠物',
          ref: 'https://xa.meituan.com',
        }
      ],
      hotnear: [
        {
          name: '巢湖酒店',
          ref: 'https://hrb.meituan.com',
        },
        {
          name: '巢湖美食',
          ref: 'https://fs.meituan.com',
        },
        {
          name: '巢湖休闲娱乐',
          ref: 'https://gy.meituan.com',
        },
        {
          name: '肥西县运动健身',
          ref: 'https://sh.meituan.com',
        },
        {
          name: '巢湖生活服务',
          ref: 'https://hz.meituan.com',
        },
        {
          name: '肥西县上门服务',
          ref: 'https://jn.meituan.com',
        },
        {
          name: '肥东县购物',
          ref: 'https://wx.meituan.com',
        },
        {
          name: '肥东县时尚购',
          ref: 'https://cd.meituan.com',
        },
        {
          name: '肥东县本地购物',
          ref: 'https://bj.meituan.com',
        },
        {
          name: '巢湖结婚',
          ref: 'https://wh.meituan.com',
        },
        {
          name: '肥东县摄影写真',
          ref: 'https://km.meituan.com',
        },
        {
          name: '肥东县宴会',
          ref: 'https://nj.meituan.com',
        },
        {
          name: '肥东县丽人',
          ref: 'https://dg.meituan.com',
        },
        {
          name: '肥东县母婴亲子',
          ref: 'https://ty.meituan.com',
        },
        {
          name: '肥西县学习培训',
          ref: 'https://dl.meituan.com',
        },
        {
          name: '肥西县家装',
          ref: 'https://fz.meituan.com',
        },
        {
          name: '巢湖汽车服务',
          ref: 'https://tj.meituan.com',
        },
        {
          name: '肥西县医疗',
          ref: 'https://nn.meituan.com',
        },
        {
          name: '肥东县宠物',
          ref: 'https://xa.meituan.com',
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
}

.cityBack
{
  max-width: 1090px;
  display: inline-block;
  padding-bottom: 20px;
  border-bottom: solid 1px rgb(204, 204, 204);
  margin-top: 20px;
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
  font-weight: bold;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}


</style>