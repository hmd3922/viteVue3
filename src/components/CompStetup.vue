<template>
  <div @click="$store.commit('add')">{{ cont }}</div>
  <h1 :style="{ background: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  <div>{{ doubleCounter }}</div>
  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue';
import type { PropType } from 'vue';
import type { Todo, TitleInfo } from '../type/types';
import { useStore } from 'vuex';
import { key } from '../store';
const store = useStore(key);
const cont = computed(() => store.state.cont);
// const cont = ref(1);
defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true,
  },
});
const doubleCounter = computed(() => {
  cont.value * 2;
});
const items = ref<Todo[]>([]);
const todoName = ref('');
items.value.push({
  id: 1,
  name: 'vue3',
  comleted: false,
});
const addTodo = (todo: Todo): void => {
  items.value.push(todo);
  todoName.value = '';
};
const newTodo = (todoName: string): Todo => {
  return {
    id: items.value.length + 1,
    name: todoName,
    comleted: false,
  };
};

// const items = reactive({
//   todoName: "",
// });
</script>
<style lang="less" scoped></style>
