<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <my-component></my-component>
  <home-page></home-page>
</template>

<script>

import MyComponent from "@/MyComponent";
import HomePage from "@/components/homePage";

export default {
  name: 'App',
  components: {HomePage, MyComponent },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
