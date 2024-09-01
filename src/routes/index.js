import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../home/HomePage.vue'

const routes = [
    {path: '/', name: 'Home', component: HomePage},
    {path: '/home', name: 'Home', component: HomePage},
    {path: '/about', name: 'About', 
        component: ()=>import('../about/AboutPage.vue')}
]

const router = createRouter(
    { history: createWebHistory(),
        routes
    }
)
export default router