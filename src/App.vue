<template>
  <div id="app">
    <Test />
    <LazyLoad />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import LazyLoad from "./components/LazyLoad.vue";

export default {
  name: "App",
  components: {
    Test,
    LazyLoad,
  },
};
</script>

<style>
</style>
