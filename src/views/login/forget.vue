<template>
  <!-- 忘记密码 -->
  <div class="signUppage">
    <img src="../../assets/img/owns/entero.png" alt="" class="fanH" @click="fnFanhu">
    <!-- 注册信息 -->
    <div class="registrationInformation">
      
      <!-- 标题 -->
      <h1>忘记密码</h1>
      <!-- 账号 -->
      <div class="signUpforUniversalTotal">
        <div class="signUpforUniversal">
          <img src="../../assets/img/login/phone.png" alt />
          <input type="text" placeholder="请输入注册手机号" maxlength="20" class="sccountEntryboxtwo" />
        </div>
        <div>
          <img src="../../assets/img/login/close.png" alt class="accountIcon" />
        </div>
      </div>
      <!-- 手机号码 -->
      <div class="signUpforUniversalTotal">
        <div class="signUpforUniversal">
          <img src="../../assets/img/login/phone.png" alt />
          <input type="text" placeholder="请输入手机号" maxlength="20" class="sccountEntryboxtwo" />
        </div>
      </div>
      <!-- 验证码 -->
      <div class="signUpforUniversalTotal">
        <div class="signUpforUniversal">
          <img src="../../assets/img/login/dun.png" alt />
          <input type="text" placeholder="请输入验证码" maxlength="20" class="sccountEntryboxtwo" />
        </div>
        <div class="getAverificationcodebutton">
          <p>获取验证码</p>
        </div>
      </div>
    </div>
    <!-- 注册按钮 -->
    <div class="registerButtonborder">
      <div class="signpbutton">
        <p class="registerFonts">修改</p>
      </div>
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
    fnFanhu(){
      this.$router.go(-1)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

// 用stylus sass less 三则大同小异 每个页面的样式你要写在这个页面里面
// 公用的弹性布局居中
_common_center() {
  _common_flex();
  justify-content: center;
  align-items: center;
}

.signUppage {
  width: 90%;
  margin: 0 auto;
  .fanH{
    padding-top: 2rem;
  }

  .registrationInformation {
    padding-top: 1rem;

    h1 {
      color: blue;
      margin: 0.5rem 0;
    }

    .signUpforUniversalTotal {
      /* border拿来写div的边框样式 跟margin用法一样都是上下左右 */
      /* boder简写三个属性  第一个表示你的边框线的大小  第二个表示线的类型(实线或者虚线) 第三个表示线的颜色 */
      _common_border();
      _common_flex();
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0;

      .signUpforUniversal{
         _common_center()
      }
      .signUppage {
        position: relative;
        width: 100%;
      }

      .accountIcon {
        width: 0.666667rem;
      }

      .sccountEntryboxtwo {
        width: 75%;
        /* 去除未选中状态边框 */
        border: 0;
        /* 去除选中状态边框 */
        outline: none;
        // background-color red;
        margin-left .2rem;
      }

      .registrationInformation {
        position: relative;
        width: 90%;
        margin: 0 auto;
      }

      .getAverificationcodebutton {
        color: #0A86F8;
      }
    }
  }

  .registerButtonborder {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    .signpbutton {
      margin-top: 1.6rem;
      background-color: #0079F8;
      width: 100%;
      padding: 0.3rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.106667rem;
    }

    .registerFonts {
      font-size: 0.533333rem;
      color: #fff;
    }
  }
}

</style>