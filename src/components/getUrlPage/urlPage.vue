<!--  -->
<template>
<div class='getUrl'>
    <img :src='imgObj.imgCon' style="width:200px; height:200px">
</div>
</template>

<script lang='ts'>
import { reactive, computed, onMounted } from 'vue'
import { getImg } from './urlAjax'
import * as echarts from 'echarts';
export default {
name:'',
components: {},
computed: {},
    setup() {
        const imgObj = reactive({
            imgCon:''
        })
    // axios.get('/api/rule').then((res) => {
    // console.log(res)
// })
        const getDog = getImg().then((res: any) => {
            console.log(res)
        // imgObj.imgCon =  res.data.message
    })
        return {
    getDog,
    imgObj
}
}
}
</script>
<style scoped>

</style>