<template>
  <!-- this对象可以拿来找到VUE中的任何东西 -->
  <!-- 1.this不能再template里面使用 -->
  <!-- 2.this再一个页面上,一般再script标签里面使用 -->
  <!-- 3.this再vue中,调用的时候一定是一级方法中使用或者箭头函数使用 才能找到this -->
  <div>
    <div>
      <button @click="fnTxt">created测试</button>
      <h1 style="color:red">created其实就是一个方法</h1>
      <h2>create的里面的所有东西 再页面加载的时候都会默认的先执行cerate里面的东西</h2>
    </div>
    <br>
    <br>
    <div>
        <h2>路由嵌套:</h2>
        <p>分类:1.一级路由>二级路由>三级路由>四级路由</p>
        <p>一般实际开发中,大多数情况三级路由就够用了</p>

        <h2>使用方法:</h2>
        <p>在配置路由规则的时候使用children</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      name: "这是调用了方法"
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 方法连接方法 不能直接再里面打印 也不能直接再里面定义变量等
    fnTxt() {
      console.log(this.name);
    },
  },
  created() {
      console.log("先执行到了crated里面了");
      this.fnTxt();
  },
  mounted() {}
};
</script>
<style scoped>
button {
  border: 1px solid red;
}
</style>