<template>
  <nav class="navbar row navbar-default">
    <ul class="nav navbar-nav">
      <li class="active"><router-link to="/">HOME</router-link></li>
      <li class="active"><router-link to="/SuggestPoll">Suggest A Poll</router-link></li>
      <li class="active"><router-link to="/CreatePoll">Create A Poll</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'nav-header'
}
</script>


<style scoped>

</style>
