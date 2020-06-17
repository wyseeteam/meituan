<template>
  <div>
    <div>
      <div>
        <contentTitle option_title='猫眼电影' v-bind:option_list='filmlist'></contentTitle>
      </div>
    </div>
    <div>
      <div>
        <contentTitle option_title='推荐民宿'></contentTitle>
      </div>
    </div>
    <div>
      <div>
        <contentTitle option_title='猜你喜欢'></contentTitle>
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
      filmlist: ['1']
    }
  },

  created: function()
  {
    console.log('created');
    console.log(this.filmlist);
    this.$options.methods.requestFilms(this);
  },

  methods: {
    requestFilms(that)
    {
      console.log('请求数据');
      
      request_get('/getComingFilms?ci=56&limit=10', function(res){
        console.log(res);
        that.filmlist = res.data.data.coming;
      });

    }
  }
};
</script>
<style>
</style>