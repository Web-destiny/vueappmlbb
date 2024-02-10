<template>
  <default-theme></default-theme>
</template>

<style>
html,body{
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #c6c2c2;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import defaultTheme from "./views/DefaultThemeView";
export default {
  components: {defaultTheme}
}
</script>
