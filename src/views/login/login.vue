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
        <input
          type="text"
          placeholder="请输入账号"
          maxlength="20"
          class="accountEntrybox"
          v-model="accountone"
        />
        <img src="../../assets/img/login/close.png" alt class="accountIcon" />
      </div>
    </div>
    <!-- 密码板块 -->
    <div class="accountPassword">
      <!-- 密码 -->
      <div class="accountSection">
        <img src="../../assets/img/login/jiesuo.png" alt class="accountIcon" />
        <input
          type="text"
          placeholder="请输入密码"
          maxlength="15"
          class="accountEntrybox"
          v-model="passwordone"
        />
        <img src="../../assets/img/login/pwd.png" alt class="accountIcon" />
      </div>
    </div>
    <!-- 忘记密码 -->
    <div class="forgetPasswordoptions">
      <router-link to="forget">
        <p @click="fnTo">忘记密码?</p>
      </router-link>
    </div>
    <!-- 登录按键 -->
    <div class="loginButton">
      <!-- router-link在页面运行时,实际上是被浏览器解析成一个a标签 -->
      <!-- <router-link to="goTothehome"> -->
      <div class="loginButtonone" @click="fnlogin">
        <p class="signInfont" v-text="aaa">登录</p>
      </div>
      <!-- </router-link> -->
    </div>
    <!-- 静态跳转 -->
    <!-- vue中路由传参第一种方式：name+params -->
    <!-- vue中路由传参第一种方式：path+query -->
    <!-- 外双内单 -->
    <!-- <router-link :to="{name:'threeDay',params:{txt:'这是传递的第一中方式'}}">
      <p>2020.6.4测试传参页面1</p>
    </router-link>
    <router-link :to="{path:'/threeDay',query:{name}}">
      <p>2020.6.4测试传参页面2</p>
    </router-link>
    <router-link :to="{path:'/fourDay',query:{name}}">
      <p>2020.6.5只是点讲解</p>
    </router-link>
    <p v-text="aaa">原始值</p>-->
    <!-- 动态跳转 -->
    <!-- <button @click="fnToLogin">动态跳转路由</button> -->
    <!-- <commonFooter @acprop="fnData"/> -->
    <br />
    <router-link to="/five">
      <p>路由传参的总结-各种方式</p>
    </router-link>
    <p @click="fnCeshi">测试</p>
    <router-view></router-view>
  </div>
</template>

<script>
// 这里面就是用来写js 方法等等的
export default {
  name: "Home",
  components: {},
  props: {},
  // data数据源  也就是我们页面上可以渲染出来data数据源里面的任何内容
  data() {
    return {
      name: "这是data数据源",
      bol: true,
      number: 2323,
      txt: "asda",
      aaa: "登录",
      accountone: "",
      passwordone: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnCeshi(){
      this.$router.push({ path: "/test" });
    },
    fnTo() {},
    fnToLogin() {
      // 路由嵌套中 返回上一级路由
      // 凡是跟我们页面跳转相关的我们用$router这个对象
      // 凡是跟我们页面跳转传递参数相关的 我们$route这个对象
      // 动态跳转到某页面
      // push中只能是path对象不能是name
      // 动态跳转
      this.$router.push({ path: "/goTothehome" });
    
    },
    fnData(val) {
      console.log(val);
    },
    fnlogin() {
      if (this.accountone=="") {
        alert("账号不能为空")
        return false;
      }
      if (this.passwordone=="") {
        alert("密码不能为空")
        return false;
      }
      // 发送请求
      this.$http({
        method: "post",
        url: "http://118.24.15.86:3000/user/login",
        data: {
          us: this.accountone,
          ps: this.passwordone
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == -2) {
            alert(res.data.msg);
            this.accountone="";
            this.passwordone="";
          } else {
            this.$router.push({ path: "/myHome" });
          }
        })
        .catch(err => {
          alert("连接失败");
          console.log(err);
        });
    }
  },
  created() {},
  mounted() {}
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
  padding: 0.666667rem 0 0 0;
}

.content {
  position: relative;
  width: 90%;
  margin: 0 auto;
}

.clearA {
  _common_font(28px, red);
}

.temp2 {
  _common_flex();
  _common_column();
  width: 90%;
  margin: 0 auto;

  .titleBlock {
    _common_flex();
    _common_center();
    justify-content: flex-start;
    width: 90%;
    padding: 1.2rem 0;

    .signIntoyouraccount {
      font-size: 0.746667rem;
      color: #037FF8;
    }

    .accountRegistration {
      margin-left: 0.266667rem;
      text-align: none;
      font-size: 0.533333rem;
    }
  }

  .regist {
    .accountSection {
      _common_flex();
      _common_column();
      justify-content: space-between;
    }
  }
}

.accountPassword {
  padding: 0.266667rem 0;
  width: 90%;
  margin: 0 auto;
  _common_border();
  _common_flex();
  _common_center();

  .accountSection {
    width: 100%;
    _common_flex();
    _common_center();
    justify-content: space-around;

    .accountIcon {
      _common_ico();
    }

    .accountEntrybox {
      _common_inputbox();
      width: 75%;
    }
  }
}

.forgetPasswordoptions {
  width: 90%;
  margin: 0 auto;
  _common_flex();
  justify-content: flex-end;
  padding: 1.2rem 0;

  p {
    color: #1588F8;
  }
}

.loginButton {
  width: 100%;

  .loginButtonone {
    _common_flex();
    _common_center();
    width: 90%;
    padding: 0.3rem 0;
    margin: 0 auto;
    background-color: #0079f8;
    border-radius: 0.106667rem;

    p {
      font-size: 0.533333rem;
      color: #fff;
    }
  }
}
</style>


