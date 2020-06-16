<template>
  <div>
    <head-top></head-top>
    <search></search>
    <contentTop></contentTop>
    <contentBottom></contentBottom>
    <navigation></navigation>
    <foot-bottom></foot-bottom>
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
  }
};
</script>
<style>
</style>