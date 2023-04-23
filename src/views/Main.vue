<template>
    <div>

        <el-container>
            <!-- 在components文件夹下新建组件放进Aside里面 -->
            <el-aside width="atuo">
                <CommonAside />
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader />
                </el-header>
                <el-main>
                    <h1>main</h1>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件会渲染到此处,即Main视图的children子路由 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue';
export default {
    data() {
        return {}
    },
    components: {
        CommonAside,
        CommonHeader
    }
}
</script>

<style>
.el-header {
    padding: 0; 
    /* 去除自带的padding */
}
</style>