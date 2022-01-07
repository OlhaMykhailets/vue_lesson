<template>
  <counter-app title='счетчик' color='red'></counter-app>
  <counter-app title='еще один' color='green'></counter-app>
</template>

<script>
import CounterApp from '@/components/counter.vue'

export default {
  name: 'App',
  components: {
    CounterApp
  }
}
</script>

<style lang="scss">
#counter {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
