import {createApp} from 'vue'
import App from './App.vue'
import routes from './router'
import * as VueRouter from 'vue-router'
import './index.scss'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})
const app = createApp(App)
app.use(router)

app.mount('#app')
