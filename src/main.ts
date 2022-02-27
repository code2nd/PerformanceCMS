import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'
import registerApp from '@/global'

import 'element-plus/theme-chalk/el-loading.css'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

setupStore()

app.use(router)
app.use(store)
registerApp(app)

app.mount('#app')
