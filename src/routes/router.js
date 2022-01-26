import Vue from 'vue';
import VueRouter from 'vue-router';
import Videos from '@/pages/Videos'

Vue.use(VueRouter);

import Home from '@/pages/Home';

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/Videos',
        component: Videos
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;