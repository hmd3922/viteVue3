import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host:'0.0.0.0',
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    cors: true, // 默认启用并允许任何源
    port: 8087,
    strictPort: true, // 严格端口 true:如果端口已被使用，则直接退出，而不会再进行后续端口的尝试。
    /**
     * @description 解决chrome设置origin:*也跨域机制,代理/api前缀到服务基地址
     * 最终的地址会将axios设置的baseUrl:/api代理拼接成[target][/api],然后通过rewrite重写掉/api为'' 这样就是我们真实的基地址了
     */
    proxy: {
      '/rule': {
        secure: false,
        target: 'http://localhost:3001', // 接口基地址
        // rewrite: path => path.replace(/^\/api/, '')
        rewrite: path => {
          console.log(path); // 打印[/api/userInfo] 这就是http-proxy要请求的url,我们基地址实际是没有/api 所以replace掉
          return path.replace(/^\/rule/, 'rule');
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src') // 设置 @ 指向 src
    }
  },
})