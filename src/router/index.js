import Vue from 'vue'
import Router from 'vue-router'
import PagePartyList from '@/components/pages/PagePartyList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PagePartyList',
      component: PagePartyList
    }
  ]
})
