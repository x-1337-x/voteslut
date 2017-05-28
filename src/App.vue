<template>
  <div id="app" class="container">
    <a href="https://console.firebase.google.com/project/voteslut/database/data/">Firebase</a>
    <nav-header></nav-header>
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

import {suggestions} from './db/index'
import NavHeader from './components/NavHeader'



export default {
  name: 'app',

  components: {
    NavHeader
  },

  firebase: {
    suggestions
  }
}
</script>

<style>

</style>
