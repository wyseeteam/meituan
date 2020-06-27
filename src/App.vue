<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
/* 同一行display:inline-block出现空隙，父级设置font-size:0,防止覆盖 */
body,html,div, span, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select,a {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
body{
  background-color: rgb(248,248,248);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
}

a {
  color: #000;
  text-decoration: none;
}

input, textarea {
    outline: none;
    border: none;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
}
button{
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
