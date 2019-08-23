import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/auth/register',
    name: 'Register',
    component: (function() {
        return import ('@/views/auth/Register')
    }),
    // component使用箭头函数加载(教程使用)
    // component: () =>
    //     import ('@/views/auth/Register'),
}]

const router = new Router({
    mode: 'history',
    routes
})

export default router