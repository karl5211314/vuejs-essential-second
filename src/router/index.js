import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
        path: '/auth/register',
        name: 'Register',
        component: (function() { return import ('@/views/auth/Register'); })
            // component使用箭头函数加载(教程使用)
            // component: () => import ('@/views/auth/Register'),  
    },
    {
        path: '/',
        name: 'Home',
        component: (function() { return import ('@/views/Home'); })
    },
    // 其他未配置的路由都跳转到首页
    {
        path: '*',
        redirect: '/'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach(function(to, from, next) {
    const auth = router.app.$options.store.state.auth

    if (auth && to.path.indexOf('/auth/') !== -1) {
        return next('/')
    } else {
        return next()
    }
})

export default router