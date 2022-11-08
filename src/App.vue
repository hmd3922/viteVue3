<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <Comp :title-info="{ value: '待办事项', color: 'red' }"></Comp> -->
<!-- <h2>x:{{obj.x}},y:{{obj.y}}</h2>
<url-page></url-page> -->
<!-- <el-button type="pri">1111</el-button> -->
<!-- <el-button type="primary" size="default">111</el-button> -->
<router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from "./components/HelloWorld.vue";
// import Comp from './components/CompStetup.vue';
import useMousePosition  from './hooks/useMousePotision';
import urlPage from './components/getUrlPage/urlPage.vue';
export default defineComponent({
  name: 'App',
  components: {
    // Comp,
    // HelloWorld,
    urlPage
  },
  setup() {
    const obj = useMousePosition()
    return {
      obj
    }
  }
});
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
