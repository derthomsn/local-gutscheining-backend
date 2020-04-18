import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '/stores',
        name: 'Companies List',
        component: () => import(/* webpackChunkName: "companies-list" */ '../views/Stores-List.vue')
    },
    {
        path: '/store/:id',
        name: 'Company',
        component: () => import(/* webpackChunkName: "company" */ '../views/Store.vue'),
    },
    {
        path: '/store/:id/order-coupon/:couponId',
        name: 'Order Coupon',
        component: () => import(/* webpackChunkName: "order-coupon" */ '../views/OrderCoupon.vue')
    },
    {
        path: '/store/:id/payment-result/:couponId',
        name: 'Payment Result',
        component: () => import(/* webpackChunkName: "payment-result" */ '../views/PaymentResult.vue')
    },

    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/imprint',
        name: 'Imprint',
        component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
    },
    {
        path: '/dataProtection',
        name: 'Data Protection',
        component: () => import(/* webpackChunkName: "imprint" */ '../views/DataProtection.vue')
    }
]

const router = new VueRouter({
    routes : routes,
    scrollBehavior: (to, from, savedPosition) => {
        return { x: 0, y: 0 }
    }
})

export default router
