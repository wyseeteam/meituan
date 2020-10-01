<template>
  <div class="wrapper" v-if="showLoading">
    <div class="animation">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
      <div class="shape shape4"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "",
  data() {
    return {
      len: "",
      starwidth: 0
    };
  },
  props: {
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  computed: {},

  created(){
    
  },
  mounted() {
   console.log(this);
    // var _this = this;
    // setTimeout(function(){
    //   _this.showLoading = false;
    // },3000);
   
  },
  methods: {}
};
</script>
<style>
.wrapper{
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.4); */
  position: absolute;

}
.animation{
  width: 40px;
  height: 40px;
  position: relative;
  margin: 50px auto;
  animation: rotate 1s ease 1s infinite alternate;
}
.shape{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.shape1{
  position: absolute;
  left: 0;
  background-color: #8BC34A;
  animation: shake1 0.3s ease 0.3s infinite alternate;
}
.shape2{
  position: absolute;
  right: 0;
  background-color: #5C6BC0;
  animation: shake2 0.3s ease 0.3s infinite alternate;
}
.shape3{
  position: absolute;
  bottom: 0;
  background-color: #FFB74D;
  animation: shake3 0.3s ease 0.3s infinite alternate;
}
.shape4{
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #F44336;
  animation: shake4 0.3s ease 0.3s infinite alternate;
}
@keyframes shake1 {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(-15px,30px);
  }
}
@keyframes shake2 {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(15px,30px);
  }
}
@keyframes shake3 {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(-15px,-30px);
  }
}
@keyframes shake4 {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(15px,-30px);
  }
}
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

</style>