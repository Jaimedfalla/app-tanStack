import { createRouter,createWebHashHistory, RouteRecordRaw } from "vue-router";
import clientsRoutes from "@/clients/router";

const routes:RouteRecordRaw[]=[
    {
        path:'/',
        name:'home',
        component:()=>import(/* webpackChunkName: "Counter1" */ '@/counter/pages/Counter1Page.vue')
    },
    {
        path:'/counter2',
        name:'counter-2',
        component:()=>import(/* webpackChunkName: "Counter2" */ '@/counter/pages/CounterSetup.vue')
    },
    clientsRoutes
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router;