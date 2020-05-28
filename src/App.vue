<template>
  <div id="app">
    <!-- app.vue里面必须要有router-view这个标签-->
    <!-- router-view就是去匹配router目录下的index.js里面的所有路由规则 -->
    <!-- 如果没有router-view这个标签 整个项目中的所有页面都不会显示的 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
