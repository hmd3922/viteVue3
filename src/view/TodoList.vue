<template>
  <div>
    <el-form :model="form" onsubmit="return false">
      <el-form-item label="todoList">
        <el-input style="width: 200px" v-model="form.msg" @keydown.enter="addItem" />
      </el-form-item>
      <template v-for="(item, index) in list" :key="index">
        <template v-if="item.msg">
          <el-form-item label="todoItem">
            <span
              type="text"
              style="width: 200px; border: 1px solid #000000"
              @mouseover="changeState(index - 1)"
              >{{ item.msg }}</span
            >
            <div>
              <el-button type="danger" @click="delData(index)">删除</el-button>
            </div>
          </el-form-item>
        </template>
      </template>
      <template v-for="(item, index) in doneList" :key="index"> </template>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const form = reactive({});
    let list = reactive([{ stats: 0, msg: '' }]);
    let doneList = reactive([{ stats: 1, msg: '' }]);
    let addItem = () => {
      let isemptyObj = Object.prototype.isPrototypeOf(form);
      if (isemptyObj) {
        return false;
      } else {
        let newItem = { ...form };
        list.push(newItem);
      }
      // if (Object.prototype.isPrototypeOf(form)) {
      //   return false;
      // } else {
      //   let newItem = { ...form };
      //   list.push(newItem);
      // }
    };
    let changeState = (index: any) => {
      console.log((list[index].stats = 1));
    };

    let changeData = (index: any) => {
      console.log(index);
    };
    let delData = (index: any) => {
      console.log(list);
      list.splice(index, 1);
      console.log(list);
    };
    // todo
    return {
      form,
      addItem,
      list,
      changeState,
      changeData,
      delData,
      doneList,
    };
  },
});
</script>

<style lang="stylus" scoped></style>
