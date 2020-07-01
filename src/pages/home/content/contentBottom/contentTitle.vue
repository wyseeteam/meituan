<template>
  <div class="title" :style="{'background-color': normalcolor}">
    <div class="titleContent">{{option_title}}</div>
    <ul>
      <li v-for="(value, index) in option_list" v-bind:key="value.id" class="option" @mouseover="click(index)">{{value.name}}
        <div :style="{'border-bottom-color': (sindex==index)?whitecolor:normalcolor}"></div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "",
  components: {},
  data(){
      return {
          whitecolor: 'white',
          normalcolor: '',
          sindex: 0,
      }
  },
  props: {
      option_list: {
        type: Array,
        default: null
      }, 
      option_title: {
        type: String,
        default: ''
      },
      option_color:{
        type: String,
        default: 'white'
      }
  },
  created: function() {
    console.log("created");
    console.log(this.option_list);
    console.log(this.option_title);
    this.normalcolor = this.option_color;
  },

  watch: {
      option_list(curVal)
      {
          let item = curVal[0];
          if (item.cityName)
          {
            curVal.forEach(function(res){
              res.name = res.cityName;
              
            });
          }
          this.option_list = curVal;
          console.log(this.option_list);
          
      }
  },

  methods: {
    click(e)
    {
      if (e == this.sindex)
      {
        return
      }
      this.sindex = e*1;
      // this.$parent.changeAction(this.sindex);
      this.$emit('changeAction', {'index':this.sindex});
    }
  }
};
</script>
<style scoped>
  .title{
    width: 1200px;
    height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* float: left; */
    display: flex;
    flex-direction: row;
    clear: both;
    border-bottom: solid 1px white;
    margin: 0 auto;
  }

  .title ul 
  {
    /* height: 100%; */
    clear: both;
    float: left
  }

  .title ul li div
  {
    width: 0;
    height: 0;
    border-width: 0 8px 10px;
    border-style: solid;
    border-color: transparent transparent white;
    margin: 0 auto;
    /* position: relative; */
    /* bottom: 0; */
  }

  .title .titleContent
  {
    margin-left: 20px;
    color: white;
    font-size: 20px;
    text-align: center;
    width: 100px;
    float: left;
    height: auto;
    line-height: 40px;
  }

   .option
  {
    color: white;
    /* height: 100%; */
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    float: left;
    padding: 0 8px;
    /* top: 50%; 偏移 */
    /* transform: translateY(-50%); */
    /* position: relative; */
    line-height: 20px;
    margin-top: 10px;
  }

</style>