<template>
  <div class="temp">
    <div class="content">
      <!-- vue指令讲解 -->
      <!-- v-text就是用来只渲染data里面的数据源 -->
      <p v-text="aa">手动阀额</p>
      <h3 v-text="tt">撒发发</h3>

      <!-- vue双向数据流绑定 -->
      <!-- v-model 如果v-model绑定的变量里面是有值的时候 placeholder不生效 -->
      <!-- 当v-model绑定的值 发生变化的时候 对应的data里面的值也发生变化 -->
      <!-- v-model会实时同步更新变量里面的值 -->
      <!-- v-text只能读取值 并不能改变 -->
      <input type="text" placeholder="请输入内容" v-model="inputValue">
      <p>这是输入框里面的内容:
        <span v-text="inputValue"></span>
      </p>

      <!-- v-show的使用 -->
      <!-- v-show就是用来显示或者隐藏的  当v-show里面的布尔值结果来的,为真（true）的时候显示 否之隐藏-->
      <h1 v-show="bool">这是v-show生效的时候显示</h1>

      <!-- vue从一个页面跳转到另外一个页面 -->
      <router-link to="twoDay">
        <h3>跳转</h3>
      </router-link>

      <!-- 点击事件@click -->
      <button @click="fn">点击事件</button>
    </div>
  </div>
</template>

<script>
export default {
  // 引入组件
  components: {},
  // 从当前页面传递给子组件的参数
  props: {},
  // data里面是用来定义数据源的
  data() {
    // return里面写的任何东西都能够在页面（template）里面调用
    // data里面可以定义任何类型的数据 数组 对象 boolean值 字符串
    return {
      aa: "这data数据源",
      tt: "这是data数据源2",
      inputValue: "",
      bool: true
    };
  },
  watch: {},
  computed: {},
  // methods里面是用来写方法的 各种方法
  methods: {
    fn() {
      console.log("xasasda");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>