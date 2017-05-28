<template>
  <div id="app">
    <a href="https://console.firebase.google.com/project/voteslut/database/data/">Firebase</a>
    <router-view></router-view>
    <ul v-for="suggestion in suggestions">
      <li>
        {{ suggestion.id }}
        {{ suggestion.user }}
        {{ suggestion.suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>

import suggestions from './db/index'
import PollForm from './components/PollForm'


export default {
  name: 'app',

  components: {
    PollForm
  },

  firebase: {
    suggestions
  }
}
</script>

<style>

</style>
