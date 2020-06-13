<template>
  <div class="xisngdi">
    <h1>兄弟传参的第一组件</h1>
    <h1 @click="fnhui">返回</h1>
    <div class="xiongdione">
      <p>这是要传递的参数</p>
      <h1 @click="fnbro" style="color:#007ACC">跳转</h1>
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
    fnhui() {
      this.$router.go(-1);
    },
    fnbro() {
      this.$router.push({ path: "/Brother_two" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.xisngdi {
  background-color: #E6E6E6;
  _common_flex()
  _common_column()
  .xiongdione{
    _common_flex()
    _common_column()
  }
}
</style>