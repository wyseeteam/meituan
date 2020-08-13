<template>
  <div>
    <head-top title="dhsdbh"></head-top>
    <search></search>
    <div class="container">
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
import Vue from 'Vue';
console.log(this)
export default {
  name: "home",
  components: {
    headTop,
    search,
    contentTop,
    contentBottom,
    navigation,
    footBottom
  }
};
</script>
<style>
.container{
  width: 1200px;
  margin: 0 auto;
}
</style>