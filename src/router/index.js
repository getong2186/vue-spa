import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false
  this.isleft = true
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: (resolve) => require(['@/pages/login'], resolve),
    },
    {
      path: '/server',
      name: 'server',
      component: (resolve) => require(['@/pages/server'], resolve),
    },
    {
      path: '/home',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      // redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/pages/index/home'], resolve)
        },
        {
          path: '/swa',
          name: 'swa',
          component: (resolve) => require(['@/pages/index/swa'], resolve)
        },
        {
          path: '/mine',
          name: 'mine',
          component: (resolve) => require(['@/pages/index/mine'], resolve)
        },
        {
          path: '/day',
          name: 'day',
          component: (resolve) => require(['@/pages/index/day'], resolve)
        }
      ]
    },
    {
      path: '/home/search',
      name: 'search',
      component: (resolve) => require(['@/pages/detail/home_search'], resolve)
    },
    {
      path: '/swa/detail',
      name: 'detail',
      component: (resolve) => require(['@/pages/detail/swa_detail'], resolve)
    }
  ]
})
