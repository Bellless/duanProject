<template>
  <div class="dmji">
    <h1 @click="fnrouter">兄弟组件router-link传参</h1>
    <h1 @click="fnprops">父传子props传参</h1>
    <h1 @click="fn$meit">子传父$meit传参</h1>
    <h1 @click="fnBus">eventBus机制传参</h1>
    <h1 @click="fnFanhv">返回</h1>
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
    fnrouter(){
        this.$router.push({ path: "/Brother_one" });
    },
    fnprops(){
        this.$router.push({ path: "/Father_props" });
    },
    fn$meit(){
        this.$router.push({ path: "/Father_$meit" });
    },
    fnBus(){
        this.$router.push({ path: "/Father_eventBus" });
    },
    fnFanhv(){
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.dmji{
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-items: center;
  color: #1179D1;
}
</style>