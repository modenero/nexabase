import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DownloadView from '../views/DownloadView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/about',
            component: AboutView,
        },
        {
            path: '/download',
            component: DownloadView,
        },
    ]
})

export default router
