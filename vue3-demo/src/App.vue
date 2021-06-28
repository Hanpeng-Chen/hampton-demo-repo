<template>
  <HelloWorld msg="Welcome to Your Vue.js App" title="Vue3 demo"/>
  <TeleportComponent></TeleportComponent>
  <SuspenseDemo></SuspenseDemo>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TeleportComponent from './components/TeleportComponent.vue'
import SuspenseDemo from './components/SuspenseDemo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TeleportComponent,
    SuspenseDemo
  }
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
