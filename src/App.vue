<template>
  <div id="app">
    <PCSidebar/>
    <router-view/>
  </div>
</template>

<script>
import PCSidebar from "./views/PCSidebar.vue";

export default {
  components: {
    PCSidebar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #333130;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
