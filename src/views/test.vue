<template>
<div>
    <input type="text" v-model="tt">
    <p v-text="tt"></p>
    <p v-show="yy">yy为true显示,为false不显示</p>

</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    tt:"",
    yy:false,
    // yy:true,
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>