<template>
  <div>
    <div class=" row well">
      <form class="add-poll" @submit.prevent="addPoll">
        <div class="form-group">
          <label for="username">TITLE</label>
          <input type="text" 
                 class="form-control" 
                 id="title" 
                 placeholder="Name it"
                 v-model="newPoll.title"
                 required>
        </div>
        <div class="form-group">
          <label for="question">Question</label>
          <input type="text" 
                 class="form-control"
                 id="question"
                 placeholder="Enter your question" 
                 v-model="newPoll.question"
                 required>
        </div>
        <div class="form-group">
          <label for="addOption">Add an option</label>
          <div class="input-group">
            <input type="text" 
                   class="form-control"
                   id="option"
                   placeholder="Type it in and press add" 
                   >
            <span class="input-group-btn">
              <button @click="addOption(this.option.value)"
                    type="button"
                    class="btn btn-secondary">Add</button>
            </span>
          </div>
        </div>
        <div class="form-group">
          <input class="form-check" type="checkbox" id="isActive" v-model="newPoll.active">
          <label for="isActive">Active poll</label>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
    <ul>
      <li v-for="poll in polls">
        {{ poll.title }}
        {{ poll.question }}
        {{ poll.active}}
        <ul>
          <li v-for="el in polls, poll.options">{{ el }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import {polls} from '../db/index'
import App from '../App'

export default {
  name: 'add-poll',
  methods: {
    addPoll: function() {
      if(this.newPoll.options.length < 2) {
        alert("Add at least two options");
        return;
      }
      console.log(this.newPoll)
      polls.push(this.newPoll);
      this.newPoll.title = '';
      this.newPoll.question = '';
    },
    addOption: function(vaule) {
      this.newPoll.options.push(vaule);
    }
  },

  firebase: {
    polls
  },

  data() {
    return {
      newPoll: {
        title: '',
        question: '',
        options: [],
        active: true
      },
      option: {}
    }
  },

  mounted() {
    this.option = document.getElementById("option")
  }
}
</script>


<style scoped>

</style>
