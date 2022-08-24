// import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
// import router from "./router";
// import 'element-plus/lib/theme-chalk/index.css';
// import App from './App.vue';
// import './index.css'

// const app = createApp(App)
// app.use(ElementPlus)
// app.use(router)
// app.mount('#app')
// main.ts
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import {createPinia} from "pinia"
import router from "./router";
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import './index.css'

const app = createApp(App)
const pinia = createPinia()
app.use(router);
app.use(pinia);
app.use(Antd);
app.mount('#app')
