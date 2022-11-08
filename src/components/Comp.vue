<template>
  <div>{{ cont }}</div>
  <h1 :style="{ background: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  <div>
    {{ doubleCounter }}
  </div>
  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Todo, TitleInfo } from '../type/types';
export default defineComponent({
  name: 'Comp',
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      cont: 1,
      items: [] as Todo[],
      todoName: '',
    };
  },
  computed: {
    doubleCounter(): number {
      return this.cont * 2;
    },
  },
  watch: {},
  methods: {
    addTodo(todo: Todo): void {
      this.items.push(todo);
      this.todoName = '';
    },
    newTodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        name: todoName,
        comleted: false,
      };
    },
  },
  created() {
    this.items.push({
      id: 1,
      name: 'vue3',
      comleted: false,
    });
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
});
</script>
<style lang="less" scoped></style>
