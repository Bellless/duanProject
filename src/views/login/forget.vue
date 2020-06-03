<template>
<!-- 忘记密码页面 -->
<div>
    <!-- 标题 -->
  <div class="signUpforpagetitle">
    <h1>忘记密码</h1>
  </div>
  <!-- 注册信息 -->
  <div class="registrationInformation">
    <!-- 手机号码 -->
    <div class="signUpforUniversalTotal">
      <div class="signUpforUniversal">
        <img src="../../assets/img/login/phone.png" alt="">
        <input type="text" placeholder="请输入注册手机号" maxlength="20" class="sccountEntryboxtwo"/>
      </div>
      <div>
        <img src="../../assets/img/login/close.png" alt="" class="accountIcon">
      </div>
    </div>
    <hr>
    <!-- 密码 -->
    <div class="signUpforUniversalTotal">
      <div class="signUpforUniversal">
        <img src="../../assets/img/login/jiesuo.png" alt="">
        <input type="text" placeholder="请输入密码" maxlength="20" class="sccountEntryboxtwo"/>
      </div>
      <div>
        <img src="../../assets/img/login/pwd.png" alt="" class="accountIcon">
      </div>
    </div>
    <hr>
    
    <!-- 验证码 -->
    <div class="cerificationCode">
      <div class="signUpforUniversal">
        <img src="../../assets/img/login/dun.png" alt="">
        <input type="text" placeholder="请输入验证码" maxlength="20" class="sccountEntryboxtwo"/>
      </div>
      <div class="getAverificationcodebutton">
        <p>获取验证码</p>
      </div>
    </div>
    <hr>
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
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
@import'../../assets/css/forget.css';
@import'../../assets/css/common.styl'
</style>