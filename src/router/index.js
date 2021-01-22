import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "@/views/Layout";

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Layout', component: Layout,
        children:
            [
                { path: '/home', name: 'Home ', component: Home },
                { path: '/Login',name: 'Login ', component: () => import('../views/About.vue') },
                { path: '/team',name: 'Team ', component: () => import('../components/Team/Team') },
                { path: '/team/al-mamun',name: 'Team - Mamun', component: () => import('../components/Team/AlMamun') },
                { path: '/team/ruhin-mia',name: 'Team - Ruhin', component: () => import('../components/Team/RuhinMia') },
            ]
    },
    // { path: '/home', name: 'Home', component: Home },
    /*{ path: '/about', name: 'About',
        component: function () { return import('../views/About.vue') }
    }*/
    //{ path: '/about', name: 'About', component: () => import('../views/About.vue') },
]

const router = new VueRouter({
    hashbang: false,
    mode: "history",
    linkActiveClass: "active",
    routes
})

export default router
