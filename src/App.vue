<template>
  <div id="app">
    <Home />
    <div id="menu"></div>
  </div>
</template>

<script>
import Home from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  /* margin-top: 60px; */
  padding: 0;
  margin: 0;
}
body {
  background: rgb(221, 150, 150);
  padding: 0;
  margin: 0;
}
</style>
