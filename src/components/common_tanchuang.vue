<template>
  <!-- 二级路由嵌套 -->
  <!-- 子组件 -->
  <div class="aaa">
    <p style="color:red;font-size:25px">{{first}}</p>
    <p style="color:red;font-size:25px">{{number}}</p>
    <button @click="fnClose" style="color:red;font-size:20px">点击关闭弹窗并传递参数</button>
  </div>
</template>

<script>
export default {
  // components局部引入vue组件
  components: {},
  //子组件中获取父组件传递的参数
  props: {
    //当使用props接收父组件传来的数据，要指定传递的参数类型类型
    first: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },
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
    }
  },
  created() {},
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