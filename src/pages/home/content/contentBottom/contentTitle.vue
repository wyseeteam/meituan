<template>
  <div class="title">
    <div class="titleContent">{{option_title}}</div>
  </div>
</template>
<script>

export default {
  name: "",
  components: {},
  data(){
      return {
          
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
      }
  },
  created: function() {
    console.log("created");
    console.log(this.option_list);
    console.log(this.option_title);
  },

  watch: {
      option_list(curVal)
      {
          console.log('改变')
          console.log(curVal);
      }
  },

  methods: {

  }
};
</script>
<style scoped>
  .title{
    width: 94%;
    margin-left: 3%;
    background-color: rgb(250, 69, 89);
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .titleContent
  {
    line-height: 60px;
    margin-left: 20px;
    color: white;
    font-size: 20px;
    text-align: center;
    width: 100px;
  }
</style>