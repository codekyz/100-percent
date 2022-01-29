<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";

export default {
  components: {
    HeaderBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
