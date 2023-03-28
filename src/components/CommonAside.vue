<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <!-- 添加属性背景颜色等 -->

        <h3>欢迎登陆图书管理系统</h3>

        <!-- 寻找数据里的key，一般是data中固定不变的值 -->
        <!-- index查elementui文档发现是其唯一标识 -->
        <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name">
            <!-- icon图标组件，不同图标根据官网查，字符串连接data里面的icon -->
            <!-- 使用模板字符串`` -->
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>

        <!-- 二级菜单 -->
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <!-- 嵌套循环data里的children -->
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>

        </el-submenu>

    </el-menu>
</template>

  <!-- 使用less来写，并且添加scope来让它作用于当前页面 -->
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh; //垂直到底
    border-right: none;//取消宽度滚动条
    h3 {
        color: #ffd04b;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 800;
    }
}

// 此处不引入less来写的话得一层层找祖先关系
</style>
  
<script>
export default {
    //导航数据
    data() {
        return {
            isCollapse: false, //让导航栏默认不折叠
            menuData: [
                {
                    path: "/",
                    name: "home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/Home",
                },
                {
                    path: "/mall",
                    name: "mall",
                    label: "商品管理",
                    icon: "video-play",
                    url: "MallManage/MallManage",
                },
                {
                    path: "/user",
                    name: "user",
                    label: "用户管理",
                    icon: "user",
                    url: "UserManage/UserManage",
                },
                {
                    label: "其他",
                    icon: "location", // 含有子菜单的
                    children: [
                        {
                            path: "/page1",
                            name: "page1",
                            label: "首页",
                            icon: "setting",
                            url: "Other/PageOne",
                        },
                        {
                            path: "/page2",
                            name: "page2",
                            label: "首页",
                            icon: "setting",
                            url: "Other/PageTwo",
                        },
                    ],
                },
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    computed: {
        //无子菜单，即data()里面有children项
        noChildren() {
            return this.menuData.filter(item => { //这边加大括号一定要写return！！！
                return !item.children;
            })
        },

        //有子菜单
        hasChildren() {
            return this.menuData.filter(item => {
                return item.children;
            })
        }
    }
}
</script>