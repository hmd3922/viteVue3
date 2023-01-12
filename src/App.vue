<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
  <router-view />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <Comp :title-info="{ value: '待办事项', color: 'red' }"></Comp> -->


</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from "./components/HelloWorld.vue";
// import Comp from './components/CompStetup.vue';
// import useMousePosition  from './hooks/useMousePotision';
// import urlPage from './components/getUrlPage/urlPage.vue';
export default defineComponent({
  name: 'App',
  components: {
    // urlPage
  },
  setup() {
    // const obj = useMousePosition()
    return {
      // obj
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
