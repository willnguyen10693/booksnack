import { createRouter, createWebHistory } from 'vue-router';
import bookSnacks from '@/views/bookSnacks.vue';

const routes = [
    { path: '/', name: 'booksnacks', component: bookSnacks },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;