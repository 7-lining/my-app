import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
Vue.use(VueRouter)

// 1.创建路由组件，在views下存放所有组件
// 2.将路由与组件进行映射
// 3.创建router实例
// 4.挂载到根节点上main.js

const routes = [
    //主路由
    {
        path: '/',
        component: Main,
        children: [
            //子路由，从主路由访问子路由主路由的内容不变
            {path: 'home', component: Home},
            {path: 'user', component: User}
        ]
    }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router // 对外进行暴露

