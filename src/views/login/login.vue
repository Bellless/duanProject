<template>
<!-- 登录页面 -->
  <!-- template这个标签就是用来写我们的html结构的 弹性布局 -->
  <!-- 有且只有一个div  所有的内容都应该在这个div里面 -->
  <div class="temp">
    <div class="content">
      <div class="logo_div">
        <div class="logo_div_two">
          <!-- 旋转logo -->
          <div class="rotate">
            <div class="middle">
              <img src="../../assets/img/login/icon/quan1.png" alt />
            </div>
            <div class="small">
              <img src="../../assets/img/login/icon/diqiu.png" alt />
            </div>
            <div class="line-big">
              <img src="../../assets/img/login/icon/quan2.png" alt />
            </div>
          </div>
        </div>
        <!-- <p class="logo-div-p">了解行业动态</p> -->
      </div>
    </div>
    <div class="temp2">
      <!-- 登录注册跳转 -->
      <div class="titleBlock">
        <h1 class="signIntoyouraccount">账号登录</h1>
        <!-- 跳转 -->
        <router-link to="regist">
       <h1 class="accountRegistration">账号注册</h1>
      </router-link>
    </div>
    </div>
      <!-- 账号密码板块 -->
      <div class="accountPassword">
        <!-- 账号 -->
        <div class="accountSection">
          <img src="../../assets/img/login/phone.png" alt class="accountIcon" />
          <input type="text" value="请输入账号" maxlength="20" class="accountEntrybox" />
          <img src="../../assets/img/login/close.png" alt class="accountDeletebutton" />
        </div>
        <hr>
      </div>
      <!-- 密码板块 -->
      <div class="accountPassword">
        <!-- 密码 -->
        <div class="passwordPlate">
          <img src="../../assets/img/login/jiesuo.png" alt class="accountIcon" />
          <input type="text" value="请输入密码" maxlength="15" class="accountEntrybox"  />
          <img src="../../assets/img/login/pwd.png" alt class="accountDeletebutton" />
        </div>
        <hr>
      </div>
      <!-- 忘记密码 -->
    <div class="forgetPasswordoptions">
       <router-link to="forget">
       <p>忘记密码?</p>
      </router-link>
    </div>
    <!-- 登录按键 -->
    <div class="loginButton">
      <div class="loginButton2">
        <p class="signInfont">登录</p>
      </div>
      
    </div>
  </div>
</template>

<script>
// 这里面就是用来写js 方法等等的

export default {
  name: "Home"
};
</script>

<style lang="stylus" scoped>
// 局部引入
@import '../../assets/css/common.styl';
@import '../../assets/css/login_icon.css';

/* scoped 表示样式只能在当前页面上生效 */
/* 这里面是写css的 */
.temp {
  position: relative;
  width: 100%;
}

.content {
  position: relative;
}
</style>


