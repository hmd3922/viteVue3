<template>
  <div class="home">
    <h2>home</h2>
    <Menu/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu  from '@/components/home/menu.vue'
export default defineComponent({
  components:{Menu},
  name: 'home',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
