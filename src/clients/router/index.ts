import { RouteRecordRaw } from 'vue-router';

const clientsRoutes: RouteRecordRaw={
    path:'/clients',
    name:'clients',
    component:() => import(/* webpackChunkName: "Clients" */ '@/clients/layout/ClientsLayout.vue'),
    redirect:{name:'clients-list'},
    children:[
        {
            path:'list',
            name:'clients-list',
            component: () => import(/* webpackChunkName: "ClientsList" */ '@/clients/pages/ListPage.vue')
        },
        {
            path:':id',
            name:'clients-byId',
            component: () => import(/* webpackChunkName: "ClientsList" */ '@/clients/pages/ClientPage.vue')
        }
    ]
}

export default clientsRoutes;