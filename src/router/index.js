import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView';
import TimerView from '../views/TimerView';

const routes = [
    {
        path: "/",
        redirect: '/Todo',
    },
    {
        path: "/todo",
        name: 'todo',
        component: TodoView,
    },
    {
        path: "/timer",
        name: 'timer',
        component: TimerView,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;