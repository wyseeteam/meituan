<template>
  <div class="bg">
    <div>
        <contentTitle
          option_title="猫眼电影"
          v-bind:option_list="filmoptionlist"
          :selectindex="filmindex"
          option_color="rgb(250, 69, 89)"
        ></contentTitle>
        <div class="imglist">
          <div class="arrow_back arrow_back_left" @click="preFilms" v-if="leftPos<0">
            <div class="left_arrow roate"></div>
          </div>

          <ul class="img" :style="{'margin-left': leftPos+'px'}">
            <li v-for="(item) in filmlist" v-bind:key="item.id">
              <img :src="item.img" alt class="filmimg" />
            </li>
          </ul>
          <div class="arrow_back arrow_back_right" @click="nextFilms" v-if="filmlist.length>5*page">
            <div class="right_arrow roate"></div>
          </div>
        </div>
      </div>
    <div class="minsubg">
      <contentTitle
          option_title="推荐民宿"
          v-bind:option_list="minsucitylist"
          :selectindex="cityindex"
          option_color="rgb(241, 191, 82)"
          @changeAction='changeAction'
        ></contentTitle>
        <div class="minsu">
          <ul>
            <li v-for="minsu in minsulist" v-bind:key='minsu.productId'>
              <img :src="minsu.coverImage" class="minsuimg"/>
              <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" class="avatar"/>
              <div class="minsutitle">{{minsu.title}}</div>
              <div class="subtitle">整套{{minsu.layoutRoom}}居室·可住{{minsu.maxGuestNumber}}人 | {{minsu.locationArea}}</div>
              <div class="price">￥{{minsu.price}}</div>
            </li>
          </ul>
        </div>
    </div>
    <div>
      <contentTitle
          option_title="猜你喜欢"
          v-bind:option_list="likeoptionlist"
          :selectindex="likeindex"
          option_color="rgb(88, 178, 216)"
        ></contentTitle>
        <div class="like">
          <ul>
            <li v-for="like in likelist" v-bind:key='like.itemId'>
              <img :src="like.imgUrl" class="minsuimg"/>
              <div class="minsutitle" style="max-width: 100%;margin-top: 5px;">{{like.title}}</div>
              <starFive :score='like.score' commentNum='like.commentNum'></starFive>
              <div class="subtitle">{{like.areaName||' '}}</div>
              <div class="lowPrice">￥ <span>{{like.lowPrice}}</span> 起</div>
            </li>
          </ul>
        </div>
    </div>
  </div>

</template>
<script>

import {request_get} from '../../../../ajax/request.js';
import contentTitle from './contentTitle'
import starFive from '../../../../components/common/star-five'
  
