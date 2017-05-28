<template>
  <div class="container">
    <div class="poll-form row well">
      <form class="poll-form" @submit.prevent="addSuggestion">
        <div class="form-group">
          <label for="username">USERNAME</label>
          <input type="text" 
                 class="form-control" 
                 id="username" 
                 placeholder="username"
                 v-model="newSuggestion.user"
                 required>
        </div>
        <div class="form-group">
          <label for="suggestion">Enter your suggestion</label>
          <input type="text" 
                 class="form-control"
                 id="suggestion"
                 placeholder="suggestion" 
                 v-model="newSuggestion.suggestion"
                 required>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

import suggestions from '../db/index'
import App from '../App'

export default {
  name: 'poll-form',
  methods: {
    addSuggestion: function() {
      suggestions.push(this.newSuggestion);
      this.newSuggestion.user = '';
      this.newSuggestion.suggestion = '';
    }
  },

  data() {
    return {
      newSuggestion: {
        id: Date.now(),
        suggestion: '',
        user: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
