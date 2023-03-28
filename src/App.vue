<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件会渲染到此处 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<!-- 消除默认样式的白边 -->
<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>