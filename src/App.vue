<template>
  <div id="app" class="container">
    <a href="https://console.firebase.google.com/project/voteslut/database/data/">Firebase</a>
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>

import {suggestions} from './db/index'
import NavHeader from './components/NavHeader'



export default {
  name: 'app',

  components: {
    NavHeader
  }
}
</script>

<style>

</style>
