import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
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
        redirect: '/home', // 重定向，当路径为'/'时，重新定向到home
        children: [
            //子路由，从主路由访问子路由主路由的内容不变
            {path: 'home', component: Home},
            {path: 'user', component: User},
            {path: 'mall', component: Mall},
            {path: 'page1', component: PageOne},
            {path: 'page2', component: PageTwo}
        ]
    }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router // 对外进行暴露

