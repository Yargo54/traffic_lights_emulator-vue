import Green from "@/pages/Green";
import Yellow from "@/pages/Yellow";
import Red from "@/pages/Red";
import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/green',
        component: Green
    },
    {
        path: '/yellow',
        component: Yellow
    },
    {
        path: '/red',
        component: Red
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;