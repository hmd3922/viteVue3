<template>
  <div>
<el-form :model="form" onsubmit="return false">
<el-form-item label="todoList" >
      <el-input style="width:200px"  v-model="form.foo" />
    </el-form-item>
      <template v-for="(item,index) in list" :key="index">
<el-form-item :label='item.changed?"已更改":"未更改"'></el-form-item>
      </template>

</el-form>
  </div>
</template>
<script lang='ts'>
const form = reactive({ foo: '' })
        let list = reactive([{changed:false,msg:''}])
        let addItem = () => {
            console.log(form.foo)
}
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    // todo
        return {
            form,
          addItem,
            list
        }
    },
})
</script>

<style lang='stylus' scoped></style>
