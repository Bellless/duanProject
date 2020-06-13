<template>
    <div class="Busthree">
        <h1>eventBus机制的孙组件</h1>
        <h1 @click="fnfanhutwo">返回</h1>
        <div>
            <p>这是要传递的参数</p>
            <p>这是要接收的参数</p>
        </div>
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
    fnfanhutwo() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';
.Busthree{
    width 100%
    height 100%
    position fixed
    top 0
    background-color #C6C6C6
    _common_flex()
    _common_column();
    justify-content flex-start
}
</style>