<template>
    <div class="test">
        <div>{{'2020' | msg2}}</div>
        <div>{{count}}</div>
        <button @click="add">点我加一</button>
    </div>
</template>

<script>
// import {Addlog} from '@/assets/js/add.js'
export default {
    name: "test",
    props: {
      foo:{
        type: String
      }
    },
    data() {
        return {
            count: 0,
            timer: null,
            msg1: "1111111"
        };
    },
    mounted() {
      console.log(this.$data,'data');
      console.log(this.$props,'props');
      console.log(this.$options,'options')
    },
    filters: {
        msg2(value) {
          if(value == '') {
            value = '222222'
          }
          value = '333333'
            return value
        },
    },
    methods: {
        add() {
            if (this.timer != null) {
                clearTimeout(this.timer);
            }
            let vm = this;
            this.timer = setTimeout(function () {
                vm.count++;
            }, 1000);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
