<template>
  <div class="temp">
    <div class="content">
      <!-- vue指令讲解 -->
      <!-- v-text就是用来只渲染data里面的数据源 -->
      <p v-text="aa">手动阀额</p>
      <h3 v-text="tt">撒发发</h3>
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
      tt: "这是data数据源2"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>