<template>
  <div>
    <head-top title="dhsdbh" :ss="aa" @func="geta"></head-top>
    <search></search>
    <div class="container" v-on:click="cc">
      <contentTop></contentTop>
      <contentBottom></contentBottom>
      <navigation></navigation>
      <foot-bottom></foot-bottom>
    </div>
  </div>
</template>
<script>
import headTop from "../../components/header/header";
import search from "../../components/common/search";
import navigation from "../../components/common/navigation";
import footBottom from "../../components/footer/footer";
import contentTop from "./content/contentTop/contentTop";
import contentBottom from "./content/contentBottom/contentBottom";

export default {
  name: "home",
  components: {
    headTop,
    search,
    contentTop,
    contentBottom,
    navigation,
    footBottom
  },
  data() {
    return {
      aa: 90
    }
  },
  updated() {
    alert(9989)
  },
  methods: {
   cc(){
     alert(8888)
     this.aa = 78;
   },
   geta(a){
     alert(77)
     console.log(a)
   }
  }
};
</script>
<style>
.container{
  width: 1200px;
  margin: 0 auto;
}
</style>