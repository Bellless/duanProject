// 凡是Vue中的第三方插件 都需要在这个页面注册才能使用
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import response from './assets/js/response.js'

// 引入axios请求
import axios from 'axios'
// 讲引入的请求挂在到Vue的原型链上 再需要用的时候使用this.$http
Vue.prototype.$http = axios;
// Vue.prototype.$EventBus = new Vue();
// （1）main.js叫这个vue项目程序跑起来时候的'入口文件'
// （2）也就是说 所有的非vue自带的东西(第三方插件) 都要在这个文件里面注册,然后才能使用
// （3）main.js文件里面引入（import）的文件 是全局引入（所有的vue页面都能使用引入的东西）


// 全局引入淘宝的适配方案
import 'lib-flexible/flexible.js'
import '../src/assets/css/reset.css'
import { version } from 'core-js'

// 全局注册eventBus机制
// 里面两种方法:
// eventBus.$emit() 子组件传递
// eventBus.$on 父组件接受
window.eventBus = new Vue();
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// Vue.prototype 注册$xx到vue的原型链上
// Vue.prototype.$xx = fun;