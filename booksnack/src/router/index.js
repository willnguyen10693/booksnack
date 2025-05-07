import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ReadTimeTracker from '@/views/ReadTimeTracker.vue';
import FlashCard from '@/views/FlashCard.vue';

const routes = [
    // { path: '/', name: 'Home', component: Home },
    { path: '/readtimetracker', name: 'readtimetracker', component: ReadTimeTracker },
    { path: '/', name: 'Flashcard', component: FlashCard},
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;