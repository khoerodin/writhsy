import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'board-page',
      component: require('@/components/BoardPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
