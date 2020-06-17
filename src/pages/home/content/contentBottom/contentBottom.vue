<template>
  <div>
    <div>
      <div>
        <contentTitle option_title='猫眼电影' v-bind:option_list='filmoptionlist'></contentTitle>
      </div>
    </div>
    <div>
      <div>
        <contentTitle option_title='推荐民宿' v-bind:option_list='minsucitylist'></contentTitle>
      </div>
    </div>
    <div>
      <div>
        <contentTitle option_title='猜你喜欢' v-bind:option_list='likeoptionlist'></contentTitle>
      </div>
    </div>
  </div>
  

</template>
<script>

import {request_get} from '../../../../ajax/request.js';
import contentTitle from './contentTitle'
  
export default {
  name: "",
  components: {
    contentTitle,
  },

  data(){
    return {
      filmoptionlist: ['即将上映'],
      minsucitylist: [],
      likeoptionlist: ['为你甄选最合适的'],
      filmlist: [],
      minsulist: [],
      likelist: [],
    }
  },

  created: function()
  {
    console.log('created');
    this.$options.methods.requestDatas(this);
  },

  methods: {
    requestDatas(that)
    {
      console.log('请求数据');
      
      // 电影
      request_get('/getComingFilms?ci=56&limit=10', function(res){
        console.log(res);
        that.filmlist = res.data.data.coming;
      });

      ///民宿
      request_get('/minsu?cityId=310100', function(res){
        console.log(res);
        that.minsulist = res.data.productList;
      });

      // 民宿城市
      request_get('/minsuCitys?fetchSize=10&uuid=123123213231', function(res){
        console.log(res);
        if (!res.data.cityList || res.data.cityList.length == 0){
            that.minsucitylist = [{
              cityId: 310100,
              cityName: '上海'
            }, {
              cityId: 110100,
              cityName: '北京'
            }, {
              cityId: 510100,
              cityName: '成都'
            }, {
              cityId: 440100,
              cityName: '广州'
            }, {
              cityId: 330100,
              cityName: '杭州'
            }, {
              cityId: 440300,
              cityName: '深圳'
            }];
        }
        else
        {
          that.minsucitylist = res.data.cityList;
        }
      });

      // 猜你喜欢
      request_get('/recommends', function(res){
        console.log(res);
        that.likelist = res.data;
      });

    },


  }
};
</script>
<style>
</style>