
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { lazyPlugin } from '@/directives'


// import 'element-plus/dist/index.css'

import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 加载懒加载命令
app.use(lazyPlugin)

app.mount('#app')
