import { createApp } from 'vue';
import router from './router/index'
import App from './App.vue';
import ElementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';
import 'element-plus/dist/index.css'
import * as echarts from 'echarts';
import store, { key } from './store';
import qs from 'qs';
//  引入flexible插件
import 'lib-flexible'

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$qs = qs;
app.use(router, store, key,)
app.use(ElementPlus)
app.mount('#app')
