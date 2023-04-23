<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" circle size="mini"></el-button>
            <!-- 面包屑区域 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/logo.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-circle-plus">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu');    //此处vm里面有$store因为之前在main.js里面挂载了store
        }
    }
}
</script>

<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    // 垂直居中
    display: flex;
    // 子组件优先贴于两侧平分剩余空间，所以r-content会自动贴到右边去
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 15px;
    }

    .r-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

}
</style>