export default {
  name: "",
  components: {
    contentTitle,
    starFive,
  },

  data(){
    return {
      filmoptionlist: [{ name: "即将上映" }],
      minsucitylist: [],
      likeoptionlist: [{ name: "为你甄选最合适的" }],
      filmlist: [],
      minsulist: [],
      likelist: [],
      filmindex: 0,
      cityindex: 0,
      likeindex: 0,
      leftPos: 0,
      page: 1,
    }
  },

  created: function()
  {
    console.log('created');
    this.$options.methods.requestDatas(this);
  },

  methods: {
    requestDatas(that) {
      console.log("请求数据");
      // 电影
      request_get("/ptapi/getComingFilms?ci=56&limit=10")
        .then(function(res) {
          console.log("电影");
          res.data.data.coming.forEach(function(ret) {
            ret.img = ret.img.replace(/w.h\//g, "");
          });
          that.filmlist = res.data.data.coming;
        })
        .catch(function(err) {
          console.log(err);
        });
      // /民宿
      request_get("/ptapi/minsu?cityId=310100").then(function(res) {
        that.minsulist = res.data.productList;
      });

      // // 民宿城市
      request_get("/ptapi/minsuCitys?fetchSize=10").then(function(res) {
        console.log(res);
        if (!res.data.cityList || res.data.cityList.length == 0) {
          that.minsucitylist = [
            {
              cityId: 310100,
              cityName: "上海"
            },
            {
              cityId: 110100,
              cityName: "北京"
            },
            {
              cityId: 510100,
              cityName: "成都"
            },
            {
              cityId: 440100,
              cityName: "广州"
            },
            {
              cityId: 330100,
              cityName: "杭州"
            },
            {
              cityId: 440300,
              cityName: "深圳"
            }
          ];
        } else {
          that.minsucitylist = res.data.cityList;
        }
      });

      // // 猜你喜欢
      request_get("/ptapi/recommends").then(function(res) {
        console.log(res.imgUrl);
        res.data.forEach(function(ret) {
            ret.imgUrl = ret.imgUrl.replace(/w.h\//g, "");
          });
        that.likelist = res.data;
      });
    },
    preFilms: function(e)
    {
      if (this.leftPos == 0)
      {
        return;
      }
      this.leftPos = this.leftPos+240*5;
      this.page = this.page-1;
    },
    nextFilms: function(e)
    {
      this.leftPos = this.leftPos-240*5;
      this.page = this.page+1;
    },
    /////选择城市
    changeAction: function(data){
      console.log(data);
      let city = this.minsucitylist[data.index];
      // console.log(this.minsulist[data]);
      console.log(city.cityId)
      let that = this;
       request_get("/ptapi/minsu?cityId=" + city.cityId).then(function(res) {
        that.minsulist = res.data.productList;
      });
    }
  }
};
</script>
<style>

.filmimg {
  width: 220px;
  height: 300px;
  margin-right: 20px;
}
.imglist {
  width: 94%;
  margin: 1px auto 40px auto;
  max-height: 302px;
  overflow: hidden;
  /* white-space: nowrap; */
  position: relative;
}
.img {
  width: 1000%;
  height: 100%;
}
.img li {
  float: left;
}
.img li img {
  border-radius: 10px;
}

.arrow_back {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(128, 128, 128, 0.8);
  
  top: 50%;
  margin-top: -20px;
  position: absolute;
}

.arrow_back_left
{
  left: 0;
}

.arrow_back_right
{
  right: 0;
}

.left_arrow {
  border-width: 2px 0 0 2px;
  margin: -5px auto 15px 15px;
}

.right_arrow
{
  border-width: 0 2px 2px 0;
  margin: -5px auto 12.5px 12.5px;
}

.roate {
  position: relative;
  top: 50%;
  width: 10px;
  height: 10px;
  border-style: solid;
  border-color: white;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg); /* IE 9 */
  -moz-transform: rotate(-45deg); /* Firefox */
  -webkit-transform: rotate(-45deg); /* Safari 和 Chrome */
  -o-transform: rotate(-45deg);
}

.minsu
{
  width: 94%;
  margin: 0 auto;
  padding: 1%;
  clear: both;
}
.like
{
  width: 94%;
  margin: 0 auto;
  padding: 1%;
  clear: both;
}

.minsu ul li
{
  width: 30.6666666%;
  float: left;
  height: 250px;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 100px;
  position: relative;
}

.like ul li
{
  width: 17.6666666%;
  /* float: left; */
  height: 150px;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 120px;
}

.minsuimg
{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.avatar
{
  width: 50px;
  height: 50px;
  border: solid 1px white;
  border-radius: 50%;
  margin-top: -25px;
  position: absolute;
  right: 30px;
}
.minsutitle
{
  font-size: 17px;
  margin-top: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
}
.subtitle
{
  font-size: 12px;
  color: rgb(140, 140, 140);
  min-height: 20px;
}
.price
{
  font-size: 17px;
  color: red;
  font-weight: 700;
}

.lowPrice
{
  color: rgb(252, 102, 33);
  font-size: 14px;
}

.lowPrice span
{
  font-size: 20px;
  font-weight: 900;
}

</style>