<template>
  <div class="aaa">
    <h1>父传子的父组件</h1>
    <h1 @click="fnfanhui">返回</h1>
    <div class="aaaa">
      <p>这是要传递的参数</p>
      <div class="bbb">
        <p style="color:#007ACC;font-size:0.48rem" @click="son_p">跳转</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    fnfanhui() {
      this.$router.go(-1);
    },
    son_p(){
        this.$router.push({path:"/Son_props"})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.aaa {
  width: 80%;
  background-color: #E6E6E6;
  margin: 0 auto;
  _common_flex();
  _common_column()
}
.aaaa{
    _common_flex();
    _common_column()
}
.bbb{
    _common_flex();
    _common_center()
    width 3rem
    height 1rem
    margin 0 auto
    background-color #C4D08B
    border-radius: 0.15rem 0.15rem 0.15rem 0.15rem;
}
</style>