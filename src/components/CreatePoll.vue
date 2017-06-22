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
          <label for="options">Options</label>
          <ul class="poll-options">
            <li v-for="(option, i) in newPoll.options">{{ option }} <button type="button" @click="removeOption(i)">X</button></li>
          </ul>
        </div>
        <div class="form-group">
          <h4 for="settings">Settings:</h4>
          <label for="startDate">Start date</label>
          <input type="date" class="form-control" name="startDate" v-model="newPoll.settings.start" required>
          <label for="endDate">End date</label>
          <input type="date" class="form-control" name="endDate" v-model="newPoll.settings.stop" required>
          <label for="revealDate">Reveal date</label>
          <input type="date" class="form-control" name="revealDate" v-model="newPoll.settings.reveal">
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
          <li v-for="el in poll.options">{{ el }}</li>
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
  
  data() {
    return {
      newPoll: {
        title: '',
        question: '',
        options: [],
        active: true,
        settings: {
          maxVotes: 0, // 0 - unlimited, 1+ - limited
          start: '', // time to start vote
          stop: '', // time to stop vote
          reveal: '' // time to reveal
        }
      },
      option: '',
      now:''
    }
  },

  firebase: {
    polls
  },

  mounted: function() {
    let d = new Date(Date.now());
    this.now = Date.parse(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`)
  },

  methods: {
    addPoll: function() {
      if(this.newPoll.options.length < 2) {
        alert("Add at least two options");
        return;
      }

      if(!this.validateDates()) {
        return;
      }

      polls.push(this.newPoll);

      this.newPoll.title = '';
      this.newPoll.question = '';
      this.newPoll.options = [];
      this.option = '';
      this.newPoll.settings.start = '';
      this.newPoll.settings.stop = '';
      this.newPoll.settings.reveal = '';
    },

    addOption: function(value) {
      if (!value) {
        alert('please, type in option text before adding an option');
        return;
      }
      this.newPoll.options.push(value);
      document.getElementById('option').value = '';
    },

    removeOption: function(index) {
      this.newPoll.options.splice(index, 1);
    },

    validateDates: function() {
      let zero = this.now;
      let start = new Date(Date.parse(this.newPoll.settings.start));
          start = Date.parse(`${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`);

      let stop = new Date(Date.parse(this.newPoll.settings.stop));
          stop = Date.parse(`${stop.getFullYear()}-${stop.getMonth()}-${stop.getDate()}`);

      let reveal = new Date(this.newPoll.settings.reveal == "" ? Date.parse(this.newPoll.settings.stop) : Date.parse(this.newPoll.settings.reveal));
          reveal = Date.parse(`${reveal.getFullYear()}-${reveal.getMonth()}-${reveal.getDate()}`);

      if (stop < start) {
        alert("Start date cannot be set to after the end date");
        return false;
      } else if (start < zero) {
        alert("Start date cannot be set to before current date");
        return false;
      } else {
        return true;
      };
    }
  }
}
</script>


<style scoped>

</style>
