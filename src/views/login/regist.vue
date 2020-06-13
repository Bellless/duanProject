<template>
  <!-- 注册页面 -->
  <div class="signUppage">
    <img src="../../assets/img/owns/entero.png" alt class="fanhui" @click="fnFanhui" />
    <!-- 注册信息 -->
    <div class="registrationInformation">
      <!-- 标题 -->
      <h1>账号注册</h1>
      <!-- 账号 -->
      <div class="signUpforUniversalTotal">
        <div class="signUpforUniversal">
          <img src="../../assets/img/login/phone.png" alt />
          <input type="text" placeholder="请输入注册账号" class="sccountEntryboxtwo" v-model="username" />
          <router-link to="/fourDayTest">
            <div>
              <img src="../../assets/img/login/close.png" alt class="accountIcon" />
            </div>
          </router-link>
        </div>
      </div>
      <!-- 密码 -->
      <div class="signUpforUniversalTotal">
        <div class="signUpforUniversal">
          <img src="../../assets/img/login/jiesuo.png" alt />
          <input
            type="password"
            placeholder="请设置登录密码"
            maxlength="20"
            class="sccountEntryboxtwo"
            v-model="password"
          />
          <div @click="fnToLogin">
            <img src="../../assets/img/login/pwd.png" alt class="accountIcon" />
          </div>
        </div>
      </div>
      <!-- 手机号码 -->
      <!-- <div class="signUpforUniversalTotal">
        <div class="signUpforUniversal">
          <img src="../../assets/img/login/phone.png" alt />
          <input type="text" placeholder="请输入手机号" maxlength="20" class="sccountEntryboxtwo" />
        </div>
      </div>-->
      <!-- 验证码 -->
      <!-- <div class="signUpforUniversalTotal">
        <div class="signUpforUniversal">
          <img src="../../assets/img/login/dun.png" alt />
          <input type="text" placeholder="请输入验证码" maxlength="20" class="sccountEntryboxtwo" />
        </div>
        <div class="getAverificationcodebutton">
          <p>获取验证码</p>
        </div>
      </div>-->
    </div>
    <!-- 注册按钮 -->
    <div class="registerButtonborder" @click="fnRegist">
      <div class="signpbutton">
        <p class="registerFonts">注册</p>
      </div>
    </div>
    <!-- <button>从regist父组件传递值给fourDayTest子组件</button> -->
    <!-- <router-view>是用再你当前的这个页面,里面右路由嵌套的时候 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      txt: "初始值",
      username: "",
      password: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnToLogin() {},
    fnFanhui() {
      this.$router.go(-1);
    },
    fnTest() {
      window.eventBus.$on("fnData", value => {
        console.log(value);
        this.txt = value;
        console.log(this.txt);
      });
    },
    fnRegist() {
      if (this.username == "") {
        alert("注册账号不能为空!");
        // 终止程序往下执行
        return false;
      }
      if (this.password == "") {
        alert("注册密码不能为空!");
        return false;
      }
      // 发送请求
      this.$http({
        // 请求的方式
        // get post delete
        method: "post",
        // url请求的地址
        url: "http://118.24.15.86:3000/user/regist",
        // data就是我们要传递到后台去的参数
        // 参数名称一定要和后台给的字段名称一样
        data: {
          // 注册的用户名
          us: this.username,
          // 注册的密码
          ps: this.password
        }
      })
        .then(res => {
          // .then请求成功了 进行什么操作
          // 我们能正常的访问接口
          // 后台返回给你的 他是个对象 你要用什么东西得自己处理一下 取出你自己要的东西
          console.log("请求成功");
          console.log(res);
          console.log(res.status);
          console.log(res.data);
          console.log(res.data.msg);
          // alert(res.data.msg);
          if (res.data.code == -3) {
            // ==就是判断等号两边值是否相等
            // =就是讲等号右侧的值赋值给左侧
            alert(res.data.msg);
            this.username = "";
            this.password = "";
          } else {
            alert(res.data.msg);
            this.$router.push({ path: "/" });
          }
          // this.$router.push({path:"/"})
        })
        .catch(err => {
          // .catch请求失败进行什么操作
          // 后台给的接口都跑不通 可能是网络的问题
          // alert("请求失败")
          console.log(err);
        });
    }
  },

  created() {
    this.fnTest();
  },
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

  .fanhui {
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

      .signUpforUniversal {
        _common_flex();
        justify-content: space-around;
        // background-color: red;
        width: 100%;
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
        margin-left: 0.2rem;
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