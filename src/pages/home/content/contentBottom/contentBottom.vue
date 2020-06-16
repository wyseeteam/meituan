<template>
  <div>
    <div>猫眼电影</div>
    <div>推荐民宿</div>
    <div>猜你喜欢</div>
    <div>推荐民宿</div>
  </div>
  

</template>
<script>

import {request_get} from '../../../../ajax/request.js';
  
export default {
  name: "",
  components: {
    
  },

  created: function()
  {
    console.log('created');
    this.$options.methods.requestFilms();
  },

  methods: {
    requestFilms: function()
    {
      console.log('请求数据');
      request_get('https://hf.meituan.com/ptapi/getComingFilms?ci=56&limit=10', null, null);
    }
  }
};
</script>
<style>
</style>