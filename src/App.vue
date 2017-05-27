<template>
  <div id="app">
    <a href="https://console.firebase.google.com/project/voteslut/database/data/">Firebase</a>
    <router-view :newSuggestion="newSuggestion" :addSuggestion="addSuggestion"></router-view>
  </div>
</template>

<script>

import Firebase from 'firebase'
import PollForm from './components/PollForm'

const config = {
  apiKey: "AIzaSyBBgF8EhXrDYjLrLA9Lr60jQxdCrnCkSRI",
  authDomain: "voteslut.firebaseapp.com",
  databaseURL: "https://voteslut.firebaseio.com",
  projectId: "voteslut",
  storageBucket: "voteslut.appspot.com",
  messagingSenderId: "784757964347"
};

let app = Firebase.initializeApp(config)
let db = app.database()
let suggestions = db.ref('Suggestions')

export default {
  name: 'app',

  components: {
    PollForm
  },

  firebase: {
    suggestions
  },

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

<style>

</style>
