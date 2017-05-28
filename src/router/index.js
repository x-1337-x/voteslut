import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import pollForm from '@/components/PollForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/PollForm',
      name: 'pollForm',
      component: pollForm
    }
  ],
  mode: 'history'
})
