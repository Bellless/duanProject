<template>
  <div>
    <!-- 这是公用的组件 -->
    <!-- vue-cli脚手架3.x创建的项目,公用的页面(组件)写在components文件夹下面 -->
    <!-- vue-cli脚手架3.x创建的项目,常用的页面写在views文件夹下面 -->

    <!-- 
同级组件传参
    <h3>从父组件传递给子组件</h3>
    <h4>写法两种: router-link传参   name+parmas  path+query</h4>
    <br>
父子组件传参
    <h3>从子组件传递给父组件</h3>
    <h4>写法: *****子组件中的写法>>>采用$emit("第一个参数",第二个参数)
        第一个参数:自定义方法
        第二个参数:传递的值

              ****父组件中的写法>>>采用@acprop("第一个参数")
        一个参数:自定义方法
父孙 孙孙组件传参
    //  eventBus机制 只适用于父子组件传值 父子 或者父孙 子孙 孙孙孙   同级页面传值用router-link的两种方式
    //  书写格式： 小的等级中注册声明采用  eventBus.$emit("自定义方法名"，传递的参数)
    //  大的等级中获取采用  eventBus.$on("自定义方法名",value=>{})        
    </h4>-->
    <div class="footer">
      <router-link to="connectedWorld">
        <div class="left">
          <img src="../assets/img/footer_img/InternetWorld.png" alt class="bottomBarpicture" />
          <p>互联世界</p>
        </div>
      </router-link>
      <router-link to="myFriend">
        <div class="left">
          <img src="../assets/img/footer_img/friend.png" alt class="bottomBarpicture" />
          <p>我的好友</p>
        </div>
      </router-link>
      <router-link to="mySettings">
        <div class="left">
          <img src="../assets/img/footer_img/setUp.png" alt class="bottomBarpicture" />
          <p>我的设置</p>
        </div>
      </router-link>
      <!-- <button @click="fnParm">传递参数给父组件</button> -->
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
    fnParm() {
      this.$emit("acprop", 123);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl';

.footer {
  _common_flex();
  _common_center();
  background-color: #e7ece8;
  width: 100%;
  justify-content: space-around;
  position: fixed;
  bottom: 0;

  img {
    width: 0.733333rem;
  }

  .left {
    _common_flex();
    _common_column();
    padding: 0.466667rem 0;
  }
}
</style>