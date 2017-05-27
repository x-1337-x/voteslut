import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import pollForm from '@/components/PollForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poll-form',
      component: pollForm
    }
  ]
})
