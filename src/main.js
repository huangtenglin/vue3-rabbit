
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

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 加载懒加载命令
app.use(lazyPlugin)
// 注册全局组件
app.use(componentPlugin)

app.mount('#app')
