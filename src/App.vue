<template>
    <div id="app">
        <Test foo="fff" />
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
    mounted() {
        console.log(this.$el, "el");
    },
};
</script>

<style>
</style>
