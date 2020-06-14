// 凡是跟我们页面相关的 路由配置 路由嵌套 全局注册公用的组件都应该在router文件夹下面的index.js里面

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import backTosignin from '../views/login/login.vue'
import twoDay from '../views/twoDay.vue'
import threeDay from '../views/threeDay.vue'
import fourDayTest from '../views/fourDayTest.vue'
import fourDay from '../views/fourDay.vue'
import ownsTestOne from '../views/ownsTestOne.vue'
import regist from '../views/login/regist.vue'
import forget from '../views/login/forget.vue'
import goTothehome from '../views/home/home.vue'
import connectedWorld from '../views/home/connectedWorld/connectedWorld.vue'
import mySettings from '../views/home/mySettings/mySettings.vue'
import twoDcode from '../views/home/mySettings/twoDcode.vue'
import myHome from '../views/home/home.vue'
import hometwo from '../views/home/hometwo.vue'
import Share from '../views/home/homethree.vue'
import myFriend from '../views/home/myFriend/myFriend.vue'
// 引入公用的组件
import common_footer from '../components/common_footer.vue'
// import common_tanchuang from '../components/common_tanchuang.vue'



// 全局(整个vue中的所有的页面都能使用)注册公用的组件
// 步骤:1.引入我们要注册的组件2.注册(Vue.component('第一个参数',第二个参数))
// 第一个参数>>>就是你在页面上要使用的时候用的
// 第二个参数>>>你要注册的路由文件在哪里
Vue.component("commonFooter", common_footer)
    // Vue.component("commonTan", common_tanchuang)


Vue.use(VueRouter)

const routes = [
    // 在vue所有的页面跳转都需要在router文件目录下的index.js里面来进行配置路由跳转规则
    // 如果 你页面写好了 但是没有在里面配置规则 你是不能够显示页面的
    // 不是像html一样用a标签直接加href来跳
    {
        // /  >>根目录 就是这个项目启动的时候访问的第一个页面
        // 根目录只有一个
        path: '/',
        name: 'login',
        component: login
    },

    {
        // path  我们在浏览器中访问的地址
        path: '/twoDay',
        // name  就是我们router-link中的路径
        name: 'twoDay',
        // component 就相当于href 你要跳转的路径
        component: twoDay
    },
    // 一级路由 (就相当于单独开了一个页面)
    {
        path: '/oneDay',
        name: 'oneDay',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/oneDay.vue')
    },
    // 一级路由 (就相当于单独开了一个页面)
    {
        path: '/threeDay',
        name: 'threeDay',
        component: threeDay,
    },
    {
        path: '/fourDay',
        name: 'fourDay',
        component: fourDay,
    },
    {
        path: '/sixDay',
        name: 'sixDay',
        component: () =>
            import ('../views/sixDay.vue')
    },
    {
        // 一级路由 (就相当于单独开了一个页面)
        // (父组件)
        path: '/regist',
        name: 'regist',
        component: regist,
        // 二级路由(再页面上,再开了一个页面  而不是单独开页面)
        // 子组件
        children: [{
            path: '/fourDayTest',
            component: fourDayTest,
            // 三级路由
            children: []
        }]
    },
    {
        path: '/forget',
        name: 'forget',
        component: forget
    },
    {
        path: '/goTothehome',
        name: 'goTothehome',
        component: goTothehome,
        children: [{
            path: '/hometwo',
            component: hometwo,
            children: [{
                path: '/Share',
                component: Share
            }]
        }]
    },
    {
        path: '/connectedWorld',
        name: 'connectedWorld',
        component: connectedWorld
    },
    {
        path: '/backTosignin',
        name: 'backTosignin',
        component: backTosignin
    },
    {
        path: '/mySettings',
        name: 'mySettings',
        component: mySettings,
        children: [{
            path: '/twoDcode',
            component: twoDcode
        }]
    },
    {
        path: '/myFriend',
        name: 'myFriend',
        component: myFriend
    },
    {
        path: '/myHome',
        name: 'myHome',
        component: myHome
    },
    {
        path: '/five',
        name: 'five',
        // 路由懒加载(只有当我们页面上要加载的时候的才会加载这个)节约浏览器性能资源
        component: () =>
            import ('../views/five.vue')

    },
    {
        path: '/Father_props',
        name: 'Father_props',
        // 路由懒加载(只有当我们页面上要加载的时候的才会加载这个)节约浏览器性能资源
        component: () =>
            import ('../views/父传子props传参/Father_props.vue'),
        children: [{
            path: '/Son_props',
            component: () =>
                import ('../views/父传子props传参/Son_props.vue')
        }]

    },

    {
        path: '/Brother_one',
        name: 'Brother_one',
        // 路由懒加载(只有当我们页面上要加载的时候的才会加载这个)节约浏览器性能资源
        component: () =>
            import ('../views/兄弟组件router-link传参/Brother_one.vue'),
        children: [{
            path: '/Brother_two',
            component: () =>
                import ('../views/兄弟组件router-link传参/Brother_two.vue')
        }]

    },
    {
        path: '/Father_$meit',
        name: 'Father_$meit',
        // 路由懒加载(只有当我们页面上要加载的时候的才会加载这个)节约浏览器性能资源
        component: () =>
            import ('../views/子传父$meit传参/Father_$meit.vue'),
        children: [{
            path: '/Son_$meit',
            component: () =>
                import ('../views/子传父$meit传参/Son_$meit.vue')
        }]
    },
    {
        path: '/Father_eventBus',
        name: 'Father_eventBus',
        // 路由懒加载(只有当我们页面上要加载的时候的才会加载这个)节约浏览器性能资源
        component: () =>
            import ('../views/eventBus传参/Father_eventBus.vue'),
        children: [{
            path: '/Son_one_eventBus',
            component: () =>
                import ('../views/eventBus传参/Son_one_eventBus.vue'),
            children: [{
                path: '/Son_two_eventBu',
                component: () =>
                    import ('../views/eventBus传参/Son_two_eventBus.vue')
            }]
        }]
    },

    {
        path: '/test',
        name: 'test',
        component: () =>
            import ('../views/test.vue')

    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router