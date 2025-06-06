import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入中文语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入全局主题样式
import './assets/theme.css'

const app = createApp(App)

app.use(router)
// 使用 Element Plus，并设置中文语言
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
