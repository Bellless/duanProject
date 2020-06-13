<template>
  <!-- 二级路由嵌套 -->
  <!-- 子组件 -->
  <div class="aaa">
    <button @click="fnReturn" style="color:red;font-size:20px">这是返回上一级页面并传参数(采用eventBus的机制)</button>
    <button @click="fnClose" style="color:red;font-size:20px">点击关闭二级路由页面</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      name: "这是eventBus机制"
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnClose() {
      console.log(this);

      // 动态返回
      this.$router.go(-1);
    },
    fnReturn() {
  
      // 子组件传递参数给父组件
      // this.$emit("acprop",123);
      // 子组件在Vued原型链上注册一个方法
      // this==Vue的原型链
      eventBus.$emit("fnData", this.name);
      this.$router.go(-1);
    }
  },
  created() {
    // 默认先执行created里面的东西
    // 动态跳转路由（跳转页面）
    // this.$router.push({path:"要跳转的路径"})
    // 获取传递的参数
    // this.$route.params.txt
  },
  mounted() {}
};
</script>
<style scoped>
.aaa {
  height: 100%;
  background-color: rgba(100, 100, 100, 0.8);
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>