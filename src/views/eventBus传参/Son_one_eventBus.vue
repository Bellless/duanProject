<template>
  <div class="Busjivione">
    <h1>eventBus机制的子组件的第</h1>
    <h1 @click="fnfanhuone">返回</h1>
    <div class="Busjivioneone">
      <p>这是要传递的参数</p>
      <p>这是要接收的参数</p>
      <h1 @click="fnBustwo" style="color:#007ACC">跳转</h1>
      <p>这是要传递的参数</p>
      <p>这是要接收的参数</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      bustetx: "已收到"
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnfanhuone() {
      this.$router.go(-1);
    //   eventBus.$meit("aMag", this.bustetx);
    //   EventBus.$emit("aMsg", '来自A页面的消息');
        eventBus.$emit("aMag", this.bustetx);
    },
    fnBustwo() {
      this.$router.push({ path: "/Son_two_eventBu" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.Busjivione {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: #C6C6C6;
  _common_flex();
  _common_column();
  justify-content: flex-start;

  .Busjivioneone {
    _common_flex();
    _common_column();
  }
}
</style>