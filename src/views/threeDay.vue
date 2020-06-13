<template>
  <!-- 组件是表示两个页面之间相跳转的来说 谁是父谁是子 -->
  <!-- 父组件: 一级路由 -->
  <!-- 子组件:二级路由及二级以下 -->
 
  <div>
    <h2>1.路由传参的两种方式</h2>
    <h2>2.什么是vue中的this对象</h2>
    <div class="adad">
      <p>传参第一种方式:name+params</p>
      <img src alt />
    </div>
    <button @click="fnGetOne" class="aa">获取传递的参数方法1</button>
    <button @click="fnGetTWo" class="aa">获取传递的参数方法2</button>
    <p>asdad</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      name: "这是data数据源",
      bol: true,
      number: 2323,
      tt: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnGetOne() {
      //   获取穿的参数值
      console.log("aaa");
      console.log(this.$route.params.txt);
      //   一个页面就是一个vue原型链
      //   vue页面里面的所有东西都可以用this找到获取到
      console.log(this.name);
      console.log(this.bol);
      console.log(this.number);
      //   = 讲等号右侧的值赋值给等号左侧
      // == 比较等号两侧的值是否相等
      this.name = "从后台获取到的值";
      console.log(this.name);
    },
    fnGetTWo() {
      // 同级页面传参
      console.log(this.$route.query.txt2);
    },
   
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
// 局部引入
@import '../assets/css/common.styl';

.adad {
  p {
    _common_font(28px, red);
  }
}

.aa {
  border: 1px solid red;
}
</style>
