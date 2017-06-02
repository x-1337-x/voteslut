import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import suggestPoll from '@/components/SuggestPoll'
import createPoll from '@/components/CreatePoll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/SuggestPoll',
      name: 'SuggestPoll',
      component: suggestPoll
    },
    {
      path: '/CreatePoll',
      name: 'createPoll',
      component: createPoll
    }
  ],
  mode: 'history'
})
