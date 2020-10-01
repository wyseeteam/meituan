<template>
  <div class="footview">
      <h2>{{title}}</h2>
      <div v-for="value in list" :key='value.id' class="foot">
          {{value.name}}
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  props:{
      title: {
          type: String,
          default: '',
      },
      list: {
          type: Array,
          default: [],
      }
  },
  created()
  {
  },
  components: {}
};
</script>
<style>

h2
{
    font-weight: 600;
    font-size: 13px;
}

.foot
{
    font-size: 12px;
    color: rgb(102, 102, 102);
    margin-top: 5px;
}

.footview
{
    float: left;
    width: 20%;
    margin-top: 30px;
}

</style>