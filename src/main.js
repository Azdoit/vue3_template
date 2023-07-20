import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入scss全局样式
import '@/assets/scss/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'

const app = createApp(App)
installIcons(app)
app.use(store).use(router).mount('#app')
