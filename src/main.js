import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// （1）main.js叫这个vue项目程序跑起来时候的'入口文件'
// （2）也就是说 所有的非vue自带的东西(第三方插件) 都要在这个文件里面注册,然后才能使用
// （3）main.js文件里面引入（import）的文件 是全局引入（所有的vue页面都能使用引入的东西）


// 全局引入淘宝的适配方案
import 'lib-flexible/flexible.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
