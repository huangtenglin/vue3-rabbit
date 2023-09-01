
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引用懒加载指令文件
import { lazyPlugin } from '@/directives'
// 引进全局注册组件
import { componentPlugin } from '@/components'


import 'element-plus/dist/index.css'

import '@/styles/common.scss'

// 引进数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)
// 加载懒加载命令
app.use(lazyPlugin)
// 注册全局组件
app.use(componentPlugin)

app.mount('#app')
