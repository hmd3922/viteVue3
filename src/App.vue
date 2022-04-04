<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <!-- <a-button>11</a-button> -->
    <!-- <a-button type="primary" @click="plus()">
      {{number}}
    </a-button> -->
    <a-button type="primary" @click="plus()">
      {{user.name}}
    </a-button>
</template>

<script>
import {defineComponent,reactive}from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  // data(){
  //// 普通方法 

  //   return{
  //     number:30
  //   }
  // },
  // methods:{
  //   plus(){
  //     this.number++
  //   }
  // }
  setup(){
    // ref是对于基本类型做响应式
    //  steup方法
    // const number = ref(30)
    // const plus = ()=>{
    //   number.value++
    //   console.log(111)
    // }
    // return {
    //   number,
    //   plus
    // }
    // reactive是对象的
    const user = reactive({
      name:'呼呼呼'
    });
    const plus = ()=>{
        user.name+='111'    
    }
    return{
      user,
      plus
    }
  }
})
</script>
