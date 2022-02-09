import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView';

const routes = [
    {
        path: "/100-percent",
        redirect: '/100-percent/Todo',
    },
    {
        path: "/",
        redirect: '/Todo',
    },
    {
        path: "/todo",
        name: 'todo',
        component: TodoView,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;