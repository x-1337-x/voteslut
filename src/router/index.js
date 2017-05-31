import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import pollForm from '@/components/PollForm'
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
      path: '/PollForm',
      name: 'pollForm',
      component: pollForm
    },
    {
      path: '/CreatePoll',
      name: 'createPoll',
      component: createPoll
    }
  ],
  mode: 'history'
})
